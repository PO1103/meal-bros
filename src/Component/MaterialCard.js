import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import Box from "@material-ui/core/Box";

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
    height: 150,
    width: 200,
    position: "center",
  },
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const MaterialCard = (props) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const classes = useStyles();
  //console.log(props.course);
  const id = props.cardId;
  let title;
  let course;

  course = props.course;
  let key = Object.keys(course.ingredients.vegetables)[0];
  console.log(Object.keys(course.ingredients.meats));
  title = course.dishName;

  const handleClick = () => {
    console.log("cklicke");
    setOpen(true);
  };
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <ButtonBase onClick={handleClick}>
        <Card className={classes.root}>
          <CardContent>
            <h1 className={classes.title}>{title}</h1>
            <img className={classes.photo} src={course.dishImage} alt={title} />
            {/* <RecipeModal style = {}open={open} /> */}
            <div>
              {/* <Button onClick={handleOpen}>Open modal</Button> */}
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography variant="h5" component="h2">
                    {title}
                  </Typography>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Ingredients
                  </Typography>
                  <Typography>Meats</Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {course.ingredients.meats.map((meats) => {
                      return (
                        <li key={Object.keys(meats)[0]}>
                          {Object.keys(meats)[0]} {Object.values(meats)}
                        </li>
                      );
                    })}
                  </Typography>
                  <Typography>Vegetables</Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {course.ingredients.vegetables.map((vegetables) => {
                      return (
                        <li key={Object.keys(vegetables)[0]}>
                          {Object.keys(vegetables)[0]}{" "}
                          {Object.values(vegetables)}
                        </li>
                      );
                    })}
                  </Typography>
                  <Typography>Condiments</Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {course.ingredients.condiments.map((condiment) => {
                      return (
                        <li key={Object.keys(condiment)[0]}>
                          {Object.keys(condiment)[0]} {Object.values(condiment)}
                        </li>
                      );
                    })}
                  </Typography>
                </Box>
              </Modal>
            </div>
          </CardContent>
        </Card>
      </ButtonBase>
    </Grid>
  );
};

export default MaterialCard;
