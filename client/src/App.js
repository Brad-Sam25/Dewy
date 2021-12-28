import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/SignUp";
import Quiz from "./components/Quiz/Quiz";
import Results from "./components/Results/Results"
import Footer from "./components/Footer/Footer.js";
import MainNavBar from "./components/MainNavBar/MainNavBar";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

let theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainNavBar />
        <Container maxWidth="lg">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth" exact component={Auth} />
            <Route path="/quiz" exact component={Quiz} />
            <Route path="/results" exact component={Results} />
          </Switch>
        </Container>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
