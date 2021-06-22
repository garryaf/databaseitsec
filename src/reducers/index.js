import { combineReducers } from "redux";
import navigation from "./navigation.js";
import register from "./register.js";
import auth from "./auth.js";
import calendar from "./calendar.js";

export default combineReducers({
  register,
  auth,
  navigation,
  calendar,
});
