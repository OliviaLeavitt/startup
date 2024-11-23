import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Utility function to clean and parse HTML
const parseHtmlContent = (content) => {
  if (!content) return '';

  // Replace <b> tags and other unnecessary tags with bolded text
  const cleanedContent = content
    .replace(/<b>/g, '') // Replace <b> with markdown bold (**)
    .replace(/<\/b>/g, '') // Replace </b> with markdown bold
    .replace(/<em>/g, '') // Replace <em> with markdown italics (*)
    .replace(/<\/em>/g, '') // Replace </em> with markdown italics
    .replace(/<\/?[^>]+(>|$)/g, ''); // Remove any remaining HTML tags

  return cleanedContent;
};

export function RecipeInstructions() {
  const { id } = useParams();
  const [instructions, setInstructions] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [recipe, setRecipe] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/recipeInstructions/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch recipe instructions');
        }
        return response.json();
      })
      .then((data) => {
        setRecipe(data);
        const steps = data.analyzedInstructions[0]?.steps || [];
        setInstructions(steps);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [id]);

  // Handler for the "Add to My Recipes" button
  const handleAddToMyRecipes = () => {
    fetch('/api/addToMyRecipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ recipeId: id }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert(`${recipe.title} has been added to your recipes!`);
        } else {
          alert('Failed to add recipe to your list.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('There was an error adding the recipe.');
      });
  };

  return (
    <div>
      {/* Recipe Details Section */}
      <section id="recipe-details" className="container mt-5">
        <h1 id="recipe-title" className="mb-4 text-left">
          {recipe ? recipe.title : 'Loading...'}
        </h1>

        {/* Time to Make and Recipe Summary */}
        <div className="row mb-4">
          {/* Time to Make */}
          <div className="col-md-6 mb-3">
            <h5 className="text-left">Time to Make</h5>
            <p className="text-left">{recipe?.readyInMinutes ? `${recipe.readyInMinutes} minutes` : 'Time not available'}</p>
          </div>

          {/* Recipe Summary */}
          <div className="col-md-12">
            <h5 className="text-left">Recipe Summary</h5>
            <p className="text-left">
              {recipe?.summary ? parseHtmlContent(recipe.summary) : 'No summary available for this recipe.'}
            </p>
          </div>
        </div>

        {/* Recipe Image */}
        {recipe?.image && (
          <img
            id="recipe-image"
            className="img-fluid my-3 rounded"
            src={recipe.image}
            alt={recipe.title}
          />
        )}

        {/* Ingredients Section */}
        <h2 className="text-left">Ingredients</h2>
        <ul id="ingredients-list" className="list-unstyled text-left">
          {recipe?.extendedIngredients?.map((ingredient) => (
            <li key={ingredient.id}>
              • {ingredient.original}
            </li>
          ))}
        </ul>

        {/* Instructions Section */}
        {instructions && instructions.length > 0 && (
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

        {/* Add to My Recipes Button */}
        <div className="d-flex justify-content-start mt-4">
          <button
            onClick={handleAddToMyRecipes}
            className="btn btn-primary btn-lg me-4"
          >
            Add to My Recipes
          </button>
        </div>
      </section>

      {/* Optional Scripts for Bootstrap */}
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </div>
  );
}