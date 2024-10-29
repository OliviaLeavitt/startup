import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Grocery } from './grocery/grocery';
import { Login } from './login/login';
import { Scores } from './mealplan/mealplan';
import { About } from './recipe/recipe';
import { signup } from './signup/signup';

export default function App() {
  return (
  <BrowserRouter>
  <header>
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand no-hover" href="index.html">MealMate</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link no-hover" href="#" title="Notifications" id="notificationBell">
              <i class="fa-solid fa-bell notification-icon"></i>
            </a>
            
            <div class="notification-dropdown" id="notificationDropdown">
              <div class="notification">[Friend's Name] added lettuce to grocery list</div>
              <div class="notification">[Friend's Name] added tomatoes to grocery list</div>
              <div class="notification">[Friend's Name] shared a recipe</div>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="recipes.html">Recipes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="mealplan.html">Meal Planning</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="grocery.html">Grocery List</a>
          </li>
          <li class="nav-item">
            <a class="nav-link rounded-3" href="login.html">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>

          <Routes>
            <Route path='/' element={<Login />} exact />
            <Route path='/play' element={<Grocery />} />
            <Route path='/scores' element={<MealPlan />} />
            <Route path='/about' element={<RecipeInstructions />} />
            <Route path='/about' element={<Signup />} />
            <Route path='*' element={<NotFound />} />
        </Routes>

</BrowserRouter>


  );
}

function NotFound() {
  return <main>404: Return to sender. Address unknown.</main>;
}