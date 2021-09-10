import React from "react";
import { Link } from "react-router-dom";
import Pages from "./PageStyles.css";

const Home = (props) => {
  //get query string
  console.log(props.history.location.search);
  return (
    <div>
      <div className="Home-Display">
        <h1>HOME</h1>
      </div>
      {/* <Link to="/about">About</Link>
      <button
        onClick={() => {
          props.history.push("/about");
        }}
      >
        click to About
      </button> */}
    </div>
  );
};

export default Home;
