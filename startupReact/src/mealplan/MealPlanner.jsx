import React from 'react';

export function MealPlanner({ mealPlan, selectedRecipe, assignRecipeToSlot }) {
  return (
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
                onClick={() => selectedRecipe && assignRecipeToSlot(day, meal)}  // Assign recipe when a meal box is clicked
                style={{ cursor: selectedRecipe ? 'pointer' : 'default', position: 'relative' }}
              >
                {meal}

                {/* Display assigned recipe for this day and meal slot */}
                {mealPlan[`${day}-${meal}`] && (
                  <div className="assigned-recipe">
                    <small>{mealPlan[`${day}-${meal}`].title}</small>
                  </div>
                )}

                {/* Optionally, show the selected recipe if no meal has been assigned yet */}
                {!mealPlan[`${day}-${meal}`] && selectedRecipe && (
                  <div className="selected-recipe-placeholder">
                    <small>Select to assign</small>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}

