import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#FDB827",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "3vh",
  },
  field: {
    width: "60vw",
    backgroundColor: "white",
  },
  link: {
    fontFamily: "Montserrat",
    fontSize: "1rem",
    color: "#21209C",
    textDecoration: "none",
    marginTop: "2vh",
  },
  button: {
    width: "60vw",
    marginTop: "5vh",
    marginBottom: 20,
  },
});

function Login() {
  const navigate = useNavigate();
  const classes = useStyles();
  function handleClick() {
    console.log("clicked");
    navigate("/browse");
  }
  return (
    <div className={classes.container}>
      <Typography variant="h1" color="white" fontFamily="Bebas Neue">
        SHAUPY
      </Typography>
      <form className={classes.form}>
        <TextField
          variant="filled"
          margin="normal"
          className={classes.field}
          label="Username"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          variant="filled"
          className={classes.field}
          label="Password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />
      </form>
      <Button
        className={classes.button}
        color="secondary"
        variant="contained"
        onClick={handleClick}
      >
        LOGIN
      </Button>
      <Link className={classes.link} to="/">
        CREATE A NEW ACCOUNT
      </Link>
      <Link className={classes.link} to="/">
        FORGOT YOUR PASSWORD
      </Link>
    </div>
  );
}

export default Login;
