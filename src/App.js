import React from "react";
import "./style.css";
import {createStore} from "redux" ;
import {useSelector , useDispatch} from "react-redux";
import increment from "./actions/increment"
import decrement from "./actions/decrement"

export default function App() {
  const counter = useSelector(state => state.counter);
  const signState = useSelector(state => state.logged);
  const dispatch = useDispatch();
  return (
    <div>
    Counter : {counter}
    <button onClick = {() => dispatch(increment())}>+</button>
    <button  onClick = {() => dispatch(decrement())}>-</button>
    </div>
  );
}
