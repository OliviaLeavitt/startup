import React from 'react';

export function RecipeSidebar({ savedRecipes, loading, handleAddToCalendar }) {
  return (
    <nav id="sidebar" className="col-md-3 sidebar">
      <div className="sidebar-sticky">
        <h4>My Recipes</h4>
        <div className="recipe-container" style={{ maxHeight: '400px', overflowY: 'auto' }}>
          {loading ? (
            <p>Loading saved recipes...</p>
          ) : savedRecipes.length > 0 ? (
            savedRecipes.map((recipe, index) => (
              <div className="card recipe-card mb-3" key={recipe.id || index}>
                <img
                  src={recipe.image || 'recipe-image.jpg'}
                  className="card-img-top"
                  alt={recipe.title || 'Recipe'}
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                  <button
                    className="btn btn-calendar btn-sm"
                    onClick={() => handleAddToCalendar(recipe)}
                  >
                    Add to Calendar
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No saved recipes found.</p>
          )}
        </div>
      </div>
    </nav>
  );
}
