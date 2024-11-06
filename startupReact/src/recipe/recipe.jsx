import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import './recipe.css/'


export function Recipe() {
  return (
    <div>
      <main className="container mt-4">
        {/* Discover Recipes Section */}
        <section className="discover-recipes mb-4">
          <div className="wrapper text-center">
            <h1>Discover Delicious Recipes</h1>
            <p className="lead">Explore a variety of cuisines and dietary options tailored to your taste.</p>
            <div className="d-flex justify-content-center">
              <div className="input-group mb-3" style={{ maxWidth: '500px', width: '100%' }}>
                <input type="text" className="form-control" id="recipe-search" placeholder="Search for recipes..." />
                <div className="input-group-append">
                  <button className="btn btn-custom" id="search-button">Search</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="filters mb-4">
          <div className="wrapper">
            <h2>Filter Recipes</h2>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="cuisine">Cuisine:</label>
                <select id="cuisine" className="form-control">
                  <option value="all">All</option>
                  <option value="italian">Italian</option>
                  <option value="mexican">Mexican</option>
                  <option value="asian">Asian</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="dietary-preference">Dietary Preference:</label>
                <select id="dietary-preference" className="form-control">
                  <option value="all">All</option>
                  <option value="vegan">Vegan</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="gluten-free">Gluten-Free</option>
                </select>
              </div>
            </div>
            <button className="btn btn-secondary" id="filter-button">Filter</button>
          </div>
        </section>

        {/* Filtered Recipes Section */}
        <section className="filtered-recipes-section py-5">
          <div className="wrapper">
            <div className="container text-center">
              <h2 className="mb-4">Filtered Recipes</h2>
              <p className="mb-5">Explore filtered recipes tailored just for you, making your cooking experience effortless!</p>
              <div className="d-flex align-items-center justify-content-center">
                <button className="btn btn-secondary d-none d-md-block" id="prevButton" style={{ margin: '0 10px' }}><i className="fas fa-chevron-left"></i></button>
                <div className="recipe-cards-container overflow-auto">
                  <div className="card-group">
                    {[...Array(4)].map((_, index) => (
                      <div className="card mx-2 text-decoration-none" key={index}>
                        <Link to="/recipeInstructions"> {/* Use Link instead of a */}
                          <img src="recipe-image.jpg" className="card-img-top" alt={`Recipe Image ${index + 1}`} />
                          <div className="card-body">
                            <h5 className="card-title">Recipe Title {index + 1}</h5>
                          </div>
                        </Link>
                        <button className="btn btn-primary mt-3 mb-2 addToMyRecipeButton" style={{ fontSize: '0.9rem', padding: '0.4rem 1rem', margin: '0 10px' }}>Add to My Recipes</button>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="btn btn-secondary d-none d-md-block" id="nextButton" style={{ margin: '0 10px' }}><i className="fas fa-chevron-right"></i></button>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Recipes Section */}
        <section className="recommended-recipes-section py-5">
          <div className="wrapper">
            <div className="container text-center">
              <h2 className="mb-4">Recommended Recipes</h2>
              <p className="mb-5">These recipes are fetched from our database based on your preferences.</p>
              <div className="d-flex align-items-center justify-content-center">
                <button className="btn btn-secondary d-none d-md-block" id="prevButton" style={{ margin: '0 10px' }}><i className="fas fa-chevron-left"></i></button>
                <div className="recipe-cards-container overflow-auto">
                  <div className="card-group">
                    {[...Array(4)].map((_, index) => (
                      <div className="card mx-2 text-decoration-none" key={index}>
                        <Link to="/recipeInstructions"> {/* Use Link instead of a */}
                          <img src="recipe-image.jpg" className="card-img-top" alt={`Recipe Image ${index + 1}`} />
                          <div className="card-body">
                            <h5 className="card-title">Recipe Title {index + 1}</h5>
                          </div>
                        </Link>
                        <button className="btn btn-primary mt-3 mb-2 btn-custom addToMyRecipeButton" style={{ fontSize: '0.9rem', padding: '0.4rem 1rem', margin: '0 10px' }}>Add to My Recipes</button>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="btn btn-secondary d-none d-md-block" id="nextButton" style={{ margin: '0 10px' }}><i className="fas fa-chevron-right"></i></button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
