const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url, {tls:true, serverSelectionTimeoutMS:3000, autoSelectFamily: false,});
const db = client.db('startup');
const userCollection = db.collection('user');
const usersRecipeIds = db.collection('recipeIds');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
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
      { _id: userId },  // Find the user by their ID
      { $addToSet: { recipes: recipeId } }  // Add recipeId to the recipes array only if it's not already present
    );
    return result;
  } catch (error) {
    console.error('Error adding recipe ID to user:', error);
  }
}


async function getUserSavedRecipes(userId) {
  try {
    // Find the user by their ID and return the 'recipes' array
    const user = await userCollection.findOne({ _id: userId }, { projection: { recipes: 1 } });

    if (!user) {
      return { message: "User not found." };
    }

    // Return the list of saved recipe IDs
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
};