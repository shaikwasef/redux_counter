import React from "react";
import ReactDOM from "react-dom";
import {createStore , combineReducers} from "redux" ;
import App from "./App";
import combineR from "./reducers/combinerR";
import {Provider} from "react-redux" ;


let store = createStore(combineR ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store ={store}>
  <App />
  </Provider>, document.getElementById("root"));
