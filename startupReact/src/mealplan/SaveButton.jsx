import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './mealplan.css';
import { useMealPlanLogic } from './logic/mealPlanLogic'; 
import { RecipeSidebar } from './RecipeSidebar';  // Import the RecipeSidebar component
import { MealPlanner } from './Mealplanner';   // Import the MealPlanner component
import { SaveButton } from './SaveButton';  // Import the SaveButton component

export function MealPlan() {
  const [userId] = useState('user123');
  
  const {
    savedRecipes,
    loading,
    selectedRecipe,
    mealPlan,
    handleAddToCalendar,
    assignRecipeToSlot,
    saveMealPlanToBackend,
  } = useMealPlanLogic(userId);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          
          {/* Sidebar for Recipes */}
          <RecipeSidebar 
            savedRecipes={savedRecipes} 
            loading={loading} 
            handleAddToCalendar={handleAddToCalendar} 
          />

          {/* Main Planner Section */}
          <MealPlanner
            mealPlan={mealPlan}
            selectedRecipe={selectedRecipe}
            assignRecipeToSlot={assignRecipeToSlot}
          />

          {/* Button to save the meal plan */}
          <SaveButton onClick={saveMealPlanToBackend} />
        </div>
      </div>
    </div>
  );
}
