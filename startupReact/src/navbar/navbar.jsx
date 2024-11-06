import React from 'react';
import { NavLink } from 'react-router-dom';

export function Navbar({ authState, logout }) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <NavLink className="navbar-brand no-hover" to="/">MealMate</NavLink>
        {authState === 'Authenticated' && (
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
        )}
        <div className={`collapse navbar-collapse ${authState === 'Authenticated' ? '' : 'd-none'}`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {authState === 'Authenticated' && (
              <>
                <li className="nav-item">
                  <a className="nav-link no-hover" href="#" title="Notifications">
                    <i className="fa-solid fa-bell notification-icon"></i>
                  </a>
                  <div className="notification-dropdown">
                    <div className="notification">[Friend's Name] added an item to the grocery list</div>
                    <div className="notification">[Friend's Name] shared a recipe</div>
                  </div>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/recipe">Recipes</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/mealplan">Meal Planning</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/grocery">Grocery List</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link rounded-3" to="/" onClick={logout}>
                    Logout
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}