import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Quiz from "./pages/Quiz";
import { Switch, Route } from 'react-router-dom';
import MainNavBar from './components/layouts/MainNavBar';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './store/index';
import React, { useEffect } from 'react';
import store from './store/store';
// import { loadUser } from './store/action-creators/authActions';
// import { USER_LOADING } from './store/action-creators/types';
import Login from './components/Login';


function App() {
    const state = useSelector(state => state);
    // console.log(state);

    const dispatch = useDispatch();
    const { loadUser } = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        loadUser()
    }, []);

  return (
      <div className="App">
            <MainNavBar />
              <Switch>
                  <Route path="/home">
                      <Home />
                      <Login />
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
