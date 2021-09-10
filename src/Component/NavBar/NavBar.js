import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const NavBar = () => {
  return (
    <React.Fragment>
      <Nav>
        <NavLink to="/">
          <h1>logo</h1>
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
