import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './mealplan.css';

export function MealPlan() {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [mealPlan, setMealPlan] = useState({});
  const [userId, setUserId] = useState('user123'); // Example user ID, replace with actual user data

  // Fetch saved recipes (you already have this part)
  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await fetch('/api/getMyRecipes');
        const data = await response.json();
        const recipeIds = data.recipes;

        if (recipeIds.length > 0) {
          const recipeDetails = await Promise.all(
            recipeIds.map(async (id) => {
              const res = await fetch(`/api/recipeInstructions/${id}`);
              return await res.json();
            })
          );
          setSavedRecipes(recipeDetails);
        }
      } catch (error) {
        console.error('Error fetching saved recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedRecipes();
  }, []);

  

  // Fetch and load the meal plan when the component mounts
  useEffect(() => {
    const loadMealPlan = async () => {
      try {
        const response = await fetch(`/api/getMealPlan?userId=${userId}`);
        const data = await response.json();

        if (data.mealPlan) {
          setMealPlan(data.mealPlan);
        }
      } catch (error) {
        console.error('Error loading meal plan:', error);
      }
    };

    loadMealPlan();
  }, [userId]); // Reload meal plan if userId changes

  // Function to handle adding a recipe to the calendar
  const handleAddToCalendar = (recipe) => {
    setSelectedRecipe(recipe); // Store selected recipe
  };

  // Function to handle assigning the recipe to a specific meal slot
  const assignRecipeToSlot = (day, meal) => {
    setMealPlan((prevPlan) => ({
      ...prevPlan,
      [`${day}-${meal}`]: selectedRecipe,
    }));
    setSelectedRecipe(null); // Clear selection after assigning
  };

  // Function to save the meal plan to the backend
  const saveMealPlanToBackend = async () => {
    try {
      const response = await fetch('/api/saveMealPlan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId,  // Replace with the actual user ID
          mealPlan: mealPlan,  // Send the meal plan object
        }),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message); // Alert or handle success
      } else {
        alert('Error saving meal plan');
      }
    } catch (error) {
      console.error('Error sending meal plan to backend:', error);
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar for Recipes */}
          <nav id="sidebar" className="col-md-3 sidebar">
            <div className="sidebar-sticky">
              <h4>My Recipes</h4>
              <div className="recipe-container" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                {loading ? (
                  <p>Loading saved recipes...</p>
                ) : savedRecipes.length > 0 ? (
                  savedRecipes.map((recipe, index) => (
                    <div className="card recipe-card mb-3" key={recipe.id || index}>
                      <img src={recipe.image || 'recipe-image.jpg'} className="card-img-top" alt={recipe.title || 'Recipe'} />
                      <div className="card-body">
                        <h5 className="card-title">{recipe.title}</h5>
                        <button
                          className="btn btn-calendar btn-sm"
                          onClick={() => handleAddToCalendar(recipe)}
                        >
                          Add to Calendar
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No saved recipes found.</p>
                )}
              </div>
            </div>
          </nav>

          {/* Main Planner Section */}
          <main className="col-md-9 ml-sm-auto col-lg-9 px-4">
            <div className="hero">
              <h2>Your Meal Planner</h2>
            </div>

            <div className="calendar">
              {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                <div className="day" key={day}>
                  <h5>{day}</h5>
                  {['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Dessert'].map((meal) => (
                    <div
                      className="meal-box"
                      key={meal}
                      onClick={() => selectedRecipe && assignRecipeToSlot(day, meal)} // Assign recipe on click
                      style={{ cursor: selectedRecipe ? 'pointer' : 'default', position: 'relative' }}
                    >
                      {meal}
                      {mealPlan[`${day}-${meal}`] && (
                        <div className="assigned-recipe">
                          <small>{mealPlan[`${day}-${meal}`].title}</small>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Button to save the meal plan */}
            <button className="btn btn-primary" onClick={saveMealPlanToBackend}>
              Save Meal Plan
            </button>
          </main>
        </div>
      </div>
    </div>
  );
}
