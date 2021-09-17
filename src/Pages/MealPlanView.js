import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//schdule of weeks

const useStyles = makeStyles({
  root: {
    width: 250,
    height: 200,
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    padding: 30,
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    marginTop: -20,
  },
  pos: {
    marginBottom: 12,
  },
  photo: {
    height: 580,
    width: 400,
    position: "center",
  },
});
const MealPlan = () => {
  const classes = useStyles();
  return (
    <div>
      <div className="MealPlan-Display">
        <img className={classes.photo} src="./IMG_2878.JPG" alt="cronut gal" />
      </div>
    </div>
  );
};

export default MealPlan;
