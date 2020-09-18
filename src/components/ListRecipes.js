import React, { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";
import Recipe from "./Recipe";

const ListRecipes = () => {
  const { recipes } = useContext(RecipesContext);
  return (
    <div className="recipes">
      {recipes.map((recipe) => (
        <Recipe key={recipe.recipe.label} info={recipe} />
      ))}
    </div>
  );
};

export default ListRecipes;
