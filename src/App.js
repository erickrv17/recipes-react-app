import React from "react";
import "./styles/App.css";
import { Switch, Route } from "react-router-dom";
import Routes from "./Routes";
import RecipesProvider from "./context/RecipesContext";
import DetailProvider from "./context/DetailContext";

const App = () => {
  return (
    <RecipesProvider>
      <DetailProvider>
        <div className="App">
          <div className="recipes">
            <Switch>
              {Routes.map((item, index) => (
                <Route
                  key={index}
                  component={item.component}
                  path={item.path}
                  exact={item.exact}
                />
              ))}
            </Switch>
          </div>
        </div>
      </DetailProvider>
    </RecipesProvider>
  );
};

export default App;
