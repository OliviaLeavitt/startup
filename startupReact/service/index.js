const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';

// The service port may be set on the command line
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the applications static content
app.use(express.static('public'));

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

let users = {};
let scores = [];
let myRecipes = [];

apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

// GetAuth token for the provided credentials
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

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// secureApiRouter verifies credentials for endpoints
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


apiRouter.post('/addToMyRecipes', (req, res) => {
  const { recipeId } = req.body;

  if (!recipeId) {
    return res.status(400).json({ success: false, message: 'Recipe ID is required' });
  }

  myRecipes.push(recipeId); 
  res.json({ success: true, message: 'Recipe added to your list!' });
  console.log(myRecipes)
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

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// setAuthCookie in the HTTP response
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