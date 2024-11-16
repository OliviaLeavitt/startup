const express = require('express');
const uuid = require('uuid');
const app = express();

let users = {};
let scores = [];

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

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
  console.log(cuisine, dietaryPreference, mealType, timeToMake);  // Log values for debugging

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

  //to do add popularity sorting

  // Fetch from Spoonacular API
  try {
    console.log("API URL: ", apiUrl)
    const response = await fetch(apiUrl);
    console.log('response: ', response)
    const data = await response.json();
    res.json(data.results);  // Send the filtered recipes to the frontend
  } catch (error) {
    console.error('Error fetching from Spoonacular:', error);
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