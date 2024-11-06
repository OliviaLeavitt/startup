// src/App.js
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import { Footer } from './footer/footer';
import { Navbar } from './navbar/navbar';

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
      <Navbar authState={authState} logout={logout} />

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

function NotFound() {
  return <main>404: Return to sender. Address unknown.</main>;
}
