import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import Home from "./Pages/Home";
import GroceryListView from "./Pages/GroceryListView";
import RecipesView from "./Pages/RecipesView";
import MealPlanView from "./Pages/MealPlanView";
import NavBar from "./Component/NavBar/NavBar";
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
        <Route path="/" render={() => <div className="fourOfour">404</div>} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
