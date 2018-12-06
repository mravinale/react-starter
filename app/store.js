import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import rootReducer from "./reducers/rootReducer";

export const history = createHistory();

export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), thunkMiddleware)
  )
);
