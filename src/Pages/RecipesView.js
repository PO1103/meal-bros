import React from "react";
import Recipe from "../Component/Recipe";
import Course from "../Component/Ingredients/course.json";
import MaterialCard from "../Component/MaterialCard";
import Grid from "@material-ui/core/Grid";

//recipes and catagory
const Recipes = (props) => {
  //the varaiable name created in query param
  const id = props.match.params.name;
  const numberOfCourses = Course.length;
  return (
    <div>
      <div className="Recipes-Display">
        {/* <h1>Recipes</h1> */}
        {/* <Recipe id={Course[1]} /> */}

        <div className="row">
          <MaterialCard cardId={1} course={Course[0]} />
          <MaterialCard cardId={2} course={Course[1]} />
          <MaterialCard cardId={3} course={Course[2]} />
        </div>

        <div className="row">
          <MaterialCard cardId={4} course={Course[3]} />
          <MaterialCard cardId={5} course={Course[4]} />
          <MaterialCard cardId={6} course={Course[5]} />
        </div>
        <div className="row">
          <MaterialCard cardId={1} course={Course[0]} />
          <MaterialCard cardId={2} course={Course[1]} />
          <MaterialCard cardId={3} course={Course[2]} />
        </div>
      </div>
    </div>
  );
};

export default Recipes;
