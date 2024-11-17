const express = require('express');
const uuid = require('uuid');
const app = express();

let users = {};
let scores = [];
let myRecipes = [];

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);


apiRouter.post('/addToMyRecipes', (req, res) => {
  const { recipeId } = req.body;

  if (!recipeId) {
    return res.status(400).json({ success: false, message: 'Recipe ID is required' });
  }

  myRecipes.push(recipeId); 
  res.json({ success: true, message: 'Recipe added to your list!' });
  console.log(myRecipes)
});


// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = { email: req.body.email, password: req.body.password, token: uuid.v4() };
    users[user.email] = user;

    res.send({ token: user.token });
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




// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    if (req.body.password === user.password) {
      user.token = uuid.v4();
      res.send({ token: user.token });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', (req, res) => {
  const user = Object.values(users).find((u) => u.token === req.body.token);
  if (user) {
    delete user.token;
  }
  res.status(204).end();
});

// GetScores
apiRouter.get('/scores', (_req, res) => {
  res.send(scores);
});

// SubmitScore
apiRouter.post('/score', (req, res) => {
  scores = updateScores(req.body, scores);
  res.send(scores);
});

// updateScores considers a new score for inclusion in the high scores.
function updateScores(newScore, scores) {
  let found = false;
  for (const [i, prevScore] of scores.entries()) {
    if (newScore.score > prevScore.score) {
      scores.splice(i, 0, newScore);
      found = true;
      break;
    }
  }

  if (!found) {
    scores.push(newScore);
  }

  if (scores.length > 10) {
    scores.length = 10;
  }

  return scores;
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});