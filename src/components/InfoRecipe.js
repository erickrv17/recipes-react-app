import React, { useContext } from "react";
import "../styles/recipe.module.css";
import { DetailContext } from "../context/DetailContext";

const InfoRecipe = () => {
  const { recipe } = useContext(DetailContext);

  console.log(recipe);
  return (
    <div>
      <h1>{recipe.label}</h1>
    </div>
  );
};

export default InfoRecipe;
