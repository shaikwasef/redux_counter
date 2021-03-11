import {combineReducers} from "redux";
import counter from "./counter";
import logged from "./logged" ;

const combineR = combineReducers({
  counter : counter ,
  logged : logged 
});

export default combineR ;