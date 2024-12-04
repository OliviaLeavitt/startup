// useMealPlan.js
import { useState, useEffect } from 'react';

export const useMealPlan = (userId) => {
  const [mealPlan, setMealPlan] = useState({}); // Initialize mealPlan as an empty object

  useEffect(() => {
    const loadMealPlan = async () => {
      try {
        const response = await fetch(`/api/getMealPlan?userId=${userId}`);
        const data = await response.json();

        if (data.mealPlan) {
          setMealPlan(data.mealPlan); // Set mealPlan to the fetched data
        }
      } catch (error) {
        console.error('Error loading meal plan:', error);
      }
    };

    loadMealPlan();
  }, [userId]); // Reload meal plan if userId changes

  return { mealPlan, setMealPlan }; // Return mealPlan state and setter
};
