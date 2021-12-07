import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers";
import { ThemeProvider } from "@material-ui/core";
import outerTheme from "./styles";
import "./App.css";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={outerTheme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
