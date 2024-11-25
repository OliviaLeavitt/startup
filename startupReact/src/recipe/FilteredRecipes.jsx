// FilteredRecipes.js
import React from 'react';
import { RecipeCards } from './RecipeCards';

export function FilteredRecipes({ displayedRecipes, currentPage, handlePrevPage, handleNextPage, filteredRecipes }) {
  return (
    <section className="filtered-recipes-section py-5">
      <div className="wrapper">
        <div className="container text-center">
          <h2 className="mb-4">Filtered Recipes</h2>
          <p className="mb-5">Explore filtered recipes tailored just for you!</p>
          <div className="d-flex align-items-center justify-content-center">
            <button
              className="btn btn-secondary"
              id="prevButton"
              onClick={handlePrevPage}
              style={{ margin: '0 10px' }}
              disabled={currentPage === 0}
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <RecipeCards recipes={displayedRecipes} />

            <button
              className="btn btn-secondary"
              id="nextButton"
              onClick={handleNextPage}
              style={{ margin: '0 10px' }}
              disabled={(currentPage + 1) * 4 >= filteredRecipes.length}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
