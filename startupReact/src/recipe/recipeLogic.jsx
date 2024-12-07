import { useState, useEffect } from 'react';

export function useRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [cuisine, setCuisine] = useState('all');
  const [dietaryPreference, setDietaryPreference] = useState('all');
  const [mealType, setMealType] = useState('all');
  const [timeToMake, setTimeToMake] = useState('all');
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [recipeIds, setRecipeIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const recipesPerPage = 4;

  useEffect(() => {
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

  useEffect(() => {
    const fetchRecipeIds = async () => {
      try {
        const response = await fetch('/api/getMyRecipes');
        const data = await response.json();
        setRecipeIds(data.recipes);
      } catch (error) {
        console.error('Error fetching recipe IDs:', error);
      }
    };

    fetchRecipeIds();
  }, []);

  useEffect(() => {
    if (recipeIds.length > 0) {
      const fetchRecipes = async () => {
        try {
          const recipeDetails = await Promise.all(
            recipeIds.map(async (id) => {
              const response = await fetch(`/api/recipeInstructions/${id}`);
              return await response.json();
            })
          );
          setSavedRecipes(recipeDetails);
        } catch (error) {
          console.error('Error fetching saved recipes:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchRecipes();
    }
  }, [recipeIds]);

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

  return {
    recipes,
    filteredRecipes,
    currentPage,
    searchTerm,
    setSearchTerm,
    cuisine,
    setCuisine,
    dietaryPreference,
    setDietaryPreference,
    mealType,
    setMealType,
    timeToMake,
    setTimeToMake,
    savedRecipes,
    handleNextPage,
    handlePrevPage,
    handleFilter,
    handleSearch,
    loading,
  };
}
