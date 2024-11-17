import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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

  return (
    <div>
      {/* Recipe Details Section */}
      <section id="recipe-details" className="container mt-5">
        <h1 id="recipe-title" className="text-center mb-4">
          {recipe ? recipe.title : 'Loading...'}
        </h1>

        {/* Time to Make and Recipe Summary */}
        <div className="row mb-4">
          {/* Time to Make */}
          <div className="col-md-6 mb-3">
            <h5>Time to Make</h5>
            <p>{recipe?.readyInMinutes ? `${recipe.readyInMinutes} minutes` : 'Time not available'}</p>
          </div>

          {/* Recipe Summary */}
          <div className="col-md-12">
            <h5>Recipe Summary</h5>
            <p>{recipe?.summary ? recipe.summary : 'No summary available for this recipe.'}</p>
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
        <h2>Ingredients</h2>
        <ul id="ingredients-list" className="list-unstyled">
          {recipe?.extendedIngredients?.map((ingredient) => (
            <li key={ingredient.id}>
              • {ingredient.original}
            </li>
          ))}
        </ul>

        {/* Instructions Section */}
        <h2>Instructions</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div id="instructions">
          {instructions ? (
            <ol>
              {instructions.map((step) => (
                <li key={step.number}>
                  <strong>Step {step.number}:</strong> {step.step}
                </li>
              ))}
            </ol>
          ) : (
            <p>Loading instructions...</p>
          )}
        </div>
      </section>

      {/* Optional Scripts for Bootstrap */}
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </div>
  );
}
