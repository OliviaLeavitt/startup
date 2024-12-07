const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';
const port = process.argv.length > 2 ? process.argv[2] : 4000;
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));
app.set('trust proxy', true);
const apiRouter = express.Router();
app.use(`/api`, apiRouter);


apiRouter.delete('/removeGroceryItem', async (req, res) => {
  const { name, quantity } = req.body;
  const authToken = req.cookies[authCookieName];
  if (!authToken) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }
  const user = await DB.getUserByToken(authToken);
  if (!user) {
    return res.status(401).json({ success: false, message: 'User not found or invalid token' });
  }
  if (!name || !quantity) {
    return res.status(400).json({ success: false, message: 'name and quantity are required' });
  }
  try {
    await DB.removeGroceryItem(user._id, name, quantity); 

    res.json({ success: true, message: 'Grocery removed successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error removing grocery' });
  }
});



apiRouter.get('/getGroceries', async (req, res) => {
  const authToken = req.cookies[authCookieName];
  console.log(`Request to fetch groceries, Auth token: ${authToken ? 'Present' : 'Missing'}`);

  const user = await DB.getUserByToken(authToken);
  if (!user) {
    console.warn(`Unauthorized access attempt on ${new Date()}`);
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  console.log(`Authorized user: ${user._id}`);

  try {
    const groceries = await DB.getGroceries(user._id);  
    console.log(`Sending response with groceries: ${JSON.stringify(groceries)}`);
    res.json(groceries);
  } catch (error) {
    console.error('Error in /getGroceries route:', error);
    res.status(500).json({ success: false, message: 'Error retrieving groceries.' });
  }
});


apiRouter.get('/getMeals/:date', async (req, res) => {
  const { date } = req.params;
  const authToken = req.cookies[authCookieName];
  console.log(`Request to fetch meals for date: ${date}, Auth token: ${authToken ? 'Present' : 'Missing'}`);

  const user = await DB.getUserByToken(authToken);
  if (!user) {
    console.warn(`Unauthorized access attempt on ${date}`);
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  console.log(`Authorized user: ${user._id}`);

  try {
    const meals = await DB.getMealsByDate(user._id, date);
    console.log(`Sending response with meals: ${JSON.stringify(meals)}`);
    res.json(meals);
  } catch (error) {
    console.error('Error in /getMeals route:', error);
    res.status(500).json({ success: false, message: 'Error retrieving meals.' });
  }
});


apiRouter.post('/saveMeal', async (req, res) => {
  const { date, meal } = req.body;
  const authToken = req.cookies[authCookieName];
  if (!authToken) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }
  const user = await DB.getUserByToken(authToken);
  if (!user) {
    return res.status(401).json({ success: false, message: 'User not found or invalid token' });
  }
  if (!date || !meal) {
    return res.status(400).json({ success: false, message: 'Date and meal are required' });
  }
  try {
    await DB.addMealToUserMealPlan(user._id, date, meal); 

    res.json({ success: true, message: 'Meal saved successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error saving meal' });
  }
});

apiRouter.post('/saveGroceryItem', async (req, res) => {
  const { name, quantity } = req.body;
  const authToken = req.cookies[authCookieName];
  if (!authToken) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }
  const user = await DB.getUserByToken(authToken);
  if (!user) {
    return res.status(401).json({ success: false, message: 'User not found or invalid token' });
  }
  if (!name || !quantity) {
    return res.status(400).json({ success: false, message: 'name and quantity are required' });
  }
  try {
    await DB.saveGroceryItem(user._id, name, quantity);

    res.json({ success: true, message: 'Grocery saved successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error saving grocery' });
  }
});


apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);
    setAuthCookie(res, user.token);
    res.send({
      id: user._id,
    });
  }
});

apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  const authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

apiRouter.get('/getMyRecipes', async (req, res) => {
  const authToken = req.cookies[authCookieName];

  const user = await DB.getUserByToken(authToken);

  if (!user) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }
  try {
    const savedRecipes = await DB.getUserSavedRecipes(user._id);

    if (savedRecipes && savedRecipes.recipes) {
      res.json({ success: true, recipes: savedRecipes.recipes });
    } else {
      res.status(404).json({ success: false, message: 'No saved recipes found' });
    }
  } catch (error) {
    console.error('Error retrieving saved recipes:', error);
    res.status(500).json({ success: false, message: 'Error retrieving saved recipes' });
  }
});

apiRouter.post('/addToMyRecipes', async (req, res) => {
  const { recipeId } = req.body;
  
  const authToken = req.cookies[authCookieName];

  const user = await DB.getUserByToken(authToken);

  if (!user) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  if (!recipeId) {
    return res.status(400).json({ success: false, message: 'Recipe ID is required' });
  }

  try {
    await DB.addRecipeId(user._id, recipeId); 
    res.json({ success: true, message: 'Recipe added to your list!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error adding recipe to your list' });
  }
});

app.get('/api/recipes', async (req, res) => {
  const { cuisine, dietaryPreference, mealType, timeToMake } = req.query; 
  console.log("Filters: ", cuisine, dietaryPreference, mealType, timeToMake); 

  const apiKey = '8af18130a6e745af86d2389ff16a9e9c';
  let apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=100&sort=popularity`;

  if (cuisine && cuisine !== 'all') {
    apiUrl += `&cuisine=${cuisine}`;
  }
  if (dietaryPreference && dietaryPreference !== 'all') {
    apiUrl += `&diet=${dietaryPreference}`;
  }
  if (mealType && mealType !== 'all') {
    apiUrl += `&type=${mealType}`;
  }
  if (timeToMake && timeToMake !== 'all') {
    apiUrl += `&maxReadyTime=${timeToMake}`;
  }
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error('Error fetching from Spoonacular:', error);
    res.status(500).send('Internal Server Error');
  }
});

const SPOONACULAR_API_KEY = '8af18130a6e745af86d2389ff16a9e9c';

app.get('/api/recipeInstructions/:id', async (req, res) => {
  const recipeId = req.params.id;

  if (!recipeId) {
    return res.status(400).json({ error: 'Recipe ID is required' });
  }

  try {
    const spoonacularUrl = `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${SPOONACULAR_API_KEY}`;
    const response = await fetch(spoonacularUrl);
    if (!response.ok) {
      throw new Error(`Spoonacular API request failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data); 
    

    res.json(data);

  } catch (error) {
    console.error('Error fetching recipe instructions:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});


function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});