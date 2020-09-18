import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const RecipesContext = createContext();

const RecipesProvider = (props) => {
  const APP_ID = "5355408f";
  const APP_KEY = "523d7589644838f2df136e65057fd34b";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  const [query, setQuery] = useState("");

  useEffect(() => {
    const getRecipes = async () => {
      const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
      const data = await Axios.get(url);
      setRecipes(data.data.hits);
    };
    getRecipes();
  }, [query]);

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        search,
        setSearch,
        setQuery
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
