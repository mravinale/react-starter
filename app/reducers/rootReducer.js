import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import auth from "./authReducer";
import users from "./usersReducer";

const rootReducer = combineReducers({
  auth,
  users,
  routing
});

export default rootReducer;
