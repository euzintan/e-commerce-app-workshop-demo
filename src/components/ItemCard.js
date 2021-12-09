import { makeStyles } from "@mui/styles";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
  touchable: {
    textDecoration: "none",
    color: "black",
    margin: 0,
  },
  cardContainer: {
    height: "28vh",
    width: "23vh",
    margin: "1.5vh",
    marginLeft: "0",
    marginTop: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F1F1F1",
  },
  cardImage: {
    height: "20vh",
    width: "20vh",
  },
  item: {
    fontSize: "30vh",
  },
  priceTag: {},
});

function ItemCard() {
  const classes = useStyles();
  return (
    <Link className={classes.touchable} to="/product">
      <div className={classes.cardContainer}>
        <img
          className={classes.cardImage}
          src="https://cdn1.iconfinder.com/data/icons/things-3/24/gift-512.png"
        ></img>
        <Typography variant="body2">Random Item</Typography>
        <Typography fontWeight="light" variant="h6" color="secondary">
          $400
        </Typography>
      </div>
    </Link>
  );
}

export default ItemCard;
