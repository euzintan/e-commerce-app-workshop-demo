import React, { Component } from "react";
import { makeStyles } from "@mui/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const useStyles = makeStyles({
  productContainer: {
    height: "99vh",
    width: "99vw",
    display: "flex",
    alignItems: "space-between",
    flexDirection: "column",
    overflow: "hidden",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "center",
    height: "87.9vh",
    backgroundColor: "#F1F1F1",
    overflowY: "scroll",
    overflowX: "clip",
  },
  productImage: {
    minHeight: "99vw",
    maxWidth: "99vw",
    backgroundImage:
      "url(https://cdn1.iconfinder.com/data/icons/things-3/24/gift-512.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    padding: "2vh",
    overflow: "hidden",
  },
  backIcon: {
    color: "gray",
    backgroundColor: "rgba(217, 217, 217, 0.5)",
    borderRadius: 20,
  },
  titleSection: {
    minHeight: "20vh",
    paddingTop: "3vh",
    paddingBottom: "3vh",
    paddingRight: "9vw",
    paddingLeft: "9vw",
    backgroundColor: "white",
    marginBottom: "3vh",
  },
  priceRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "3vh",
  },
  descriptionSection: {
    minHeight: "25vh",
    paddingTop: "2vh",
    paddingBottom: "2vh",
    backgroundColor: "white",
    marginBottom: "3vh",
    paddingRight: "5vw",
    paddingLeft: "5vw",
  },
  productFooter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "12vh",
  },
  cart: {
    backgroundColor: "#FDB827",
    width: "50vw",
    height: "12vh",
  },
  buy: {
    backgroundColor: "#21209C",
    width: "50vw",
    height: "12vh",
  },
});

function Product() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div>
      <div className={classes.content}>
        <div className={classes.productImage}>
          <Link to="/browse">
            <ArrowBackIcon
              className={classes.backIcon}
              sx={{ fontSize: "10vh" }}
            />
          </Link>
        </div>
        <div className={classes.titleSection}>
          <Typography variant="h6">
            Brand New Random Text BNIB no low ball
          </Typography>
          <div className={classes.priceRow}>
            <Typography variant="h6">$400.00</Typography>

            <FavoriteIcon />
          </div>
        </div>
        <div className={classes.descriptionSection}>
          <Typography fontWeight="bold" variant="h6">
            Product Details
          </Typography>
          <Typography>
            This is a brand new random item. Selling because I won in a company
            raffle. No nego, low ballers will be ignored. Telegram me @yunusali
            for best price and good time
          </Typography>
        </div>
      </div>
      <div className={classes.productFooter}>
        <ButtonGroup>
          <Button variant="contained" className={classes.cart}>
            <Typography>ADD TO CART</Typography>
          </Button>
          <Button variant="contained" color="secondary" className={classes.buy}>
            <Typography>BUY NOW</Typography>
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default Product;
