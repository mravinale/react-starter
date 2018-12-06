import { push } from "react-router-redux";
import * as authService from "../services/authService";

import { AUTH } from "./actionTypes";

export function loginRequest() {
  return {
    type: AUTH.LOGIN_BEGIN
  };
}

export function loginSuccess(user) {
  return {
    type: AUTH.LOGIN_SUCCESS,
    user
  };
}

export function loginFailed(error) {
  return {
    type: AUTH.LOGIN_FAILED,
    message: error
  };
}

export function login(payload) {
  return function loginThunk(dispatch) {
    dispatch(loginRequest());
    return authService.login(payload).then(
      response => {
        dispatch(loginSuccess(response));
        dispatch(push("/"));
      },
      error => dispatch(loginFailed(error))
    );
  };
}
