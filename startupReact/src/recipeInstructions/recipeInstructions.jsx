import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Utility function to clean and parse HTML content
const parseHtmlContent = (content) => {
  if (!content) return '';
  return content
    .replace(/<b>/g, '')
    .replace(/<\/b>/g, '')
    .replace(/<em>/g, '')
    .replace(/<\/em>/g, '')
    .replace(/<\/?[^>]+(>|$)/g, ''); 
};

export function RecipeInstructions() {
  const { id } = useParams();
  const [instructions, setInstructions] = React.useState(null); 
  const [error, setError] = React.useState(null); 
  const [recipe, setRecipe] = React.useState(null); 

  // Fetch recipe data and instructions on component mount
  React.useEffect(() => {
    fetch(`/api/recipeInstructions/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch recipe instructions');
        return response.json();
      })
      .then((data) => {
        setRecipe(data);
        setInstructions(data.analyzedInstructions[0]?.steps || []);
      })
      .catch((error) => setError(error.message));
  }, [id]);

  // Handler to add the recipe to the user's saved recipes
  const handleAddToMyRecipes = () => {
    fetch('/api/addToMyRecipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ recipeId: id }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.success ? `${recipe.title} has been added to your recipes!` : 'Failed to add recipe to your list.');
      })
      .catch(() => alert('There was an error adding the recipe.'));
  };

  return (
    <div>
      <section id="recipe-details" className="container mt-5">
        {/* Recipe title */}
        <h1 id="recipe-title" className="mb-4 text-left">{recipe ? recipe.title : 'Loading...'}</h1>

        {/* Recipe time and summary */}
        <div className="row mb-4">
          <div className="col-md-6 mb-3">
            <h5 className="text-left">Time to Make</h5>
            <p className="text-left">{recipe?.readyInMinutes ? `${recipe.readyInMinutes} minutes` : 'Time not available'}</p>
          </div>
          <div className="col-md-12">
            <h5 className="text-left">Recipe Summary</h5>
            <p className="text-left">{recipe?.summary ? parseHtmlContent(recipe.summary) : 'No summary available for this recipe.'}</p>
          </div>
        </div>

        {/* Recipe image */}
        {recipe?.image && (
          <img
            id="recipe-image"
            className="img-fluid my-3 rounded"
            src={recipe.image}
            alt={recipe.title}
          />
        )}

        {/* Ingredients section */}
        <h2 className="text-left">Ingredients</h2>
        <ul id="ingredients-list" className="list-unstyled text-left">
          {recipe?.extendedIngredients?.map((ingredient) => (
            <li key={ingredient.id}>• {ingredient.original}</li>
          ))}
        </ul>

        {/* Instructions section */}
        {instructions?.length > 0 && (
          <>
            <h2 className="text-left">Instructions</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div id="instructions" className="text-left">
              <ul>
                {instructions.map((step, index) => (
                  <li key={index}>{step.step}</li>
                ))}
              </ul>
            </div>
          </>
        )}

        {/* Add to My Recipes button */}
        <div className="d-flex justify-content-start mt-4">
          <button onClick={handleAddToMyRecipes} className="btn btn-primary btn-lg me-4">
            Add to My Recipes
          </button>
        </div>
      </section>
    </div>
  );
}
