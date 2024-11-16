import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './recipe.css';

export function Recipe() {
  const [recipes, setRecipes] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [cuisine, setCuisine] = React.useState('all');
  const [dietaryPreference, setDietaryPreference] = React.useState('all');
  const recipesPerPage = 4;

  // Fetch recipes on component mount
  React.useEffect(() => {
    fetch('/api/recipes')
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
      })
      .catch((error) => console.error('Error fetching recipes:', error));
  }, []);

  // Function to handle the "next" button click
  const handleNextPage = () => {
    if ((currentPage + 1) * recipesPerPage < recipes.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to handle the "previous" button click
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Slice the recipes array to display the correct page
  const displayedRecipes = recipes.slice(currentPage * recipesPerPage, (currentPage + 1) * recipesPerPage);

  // Function to apply filters
  const handleFilter = () => {
    fetch('/api/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cuisine, dietaryPreference }),
    })
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
        setCurrentPage(0); // Reset to the first page after filtering
      })
      .catch((error) => console.error('Error applying filters:', error));
  };

  // Search handler
  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      return;
    }

    const filteredRecipes = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setRecipes(filteredRecipes);
  };

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

        {/* Filters Section */}
        <section className="filters mb-4">
          <div className="wrapper">
            <h2>Filter Recipes</h2>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="cuisine">Cuisine:</label>
                <select id="cuisine" className="form-control" onChange={(e) => setCuisine(e.target.value)}>
                  <option value="all">All</option>
                  <option value="italian">Italian</option>
                  <option value="mexican">mexican</option>
                  <option value="asian">Asian</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="dietary-preference">Dietary Preference:</label>
                <select
                  id="dietary-preference"
                  className="form-control"
                  onChange={(e) => setDietaryPreference(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="vegan">Vegan</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="gluten-free">Gluten-Free</option>
                </select>
              </div>
            </div>
            <button className="btn btn-secondary" id="filter-button" onClick={handleFilter}>
              Filter
            </button>
          </div>
        </section>

        {/* Filtered Recipes Section */}
        {(cuisine !== 'all' || dietaryPreference !== 'all') && (
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

                  <div className="card-group">
                    {displayedRecipes.map((recipe, index) => (
                      <div className="card mx-2 text-decoration-none" key={index}>
                        <Link to="/recipeInstructions">
                          <img src={recipe.image} className="card-img-top" alt={recipe.title} />
                          <div className="card-body">
                            <h5 className="card-title">{recipe.title}</h5>
                          </div>
                        </Link>
                        <button className="btn btn-primary mt-3 mb-2 addToMyRecipeButton">
                          Add to My Recipes
                        </button>
                      </div>
                    ))}
                  </div>

                  <button
                    className="btn btn-secondary"
                    id="nextButton"
                    onClick={handleNextPage}
                    disabled={(currentPage + 1) * recipesPerPage >= recipes.length}
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
