import React from 'react';
import { Link } from 'react-router-dom';
import './recipe.css';

export function RecipeCards({ recipes }) {
  return (
    <div className="row">
      {recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <div key={index} className="col-md-3 mb-3">
            <div className="card">
              <img src={recipe.image} className="card-img-top" alt={recipe.title} />
              <div className="card-body">
                <Link to={`/recipeInstructions/${recipe.id}`} className="card-title text-decoration-none">
                  <h5>{recipe.title}</h5>
                </Link>
                <p className="card-text">{recipe.shortDescription}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No recipes available.</p>
      )}
    </div>
  );
}
