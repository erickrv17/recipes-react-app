import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";

//ELIMINA LA FUNCTION
const App = () => {
  const APP_ID = "5355408f";
  const APP_KEY = "523d7589644838f2df136e65057fd34b";
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Chiken');

  useEffect(() => {
    getRecipes();
  }, [query]);
  //[] ARRAY=INITIAL EFFECT

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
    <h1 className="principalTitle">Pillo´s Recipes</h1>
    <h4 className="secondaryTitle">Enter the recipe you want to know</h4>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" typeName="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
};

export default App;
