import React, { Component, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import ItemCard from "../components/ItemCard";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const useStyles = makeStyles({
  browseContainer: {
    height: "100vh",
    overflowX: "hidden",
    backgroundColor: "#F1F1F1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  browseHeader: {
    height: "10vh",
    backgroundColor: "#FDB827",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  searchField: {
    width: "70vw",
    backgroundColor: "white",
    borderRadius: 10,
  },
  discoverDiv: {
    height: "35vh",
    padding: "1vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    marginBottom: "2vh",
  },
  itemCardRow: {
    display: "flex",
    flexDirection: "row",
    overflowX: "scroll",
    overflowY: "hidden",
  },
  footer: {
    height: "11vh",
    marginTop: "2vh",
    width: "100vw",
    backgroundColor: "white",
    margin: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "1vh",
  },
});

function Browse() {
  const classes = useStyles();
  return (
    <div className={classes.browseContainer}>
      <div className={classes.browseHeader}>
        <TextField
          variant="outlined"
          margin="dense"
          size="small"
          className={classes.searchField}
          label="Search"
          color="common"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>

      <div className={classes.discoverDiv}>
        <Typography fontFamily="Bebas Neue" letterSpacing="1px" variant="h4">
          DISCOVER
        </Typography>
        <div className={classes.itemCardRow}>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
      <div className={classes.discoverDiv}>
        <Typography fontFamily="Bebas Neue" letterSpacing="1px" variant="h4">
          DEALS
        </Typography>
        <div className={classes.itemCardRow}>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
      <div className={classes.footer}>
        <HomeIcon sx={{ fontSize: "7vh" }} />
        <FavoriteIcon sx={{ fontSize: "7vh" }} />
        <ShoppingCartIcon sx={{ fontSize: "7vh" }} />
        <AccountCircle sx={{ fontSize: "7vh" }} />
      </div>
    </div>
  );
}

export default Browse;
