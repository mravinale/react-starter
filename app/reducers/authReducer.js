import { AUTH } from "../actions/actionTypes";

export const initialState = {
  authenticating: false,
  isAuthenticated: false,
  error: false,
  errorMessage: null,
  user: null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH.LOGIN_BEGIN:
      return {
        ...state,
        ...initialState,
        authenticating: true
      };

    case AUTH.LOGIN_SUCCESS:
      return {
        ...state,
        ...initialState,
        isAuthenticated: true,
        user: action.user
      };

    case AUTH.LOGIN_FAILED:
      return {
        ...state,
        ...initialState,
        error: true,
        errorMessage: action.message
      };

    default:
      return state;
  }
}
