import React from 'react';
import { useParams } from 'react-router-dom';

export function RecipeInstructions() {
  const { id } = useParams(); 
  const [instructions, setInstructions] = React.useState(null);  
  const [error, setError] = React.useState(null);  

  React.useEffect(() => {
    fetch(`/api/recipeInstructions/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch recipe instructions');
        }
        return response.json();
      })
      .then((data) => {
        // Assuming data.analyzedInstructions contains the instructions
        const steps = data.analyzedInstructions[0]?.steps || [];
        setInstructions(steps);  // Set the steps directly
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [id]); 

  return (
    <div>
      <h1>Recipe Instructions</h1>
      <p>Displaying instructions for recipe ID: {id}</p>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <section>
        {instructions ? (
          <div>
            <h2>Instructions:</h2>
            <ul>
              {instructions.map((step, index) => (
                <li key={index}>
                  <strong>Step {step.number}:</strong> {step.step}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Loading instructions...</p>
        )}
      </section>
    </div>
  );
}




// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export function RecipeInstructions() {
//   return (
//     <div>

//       {/* Recipe Details Section */}
//       <section id="recipe-details" className="container mt-5">
//         <h1 id="recipe-title" className="text-center">Test Recipe: Simple Pasta</h1>
//         <img id="recipe-image" className="img-fluid my-3" src="recipe-image.jpg" alt="Recipe Image" />

//         <h2>Ingredients</h2>
//         <ul id="ingredients-list" className="list-unstyled">
//           <li>200g spaghetti</li>
//           <li>2 tablespoons olive oil</li>
//           <li>2 cloves garlic, minced</li>
//           <li>1 can diced tomatoes (400g)</li>
//           <li>Salt and pepper to taste</li>
//           <li>Fresh basil leaves for garnish</li>
//         </ul>

//         <h2>Instructions</h2>
//         <p id="instructions">
//           1. Cook the spaghetti according to package instructions until al dente. Drain and set aside.<br />
//           2. In a large skillet, heat the olive oil over medium heat. Add the minced garlic and sauté for 1 minute.<br />
//           3. Add the diced tomatoes to the skillet and season with salt and pepper. Simmer for about 5-10 minutes, stirring occasionally.<br />
//           4. Add the cooked spaghetti to the sauce and toss to combine. Cook for an additional 2 minutes.<br />
//           5. Serve hot, garnished with fresh basil leaves.
//         </p>
//       </section>

//       <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
//       <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
//       <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
//     </div>
//   );
// }
