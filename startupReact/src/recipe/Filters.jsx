// Filters.js
import React from 'react';

export function Filters({
  cuisine,
  setCuisine,
  dietaryPreference,
  setDietaryPreference,
  mealType,
  setMealType,
  timeToMake,
  setTimeToMake,
  handleFilter,
}) {
  return (
        <section className="filters mb-4">
          <div className="wrapper">
            <h2>Filter Recipes</h2>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="cuisine">Cuisine:</label>
                <select
                  id="cuisine"
                  className="form-control"
                  value={cuisine}
                  onChange={(e) => setCuisine(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="african">African</option>
                  <option value="asian">Asian</option>
                  <option value="american">American</option>
                  <option value="british">British</option>
                  <option value="cajun">Cajun</option>
                  <option value="caribbean">Caribbean</option>
                  <option value="chinese">Chinese</option>
                  <option value="eastern european">Eastern European</option>
                  <option value="european">European</option>
                  <option value="french">French</option>
                  <option value="german">German</option>
                  <option value="greek">Greek</option>
                  <option value="indian">Indian</option>
                  <option value="irish">Irish</option>
                  <option value="italian">Italian</option>
                  <option value="japanese">Japanese</option>
                  <option value="jewish">Jewish</option>
                  <option value="korean">Korean</option>
                  <option value="latin american">Latin American</option>
                  <option value="mediterranean">Mediterranean</option>
                  <option value="mexican">Mexican</option>
                  <option value="middle eastern">Middle Eastern</option>
                  <option value="nordic">Nordic</option>
                  <option value="southern">Southern</option>
                  <option value="spanish">Spanish</option>
                  <option value="thai">Thai</option>
                  <option value="vietnamese">Vietnamese</option>
            
                </select>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="dietary-preference">Dietary Preference:</label>
                <select
                  id="dietary-preference"
                  className="form-control"
                  value={dietaryPreference}
                  onChange={(e) => setDietaryPreference(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="gluten-free">Gluten-Free</option>
                  <option value="ketogenic">Ketogenic</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="lacto-vegetarian">Lacto-Vegetarian</option>
                  <option value="ovo-vegetarian">Ovo-Vegetarian</option>
                  <option value="vegan">Vegan</option>
                  <option value="pescetarian">Pescetarian</option>
                  <option value="paleo">Paleo</option>
                  <option value="primal">Primal</option>
                  <option value="low-fodmap">Low FODMAP</option>
                  <option value="whole30">Whole30</option>

                </select>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="meal-type">Meal Type:</label>
                <select
                  id="meal-type"
                  className="form-control"
                  value={mealType}
                  onChange={(e) => setMealType(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="main course">Main Course</option>
                  <option value="side dish">Side Dish</option>
                  <option value="dessert">Dessert</option>
                  <option value="appetizer">Appetizer</option>
                  <option value="salad">Salad</option>
                  <option value="bread">Bread</option>
                  <option value="breakfast">Breakfast</option>
                  <option value="soup">Soup</option>
                  <option value="beverage">Beverage</option>
                  <option value="sauce">Sauce</option>
                  <option value="marinade">Marinade</option>
                  <option value="fingerfood">Fingerfood</option>
                  <option value="snack">Snack</option>
                  <option value="drink">Drink</option>
                </select>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="time-to-make">Time to Make:</label>
                <select
                  id="time-to-make"
                  className="form-control"
                  value={timeToMake}
                  onChange={(e) => setTimeToMake(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="10">Under 10 minutes</option>
                  <option value="20">under 20 minutes</option>
                  <option value="30">under 30 minutes</option>
                  <option value="45">under 45 minutes</option>
                  <option value="60">under 60 minutes</option>
                  {/* Add more time options if necessary */}
                </select>
              </div>
            </div>
            <button className="btn btn-secondary" id="filter-button" onClick={handleFilter}>
              Filter
            </button>
          </div>
        </section>
  );
}
