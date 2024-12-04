const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url, { tls: true, serverSelectionTimeoutMS: 3000, autoSelectFamily: false });
const db = client.db('startup');
const userCollection = db.collection('user');
const usersRecipeIds = db.collection('recipeIds');
const mealPlanCollection = db.collection('mealPlans'); // Define mealPlans collection

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

async function addMealToUserMealPlan(userId, date, meal) {
  try {
    const result = await mealPlanCollection.updateOne(
      { userId: userId },
      { $push: { meals: { date, meal } } }, // Adds a new meal with the date
      { upsert: true } // If the user doesn't have a meal plan, create one
    );
    return result;
  } catch (error) {
    console.error('Error saving meal to user meal plan:', error);
  }
}

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
    recipes: [],
  };
  await userCollection.insertOne(user);
  return user;
}

async function addRecipeId(userId, recipeId) {
  try {
    const result = await userCollection.updateOne(
      { _id: userId },
      { $addToSet: { recipes: recipeId } } // Prevent duplicates
    );
    return result;
  } catch (error) {
    console.error('Error adding recipe ID to user:', error);
  }
}

async function getUserSavedRecipes(userId) {
  try {
    const user = await userCollection.findOne({ _id: userId }, { projection: { recipes: 1 } });

    if (!user) {
      return { message: "User not found." };
    }
    return { recipes: user.recipes };
  } catch (error) {
    console.error('Error retrieving saved recipes for user:', error);
    return { message: "There was an error retrieving your saved recipes." };
  }
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addRecipeId,
  getUserSavedRecipes,
  addMealToUserMealPlan
};
