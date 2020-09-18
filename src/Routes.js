import React from "react";
import InfoRecipe from "./components/InfoRecipe";
import Home from "./pages/Home";

const Routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/about",
    component: About,
    exact: true
  },
  {
    path: "/infoRecipe",
    component: InfoRecipe,
    exact: true
  }
];

// Components----------------------------------

// Ejemplo usando match como props
function About({ match }) {
  return (
    <div>
      <h2>About, con ID: {match.params.id}</h2>
    </div>
  );
}

export default Routes;
