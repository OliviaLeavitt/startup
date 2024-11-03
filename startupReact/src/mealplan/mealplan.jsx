import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './mealplan.css/'

export function MealPlan() {
  return (
    <div>

      {/* Main Content */}
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar for Recipes */}
          <nav id="sidebar" className="col-md-3 sidebar">
            <div className="sidebar-sticky">
              <h4>My Recipes</h4>
              <div className="recipe-container" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                {[...Array(3)].map((_, index) => (
                  <div className="card recipe-card" key={index}>
                    <img src="recipe-image.jpg" className="card-img-top" alt="Placeholder Recipe" />
                    <div className="card-body">
                      <h5 className="card-title">Recipe Name</h5>
                      <div className="d-flex justify-content-between">
                        <button className="btn btn-share btn-sm mr-2">Share Recipe</button>
                        <button className="btn btn-calendar btn-sm">Add to Calendar</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3">
                <button className="btn btn-block mb-2">Make Shopping List</button>
                <button className="btn btn-block">Invite Friend</button>
              </div>
            </div>
          </nav>

          <main className="col-md-9 ml-sm-auto col-lg-9 px-4">
            <div className="hero">
              <h2>Your Meal Planner</h2>
            </div>

            <div className="navigation mb-3 d-flex justify-content-between align-items-center">
              <button className="btn btn-secondary" id="prevWeek">Prev</button>
              <span className="week-date" style={{ fontWeight: 'bold' }}>Week of Oct 7 - Oct 13</span>
              <button className="btn btn-secondary" id="nextWeek">Next</button>
            </div>

            {/* Calendar Section */}
            <div className="calendar">
              {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                <div className="day" key={day}>
                  <h5>{day}</h5>
                  <div className="meal-box">Breakfast</div>
                  <div className="meal-box">Lunch</div>
                  <div className="meal-box">Dinner</div>
                  <div className="meal-box">Snacks</div>
                  <div className="meal-box">Dessert</div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
