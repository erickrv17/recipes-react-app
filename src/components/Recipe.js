import React, { useContext } from "react";
import { Link } from "react-router-dom";
import style from "../styles/recipe.module.css";
import { DetailContext } from "../context/DetailContext";

const Recipe = ({ info }) => {

  const { setId } = useContext(DetailContext);

  function clickID() {
    setId(info.recipe.uri);
  }
  return (
    <div className={style.recipe}>
      <h1 className={style.titleRecipe}>{info.recipe.label}</h1>
      <img
        src={info.recipe.image}
        alt="imageRecipe"
        className={style.image}
      ></img>
      <br />
      <Link to="/infoRecipe" className="btnMasInfo" onClick={clickID}>
        Detalle
      </Link>
    </div>
  );
};

export default Recipe;
