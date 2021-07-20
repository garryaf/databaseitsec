import { combineReducers } from "redux";
import auth from "./auth.js";
import navigation from "./navigation.js";
import register from "./register.js";
import calendar from "./calendar.js";
import { connectRouter } from "connected-react-router";

export default combineReducers({
  register,
  auth,
  navigation,
  calendar,
});
