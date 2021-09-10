import React from "react";

const Recipes = (props) => {
  //the varaiable name created in query param
  const id = props.match.params.name;
  return (
    <div>
      <div className="Recipes-Display">
        <h1>Recipes</h1>
      </div>
    </div>
  );
};

export default Recipes;
