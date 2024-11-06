import React from 'react';
import { NavLink } from 'react-router-dom';

export function Navbar({ authState, logout }) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">MealMate</NavLink>
        {authState === 'Authenticated' && (
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        )}
        <div className={`collapse navbar-collapse ${authState === 'Authenticated' ? '' : 'd-none'}`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {authState === 'Authenticated' && (
              <>
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
