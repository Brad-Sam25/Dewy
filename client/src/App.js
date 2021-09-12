import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Quiz from "./pages/Quiz";
import { Switch, Route } from 'react-router-dom';
import MainNavBar from './components/layouts/MainNavBar';


function App() {
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
