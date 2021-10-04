import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Quiz from "./pages/Quiz";
import { Switch, Route } from 'react-router-dom';
import MainNavBar from './components/layouts/MainNavBar';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authActionCreators } from './store/index';
import React, { useEffect } from 'react';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';


function App() {
    const state = useSelector(state => state);
    console.log(state);

    const dispatch = useDispatch();
    const { loadUser } = bindActionCreators(authActionCreators, dispatch);

    useEffect(() => {
        store.dispatch(loadUser())
    }, []);

  return (
      <div className="App">
            <MainNavBar />
              <Switch>
                  <Route path="/home">
                      <Home />
                      <SignUp />
                  </Route>
                  <Route path="/about">
                      <About />
                  </Route>
                  <Route path="/quiz">
                      <Quiz />
                  </Route>
              </Switch>
      </div>
  );
}

export default App;
