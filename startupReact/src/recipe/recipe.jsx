import './recipe.css';
import React from 'react';
import { DiscoverRecipes } from './DiscoverRecipes';
import { Filters } from './Filters';
import { FilteredRecipes } from './FilteredRecipes';
import { SavedRecipes } from './SavedRecipes';
import { useRecipes } from './recipeLogic';

export function Recipe() {
  const {
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
  } = useRecipes();

  const recipesPerPage = 4;
  const displayedRecipes = filteredRecipes.slice(
    currentPage * recipesPerPage,
    (currentPage + 1) * recipesPerPage
  );

  return (
    <div>
      <main className="container mt-4">
        <DiscoverRecipes searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
        <Filters
          cuisine={cuisine}
          setCuisine={setCuisine}
          dietaryPreference={dietaryPreference}
          setDietaryPreference={setDietaryPreference}
          mealType={mealType}
          setMealType={setMealType}
          timeToMake={timeToMake}
          setTimeToMake={setTimeToMake}
          handleFilter={handleFilter}
        />
        <FilteredRecipes
          displayedRecipes={displayedRecipes}
          currentPage={currentPage}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          filteredRecipes={filteredRecipes}
        />
        <SavedRecipes 
          savedRecipes={savedRecipes}

        />
      </main>
    </div>
  );
}
