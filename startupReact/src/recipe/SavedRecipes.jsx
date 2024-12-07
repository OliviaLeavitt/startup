import React from 'react';
import { RecipeCards } from './RecipeCards';

export function SavedRecipes({ savedRecipes }) {
  return (
    <section className="saved-recipes-section py-5">
      <div className="wrapper">
        <div className="container text-center">
          <h2 className="mb-4">My Saved Recipes</h2>
          <p className="mb-5">Here are the recipes you’ve saved!</p>
          <div className="d-flex align-items-center justify-content-center">

            <RecipeCards recipes={savedRecipes} />

          </div>
        </div>
      </div>
    </section>
  );
}

