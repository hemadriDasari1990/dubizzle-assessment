import { combineReducers } from "redux";
import gist from "./gist";

const appReducer = combineReducers({
  gist,
});

export default appReducer;
