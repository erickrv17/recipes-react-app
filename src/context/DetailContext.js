import React, { useState, useEffect, createContext } from "react";
import Axios from "axios";

export const DetailContext = createContext();

const DetailProvider = (props) => {
  const APP_ID = "5355408f";
  const APP_KEY = "523d7589644838f2df136e65057fd34b";

  const [recipe, setRecipe] = useState();
  const [id, setId] = useState("");

  useEffect(() => {
    const getDetail = async () => {
      const url = `https://api.edamam.com/search?r=${id}&app_id=${APP_ID}&app_key=${APP_KEY}`;
      const data = await Axios.get(url);
      setRecipe(data.data);
    };
    getDetail();
  }, [id]);

  return (
    <DetailContext.Provider value={{ recipe, setId }}>
      {props.children}
    </DetailContext.Provider>
  );
};

export default DetailProvider;
