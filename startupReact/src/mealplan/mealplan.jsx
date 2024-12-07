import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './mealplan.css';
import { useMealPlanLogic } from './logic/mealPlanLogic';

export function MealPlan() {
  const [date, setDate] = useState(new Date());
  const [meal, setMeal] = useState('');
  const [meals, setMeals] = useState([]);
  const [userId] = useState('');

  const { savedRecipes, loading } = useMealPlanLogic(userId);

  useEffect(() => {
    const fetchMeals = async () => {
      const dateString = date.toISOString().split('T')[0];
      try {
        const response = await fetch(`/api/getMeals/${dateString}`);
        const data = await response.json();
        setMeals(data);
      } catch (error) {
        console.error('Error fetching meals:', error);
      }
    };

    fetchMeals();
  }, [date]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleMealSave = async (mealTitle) => {
    if (!mealTitle) {
      mealTitle = meal;
    }

    if (!mealTitle) {
      return;
    }

    const dateString = date.toISOString().split('T')[0];
    try {
      const response = await fetch('/api/saveMeal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date: dateString, meal: mealTitle }),
      });

      if (response.ok) {
        setMeals([...meals, { date: dateString, meal: mealTitle }]);
        setMeal('');
      }
    } catch (error) {
      console.error('Error saving meal:', error);
    }
  };

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Meal Planner</h1>
      <div className="row">
        {/* Sidebar for Recipes */}
        <div className="col-md-4 col-12 mb-4">
          <div
            id="sidebar"
            className="p-3 bg-light rounded shadow-lg" // Added shadow-lg class
          >
            <h4 className="text-center">My Recipes</h4>
            <div className="recipe-container">
              {loading ? (
                <p>Loading saved recipes...</p>
              ) : savedRecipes.length > 0 ? (
                savedRecipes.map((recipe, index) => (
                  <div className="card mb-3" key={recipe.id || index}>
                    <img
                      src={recipe.image || 'recipe-image.jpg'}
                      className="card-img-top"
                      alt={recipe.title || 'Recipe'}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{recipe.title}</h5>
                      <button
                        className="btn btn-primary btn-sm"
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
        </div>

        {/* Main Planner Section */}
        <div className="col-md-8 col-12">
          {/* Calendar */}
          <div className="mb-4">
            <Calendar
              onChange={handleDateChange}
              value={date}
              className="w-100"
            />
          </div>

          {/* Save Meal Section */}
          <div className="input-group mb-3">
            <input
              type="text"
              value={meal}
              onChange={(e) => setMeal(e.target.value)}
              className="form-control"
              placeholder="Enter meal"
            />
            <button
              className="btn btn-secondary"
              onClick={() => handleMealSave(meal)}
            >
              Save Meal
            </button>
          </div>

          {/* Meals List */}
          <div className="mt-3">
            <h5>Meals for {date.toDateString()}:</h5>
            <ul className="list-group">
              {meals.map((mealItem, index) => (
                <li key={index} className="list-group-item">
                  {mealItem.meal}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
