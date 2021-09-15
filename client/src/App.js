import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Quiz from "./pages/Quiz";
import { Switch, Route } from 'react-router-dom';
import MainNavBar from './components/layouts/MainNavBar';
import { useSelector } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { actionCreators } from './store/index';
import React, { useEffect } from 'react';
import { store } from './store/store';

import { loadUser } from './store/action-creators/authActions'


function App() {
  // useEffect(() => {
  //   store.dispatch(loadUser())
  // });
  
  const state = useSelector(state => state)
  console.log(state)


  return (
      <div className="App">
            <MainNavBar />
              <Switch>
                  <Route path="/home">
                      <Home />
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
