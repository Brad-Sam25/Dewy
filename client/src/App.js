import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Quiz from "./pages/Quiz";
import { Switch, Route } from 'react-router-dom';
import MainNavBar from './components/layouts/MainNavBar';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authActionCreators } from './store/index';
import React, { useEffect } from 'react';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import { checkUserToken } from './utils/api';
import Footer from './components/layouts/Footer';

function App() {
    // const state = useSelector(state => state);
    // console.log(state);

    const dispatch = useDispatch();
    const { setUserLoaded, setUserLoading, setAuthError  } = bindActionCreators(authActionCreators, dispatch);

    useEffect(() => {
        setUserLoading();
        checkUserToken(null)
            .then( res => {
                setUserLoaded(res.data)
            })
            .catch(error => {
                console.log(error.response.data)
                setAuthError()            
            })
    }, []);

  return (
      <div className="App">
            <MainNavBar />
              <Switch>
                  <Route path="/home">
                      <Home />
                      {/* <SignUp /> */}
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
