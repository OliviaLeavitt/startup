const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url, { tls: true, serverSelectionTimeoutMS: 3000, autoSelectFamily: false });
const db = client.db('startup');
const userCollection = db.collection('user')
const mealPlanCollection = db.collection('mealPlans'); // Define mealPlans collection
const groceriesCollection = db.collection('groceries')

// async function removeGroceryItem(userId, itemName) {
//   try {
//     const result = await groceriesCollection.updateOne(
//       { userId: userId },
//       { $pull: { groceries: { name: itemName } } }
//     );

//     if (result.modifiedCount > 0) {
//       console.log(`Successfully removed ${itemName} from groceries for user ID: ${userId}`);
//       return { success: true, message: `Removed ${itemName}` };
//     } else {
//       console.log(`No matching grocery item found for user ID: ${userId}`);
//       return { success: false, message: `Item ${itemName} not found` };
//     }
//   } catch (error) {
//     console.error('Error removing grocery item:', error);
//     return { success: false, message: 'Error removing grocery item' };
//   }
// }

async function removeGroceryItem(userId, name, quantity) {
  try {
    const result = await groceriesCollection.updateOne(
      { userId: userId },
      { $pull: { groceries: { name, quantity } } }, 
    );
    return result;
  } catch (error) {
    console.error('Error removing grocery item:', error);
  }
}

function getUser(email) {
  return userCollection.findOne({ email: email });
}


async function getGroceries(userId) {
  console.log(`Fetching groceries for user ID: ${userId}`);
  try {
    // Query the database for the groceries of the given user
    const groceryData = await groceriesCollection.find({ userId: userId }).toArray();

    if (groceryData.length > 0) {
      const groceries = groceryData[0].groceries;  // Return groceries for the user
      console.log(`Retrieved groceries: ${JSON.stringify(groceries)}`);
      return groceries;
    } else {
      console.log('No groceries found.');
      return [];  // Return empty array if no groceries exist
    }
  } catch (error) {
    console.error('Error retrieving groceries:', error);
    throw error;  // Propagate the error
  }
}



async function getMealsByDate(userId, date) {
  console.log(`Fetching meals for user ID: ${userId}, Date: ${date}`);
  try {
    // Use $elemMatch to filter documents where at least one element in 'meals' matches the date
    const mealsData = await mealPlanCollection.find({
      userId: userId,
      meals: { $elemMatch: { date: date } }
    }).toArray();

    if (mealsData.length > 0) {
      // Extract and flatten the meals matching the date
      const meals = mealsData[0].meals.filter(meal => meal.date === date);
      console.log(`Retrieved meals: ${JSON.stringify(meals)}`);
      return meals;
    } else {
      console.log('No meals found for this date.');
      return [];
    }
  } catch (error) {
    console.error('Error retrieving meals:', error);
    throw error;
  }
}

async function saveGroceryItem(userId, name, quantity) {
  try {
    const result = await groceriesCollection.updateOne(
      { userId: userId },
      { $push: { groceries: { name, quantity } } }, 
      { upsert: true } 
    );
    return result;
  } catch (error) {
    console.error('Error saving grocery to users groceries:', error);
  }
}

function getUser(email) {
  return userCollection.findOne({ email: email });
}


async function addMealToUserMealPlan(userId, date, meal) {
  try {
    const result = await mealPlanCollection.updateOne(
      { userId: userId },
      { $push: { meals: { date, meal } } }, 
      { upsert: true } 
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
  addMealToUserMealPlan,
  getMealsByDate,
  saveGroceryItem,
  getGroceries,
  removeGroceryItem,
};
