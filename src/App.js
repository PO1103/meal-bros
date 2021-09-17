import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import GroceryListView from "./Pages/GroceryListView";
import RecipesView from "./Pages/RecipesView";
import MealPlanView from "./Pages/MealPlanView";
import NavBar from "./Component/NavBar/NavBar";
import Recipe from "./Component/Recipe";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/groceryList" exact component={GroceryListView} />
        <Route path="/recipes" exact component={RecipesView} />
        <Route path="/mealPlan" exact component={MealPlanView} />
        <Route path="/recipe" exact component={Recipe} />
        <Route path="/" render={() => <div className="fourOfour">404</div>} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
