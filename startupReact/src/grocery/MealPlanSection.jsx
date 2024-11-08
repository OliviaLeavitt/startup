import React from 'react';
import './grocery.css';

export function MealPlanSection() {
  return (
    <div className="card mb-4 wrapper">
      <div className="card-body">
        <h2>Add Items from Meal Plan Recipes</h2>
        <div className="form-group">
          <label htmlFor="recipeSelect">Select a Recipe:</label>
          <select className="form-control" id="recipeSelect">
            <option value="">--Choose a Recipe--</option>
            <option value="recipe1">Recipe 1</option>
            <option value="recipe2">Recipe 2</option>
            <option value="recipe3">Recipe 3</option>
          </select>
        </div>
        <button className="btn btn-primary id=addMealPlanItemsBtn">Add All Items from Selected Recipe</button>
      </div>
    </div>
  );
}
