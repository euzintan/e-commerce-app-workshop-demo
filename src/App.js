import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Browse from "./pages/Browse";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Product from "./pages/Product";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FDB827",
    },
    secondary: {
      main: "#21209C",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/browse" element={<Browse />} />
          <Route exact path="/product" element={<Product />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
