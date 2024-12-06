import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './mealplan.css';
import { useMealPlanLogic } from './logic/mealPlanLogic';

export function MealPlan() {
  // State hooks
  const [date, setDate] = useState(new Date());
  const [meal, setMeal] = useState('');
  const [meals, setMeals] = useState([]);
  const [userId] = useState('');

  // Meal plan logic hook
  const { savedRecipes, loading } = useMealPlanLogic(userId);

  // Fetch meals on date change
  useEffect(() => {
    const fetchMeals = async () => {
      const dateString = date.toISOString().split('T')[0];
      console.log(`Fetching meals for date: ${dateString}`);

      try {
        const response = await fetch(`/api/getMeals/${dateString}`);
        const data = await response.json();
        console.log('Fetched data:', data);
        setMeals(data);
      } catch (error) {
        console.error('Error fetching meals:', error);
      }
    };

    fetchMeals();
  }, [date]);

  // Handle date change
  const handleDateChange = (newDate) => {
    console.log('Date changed to:', newDate);
    setDate(newDate);
  };

  // Save a new meal
  const handleMealSave = async (recipeTitle) => {
    if (!recipeTitle) {
      console.log('No meal entered. Exiting save operation.');
      return;
    }

    const dateString = date.toISOString().split('T')[0];
    console.log(`Saving meal: ${recipeTitle} for date: ${dateString}`);

    try {
      const response = await fetch('/api/saveMeal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date: dateString, meal: recipeTitle }),
      });

      if (response.ok) {
        console.log('Meal saved successfully');
        setMeals([...meals, { date: dateString, meal: recipeTitle }]);
      } else {
        console.error('Failed to save meal');
      }
    } catch (error) {
      console.error('Error saving meal:', error);
    }
  };

  return (
    <div>
      <h1>Meal Planner</h1>
      <div className="container-fluid">
        {/* Sidebar for Recipes */}
        <div className="row">
          <div className="col-md-3 p-3">
            <nav id="sidebar" className="sidebar">
              <div className="sidebar-sticky">
                <h4>My Recipes</h4>
                <div className="recipe-container" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                  {loading ? (
                    <p>Loading saved recipes...</p>
                  ) : savedRecipes.length > 0 ? (
                    savedRecipes.map((recipe, index) => (
                      <div className="card recipe-card mb-3" key={recipe.id || index}>
                        <img
                          src={recipe.image || 'recipe-image.jpg'}
                          className="card-img-top"
                          alt={recipe.title || 'Recipe'}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{recipe.title}</h5>
                          <button
                            className="btn btn-calendar btn-sm"
                            onClick={() => handleMealSave(recipe.title)}
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
          </div>
        </div>

        {/* Main Planner Section */}
        <div className="row">
          <div className="col-md-9 p-3">
            {/* Calendar */}
            <Calendar
              onChange={handleDateChange}
              value={date}
              className="calendar-fullwidth"
            />

            {/* Save Meal Section */}
            <div>
              <h2>Save a Meal</h2>
              <input
                type="text"
                value={meal}
                onChange={(e) => setMeal(e.target.value)}
                placeholder="Enter meal"
              />
              <button onClick={handleMealSave}>Save Meal</button>
            </div>

            {/* Display Meals for the Selected Date */}
            <div>
              <h3>Meals for {date.toDateString()}</h3>
              {meals.length > 0 ? (
                <ul>
                  {meals.map((mealItem, index) => (
                    <li key={index}>{mealItem.meal}</li>
                  ))}
                </ul>
              ) : (
                <p>No meals saved for this day.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
