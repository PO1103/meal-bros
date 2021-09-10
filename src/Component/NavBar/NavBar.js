import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

///Users/pohsu/Documents/react/meal-bros/src/Images/mealbros-logo.png
const NavBar = () => {
  return (
    <React.Fragment>
      <Nav>
        <NavLink to="/">
          <img className="mb-logo" src="./mb-logo.png" alt="MealBros" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/recipes">Recipes</NavLink>
          <NavLink to="/mealPlan">Meal Plan</NavLink>
          <NavLink to="/groceryList">GroceryList</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </React.Fragment>
  );
};

export default NavBar;
