import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Quiz from "./pages/Quiz";
import { Switch, Route } from "react-router-dom";
import MainNavBar from "./components/Layouts/MainNavBar";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { authActionCreators } from "./store/index";
import React, { useEffect } from "react";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import { checkUserToken } from "./utils/api";
import Footer from "./components/Layouts/Footer";
import { loadUser } from "./store/action-creators/authActions";
import store from "./store/store";

function App() {
  const dispatch = useDispatch();

  const dispatch = useDispatch();
  const { setUserLoaded, setUserLoading, setAuthError } = bindActionCreators(
    authActionCreators,
    dispatch
  );

  useEffect(() => {
    dispatch();
  }, []);

  return (
    <div className="App">
      <MainNavBar />
      <Switch>
        <Route path="/home">
          {/* <Home /> */}
          <SignUp />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/quiz">
          <Quiz />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
