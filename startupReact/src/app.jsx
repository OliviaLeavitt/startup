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
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  function logout() {
    localStorage.removeItem('userName');
    setAuthState(AuthState.Unauthenticated);
    setUserName('');
  }

  return (
    <BrowserRouter>
      <header>
        <nav className="navbar navbar-expand-lg">
          <NavLink className="navbar-brand no-hover" to="/">MealMate</NavLink>
          {authState === AuthState.Authenticated && (
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars"></i>
            </button>
          )}
          <div className={`collapse navbar-collapse ${authState === AuthState.Authenticated ? '' : 'd-none'}`} id="navbarNav">
            <ul className="navbar-nav ml-auto">
              {authState === AuthState.Authenticated && (
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

      <Routes>
        <Route
          path='/'
          element={
            <Login
              userName={userName}
              authState={authState}
              onAuthChange={(userName, authState) => {
                setAuthState(authState);
                setUserName(userName);
              }}
              onLogout={logout}
            />
          }
          exact
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home userName={userName} />} />
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
