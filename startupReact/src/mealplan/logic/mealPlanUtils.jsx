// mealPlanUtils.js
export const handleAddToCalendar = (setSelectedRecipe, recipe) => {
  setSelectedRecipe(recipe); // Store selected recipe
};

export const assignRecipeToSlot = (mealPlan, setMealPlan, selectedRecipe, day, meal) => {
  setMealPlan((prevPlan) => ({
    ...prevPlan,
    [`${day}-${meal}`]: selectedRecipe,
  }));
};

export const saveMealPlanToBackend = async (userId, mealPlan) => {
  try {
    const response = await fetch('/api/saveMealPlan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: userId,
        mealPlan: mealPlan,
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
