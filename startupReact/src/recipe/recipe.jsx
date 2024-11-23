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
  const [mealType, setMealType] = React.useState('all');
  const [timeToMake, setTimeToMake] = React.useState('all');
  const [filteredRecipes, setFilteredRecipes] = React.useState([]);
  const [savedRecipes, setSavedRecipes] = React.useState([]);
  const [recipeIds, setRecipeIds] = React.useState([]);  // Added missing state
  const [loading, setLoading] = React.useState(true);    // Added missing state
  const recipesPerPage = 4;

  // Fetch initial recipes
  React.useEffect(() => {
    fetch('/api/recipes')
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
        setFilteredRecipes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
        setLoading(false);
      });
  }, []);

  // Fetch saved recipe IDs
  React.useEffect(() => {
    const fetchRecipeIds = async () => {
      try {
        const response = await fetch('/api/getMyRecipes');
        const data = await response.json();
        console.log('Fetched recipe IDs:', data);  // Add this log
        setRecipeIds(data.recipes);  // Assuming data is an array of IDs
      } catch (error) {
        console.error('Error fetching recipe IDs:', error);
      }
    };

    fetchRecipeIds();
  }, []);

  // Fetch recipe details once recipe IDs are set
  React.useEffect(() => {
    if (recipeIds.length > 0) {
      const fetchRecipes = async () => {
        try {
          const recipeDetails = await Promise.all(
            recipeIds.map(async (id) => {
              const response = await fetch(`/api/recipeInstructions/${id}`);
              return await response.json();
            })
          );
          setSavedRecipes(recipeDetails);  // Save the recipe details
          console.log('Saved recipes:', recipeDetails);  // Log saved recipes
        } catch (error) {
          console.error('Error fetching saved recipes:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchRecipes();
    }
  }, [recipeIds]);  // Depend on recipeIds

  // Function to fetch recipe name (if needed)
  const fetchRecipeName = async (id) => {
    const response = await fetch(`/api/recipeInstructions/${id}`);
    const data = await response.json();
    return data.title;  // Return the recipe name (title)
  };

  // Function to fetch and display recipe names
  const fetchAllRecipeNames = async () => {
    const names = [];
    for (const id of recipeIds) {
      const name = await fetchRecipeName(id);
      names.push(name);
    }
    console.log(names);  // Log all the fetched names
  };

  // Call the function to fetch and display recipe names
  React.useEffect(() => {
    if (recipeIds.length > 0) {
      fetchAllRecipeNames();
    }
  }, [recipeIds]);  // Run when recipeIds are updated

  const handleNextPage = () => {
    if ((currentPage + 1) * recipesPerPage < filteredRecipes.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const displayedRecipes = filteredRecipes.slice(
    currentPage * recipesPerPage,
    (currentPage + 1) * recipesPerPage
  );

  const handleFilter = () => {
    const filterParams = {
      cuisine: cuisine !== 'all' ? cuisine : '',
      dietaryPreference: dietaryPreference !== 'all' ? dietaryPreference : '',
      mealType: mealType !== 'all' ? mealType : '',
      timeToMake: timeToMake !== 'all' ? timeToMake : ''
    };

    fetch(`/api/recipes?cuisine=${filterParams.cuisine}&dietaryPreference=${filterParams.dietaryPreference}&mealType=${filterParams.mealType}&timeToMake=${filterParams.timeToMake}`)
      .then((response) => response.json())
      .then((data) => {
        setFilteredRecipes(data);
        setCurrentPage(0);
      })
      .catch((error) => console.error('Error fetching filtered recipes:', error));
  };

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setFilteredRecipes(recipes);
    } else {
      const filteredRecipesList = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRecipes(filteredRecipesList);
    }
    setCurrentPage(0);
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
                <select
                  id="cuisine"
                  className="form-control"
                  value={cuisine}
                  onChange={(e) => setCuisine(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="african">African</option>
                  <option value="asian">Asian</option>
                  <option value="american">American</option>
                  <option value="british">British</option>
                  <option value="cajun">Cajun</option>
                  <option value="caribbean">Caribbean</option>
                  <option value="chinese">Chinese</option>
                  <option value="eastern european">Eastern European</option>
                  <option value="european">European</option>
                  <option value="french">French</option>
                  <option value="german">German</option>
                  <option value="greek">Greek</option>
                  <option value="indian">Indian</option>
                  <option value="irish">Irish</option>
                  <option value="italian">Italian</option>
                  <option value="japanese">Japanese</option>
                  <option value="jewish">Jewish</option>
                  <option value="korean">Korean</option>
                  <option value="latin american">Latin American</option>
                  <option value="mediterranean">Mediterranean</option>
                  <option value="mexican">Mexican</option>
                  <option value="middle eastern">Middle Eastern</option>
                  <option value="nordic">Nordic</option>
                  <option value="southern">Southern</option>
                  <option value="spanish">Spanish</option>
                  <option value="thai">Thai</option>
                  <option value="vietnamese">Vietnamese</option>
            
                </select>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="dietary-preference">Dietary Preference:</label>
                <select
                  id="dietary-preference"
                  className="form-control"
                  value={dietaryPreference}
                  onChange={(e) => setDietaryPreference(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="gluten-free">Gluten-Free</option>
                  <option value="ketogenic">Ketogenic</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="lacto-vegetarian">Lacto-Vegetarian</option>
                  <option value="ovo-vegetarian">Ovo-Vegetarian</option>
                  <option value="vegan">Vegan</option>
                  <option value="pescetarian">Pescetarian</option>
                  <option value="paleo">Paleo</option>
                  <option value="primal">Primal</option>
                  <option value="low-fodmap">Low FODMAP</option>
                  <option value="whole30">Whole30</option>

                </select>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="meal-type">Meal Type:</label>
                <select
                  id="meal-type"
                  className="form-control"
                  value={mealType}
                  onChange={(e) => setMealType(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="main course">Main Course</option>
                  <option value="side dish">Side Dish</option>
                  <option value="dessert">Dessert</option>
                  <option value="appetizer">Appetizer</option>
                  <option value="salad">Salad</option>
                  <option value="bread">Bread</option>
                  <option value="breakfast">Breakfast</option>
                  <option value="soup">Soup</option>
                  <option value="beverage">Beverage</option>
                  <option value="sauce">Sauce</option>
                  <option value="marinade">Marinade</option>
                  <option value="fingerfood">Fingerfood</option>
                  <option value="snack">Snack</option>
                  <option value="drink">Drink</option>
                </select>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="time-to-make">Time to Make:</label>
                <select
                  id="time-to-make"
                  className="form-control"
                  value={timeToMake}
                  onChange={(e) => setTimeToMake(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="10">Under 10 minutes</option>
                  <option value="20">under 20 minutes</option>
                  <option value="30">under 30 minutes</option>
                  <option value="45">under 45 minutes</option>
                  <option value="60">under 60 minutes</option>
                  {/* Add more time options if necessary */}
                </select>
              </div>
            </div>
            <button className="btn btn-secondary" id="filter-button" onClick={handleFilter}>
              Filter
            </button>
          </div>
        </section>

        {/* Filtered Recipes Section */}
        {filteredRecipes.length > 0 && (
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
                        <Link to={`/recipeInstructions/${recipe.id}`}>
                          <img src={recipe.image} className="card-img-top" alt={recipe.title} />
                          <div className="card-body">
                            <h5 className="card-title">{recipe.title}</h5>
                            <p className="card-text">{recipe.shortDescription}</p>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>

                  <button
                    className="btn btn-secondary"
                    id="nextButton"
                    onClick={handleNextPage}
                    style={{ margin: '0 10px' }}
                    disabled={(currentPage + 1) * recipesPerPage >= filteredRecipes.length}
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>

                </div>
              </div>
            </div>
          </section>
        )}

{/* Saved Recipes Section */}
<section className="saved-recipes-section py-5">
  <div className="wrapper">
    <div className="container text-center">
      <h2 className="mb-4">My Saved Recipes</h2>
      <p className="mb-5">Here are the recipes you’ve saved!</p>
      <div className="d-flex flex-column align-items-center">
        {savedRecipes.length > 0 ? (
          savedRecipes.map((recipe, index) => (
            <div key={index} className="saved-recipe-card mb-3">
              <h5 className="saved-recipe-title">{recipe.title}</h5>
            </div>
          ))
        ) : (
          <p>No saved recipes found.</p>
        )}
      </div>
    </div>
  </div>
</section>



      </main>
    </div>
  );
}