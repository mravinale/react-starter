import authReducer from "./authReducer";
import { AUTH } from "../actions/actionTypes";

describe("authReducer", () => {
  it("should return the initial state", () => {
    const result = authReducer(undefined, {});

    expect(result).toEqual({
      authenticating: false,
      isAuthenticated: false,
      error: false,
      errorMessage: null,
      user: null
    });
  });

  it("should handle a login request", () => {
    const result = authReducer([], {
      type: AUTH.LOGIN_BEGIN
    });

    expect(result).toEqual({
      authenticating: true,
      isAuthenticated: false,
      error: false,
      errorMessage: null,
      user: null
    });
  });

  it("should handle a successfully login", () => {
    const result = authReducer([], {
      type: AUTH.LOGIN_SUCCESS,
      user: {
        name: "John"
      }
    });

    expect(result).toEqual({
      authenticating: false,
      isAuthenticated: true,
      error: false,
      errorMessage: null,
      user: {
        name: "John"
      }
    });
  });

  it("should handle a failed login", () => {
    const result = authReducer([], {
      type: AUTH.LOGIN_FAILED,
      message: "Unexpected error."
    });

    expect(result).toEqual({
      authenticating: false,
      isAuthenticated: false,
      error: true,
      errorMessage: "Unexpected error.",
      user: null
    });
  });
});
