import React, { useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { Grocery } from './grocery/grocery';
import { Login } from './login/login';
import { MealPlan } from './mealplan/mealplan';
import { Recipe } from './recipe/recipe';
import { Signup } from './signup/signup';
import { Home } from './home/home';
import { RecipeInstructions } from './recipeInstructions/recipeInstructions';
import { AuthState } from './login/authState';

export default function App() {
  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');
  const [authState, setAuthState] = useState(userName ? AuthState.Authenticated : AuthState.Unauthenticated);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleToggleNotifications = () => setShowNotifications(!showNotifications);

  return (
    <BrowserRouter>
      <header>
        <nav className="navbar navbar-expand-lg">
          <NavLink className="navbar-brand no-hover" to="/">MealMate</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              {authState === AuthState.Authenticated ? (
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
                    <NavLink className="nav-link rounded-3" to="/login" onClick={() => setAuthState(AuthState.Unauthenticated)}>
                      Logout
                    </NavLink>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <NavLink className="nav-link rounded-3" to="/login" onClick={() => setAuthState(AuthState.Unauthenticated)}>
                    Login
                  </NavLink>
                </li>
              )}
              <li className="nav-item">
                <a className="nav-link no-hover" href="#" title="Notifications" onClick={handleToggleNotifications}>
                  <i className="fa-solid fa-bell notification-icon"></i>
                </a>
                {showNotifications && (
                  <div className="notification-dropdown">
                    <div className="notification">[Friend's Name] added an item to the grocery list</div>
                    <div className="notification">[Friend's Name] shared a recipe</div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Login onLogin={(userName) => { setAuthState(AuthState.Authenticated); setUserName(userName); }} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/mealplan" element={<MealPlan />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/recipeInstructions" element={<RecipeInstructions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

function Footer() {
  return (
    <footer className="text-white text-center py-4">
      <div className="container">
        <p>Created by Olivia Leavitt</p>
        <a href="https://github.com/OliviaLeavitt" className="text-light" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>
    </footer>
  );
}

function NotFound() {
  return <main>404: Return to sender. Address unknown.</main>;
}
