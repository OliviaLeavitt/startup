// DiscoverRecipes.js
import React from 'react';

export function DiscoverRecipes({ searchTerm, setSearchTerm, handleSearch }) {
  return (
    <section className="discover-recipes mb-4">
      <div className="wrapper text-center">
        <h1>Discover Delicious Recipes</h1>
        <p className="lead">Explore a variety of cuisines and dietary options tailored to your taste.</p>
        <div className="d-flex justify-content-center">
          <div className="input-group mb-3" style={{ maxWidth: '500px', width: '100%' }}>
            <input
              type="text"
              className="form-control"
              id="recipe-search"
              placeholder="Search for recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="input-group-append">
              <button className="btn btn-custom" id="search-button" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
