import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/SignUp";
import Quiz from "./components/Quiz/Quiz";
// import Footer from "./components/Footer/Footer";
import MainNavBar from "./components/MainNavBar/MainNavBar";
import { ThemeProvider } from "@material-ui/core";
import outerTheme from "./styles";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={outerTheme}>
        <MainNavBar />
        <Container maxWidth="lg">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth" exact component={Auth} />
            <Route path="/quiz" exact component={Quiz} />
          </Switch>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
