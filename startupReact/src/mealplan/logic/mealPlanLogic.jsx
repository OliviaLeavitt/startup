// mealPlanLogic.js
import { useState } from 'react';
import { useSavedRecipes } from './useSavedRecipes'; // Import custom hook for saved recipes
import { useMealPlan } from './useMealPlan'; // Import custom hook for meal plan
import { handleAddToCalendar, assignRecipeToSlot, saveMealPlanToBackend } from './mealPlanUtils'; // Import utility functions

export const useMealPlanLogic = (userId) => {
  const { savedRecipes, loading } = useSavedRecipes(); // Use the custom hook for saved recipes
  const { mealPlan, setMealPlan } = useMealPlan(userId); // Use the custom hook for meal plan

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return {
    savedRecipes,
    loading,
    selectedRecipe,
    mealPlan,
    handleAddToCalendar: (recipe) => handleAddToCalendar(setSelectedRecipe, recipe), // Handle recipe selection
    assignRecipeToSlot: (day, meal) => assignRecipeToSlot(mealPlan, setMealPlan, selectedRecipe, day, meal), // Assign recipe to slot
    saveMealPlanToBackend: () => saveMealPlanToBackend(userId, mealPlan), // Save meal plan
  };
};
