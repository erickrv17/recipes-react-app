import React, { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";
import "../styles/App.css";

const Form = () => {
  const { search, setSearch, setQuery } = useContext(RecipesContext);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <>
      <h1 className="principalTitle">Pillo´s Recipes</h1>
      <h4 className="secondaryTitle">Enter the recipe you want to know</h4>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default Form;
