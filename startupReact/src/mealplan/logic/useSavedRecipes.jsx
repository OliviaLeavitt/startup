// useSavedRecipes.js
import { useState, useEffect } from 'react';

export const useSavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await fetch('/api/getMyRecipes');
        const data = await response.json();
        const recipeIds = data.recipes;

        if (recipeIds.length > 0) {
          const recipeDetails = await Promise.all(
            recipeIds.map(async (id) => {
              const res = await fetch(`/api/recipeInstructions/${id}`);
              return await res.json();
            })
          );
          setSavedRecipes(recipeDetails);
        }
      } catch (error) {
        console.error('Error fetching saved recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedRecipes();
  }, []);

  return { savedRecipes, loading };
};
