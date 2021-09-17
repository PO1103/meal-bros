import React, { useState } from "react";
import course from "./Ingredients/course.json";
import "./Recipe.css";
// most comlpex component
// dish title, ingredeints, steps,
//ingredients
//cal (future)

const Recipe = (props) => {
  let current = props.id;
  let id = current.dishId;
  let name = current.dishName;
  let image = current.dishImage;
  let ingredients = current.ingredients;

  console.log(props);
  //console.log(Object.keys(ingredients.meats[0]));
  //console.log(ingredients.meats[0]);

  const IngredientView = () => {};

  return (
    <div className="row">
      <h1>{name}</h1>
      <div className="column">
        <img className={id} src="image" alt={name} />
      </div>
      <div className="column">
        <h1>Ingredients</h1>
        <article>Condiments</article>
        {ingredients.condiments.map((meat) => {
          return (
            <li key={Object.keys(meat)[0]}>
              {Object.keys(meat)[0]} {Object.values(meat)}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Recipe;
