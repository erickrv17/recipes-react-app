import React from "react";
import Form from "../components/Form";
import ListRecipes from "../components/ListRecipes";
import "../styles/App.css";

const Home = () => {
  return (
    <div className="App">
      <Form />
      <ListRecipes />
    </div>
  );
};

export default Home;
