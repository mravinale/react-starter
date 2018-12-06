/* eslint-disable prefer-promise-reject-errors */
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as authActions from "./authActions";
import { AUTH } from "./actionTypes";
import * as authService from "../services/authService";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("authActions", () => {
  it("should create an action to start a login request", () => {
    // Arrange
    const expectedAction = {
      type: AUTH.LOGIN_BEGIN
    };

    // Act
    const result = authActions.loginRequest();

    // Assert
    expect(result).toEqual(expectedAction);
  });

  it("should create an action to handle a successfully login", () => {
    // Arrange
    const user = {
      name: "John"
    };
    const expectedAction = {
      type: AUTH.LOGIN_SUCCESS,
      user
    };

    // Act
    const result = authActions.loginSuccess(user);

    // Assert
    expect(result).toEqual(expectedAction);
  });

  it("should create an action to handle a failed login", () => {
    // Arrange
    const message = "Testing an error.";
    const expectedAction = {
      type: AUTH.LOGIN_FAILED,
      message
    };

    // Act
    const result = authActions.loginFailed(message);

    // Assert
    expect(result).toEqual(expectedAction);
  });

  it("should handle successful login when valid credentials provided", done => {
    // Arrange
    authService.login = jest.fn(() => Promise.resolve({ name: "John" }));
    const username = "username";
    const password = "password";
    const user = {
      name: "John"
    };
    const store = mockStore({
      auth: {}
    });

    // Act
    return store
      .dispatch(authActions.login({ username, password }))
      .then(() => {
        const actions = store.getActions();
        // Assert
        expect(actions[0]).toEqual({ type: AUTH.LOGIN_BEGIN });
        expect(actions[1]).toEqual({ type: AUTH.LOGIN_SUCCESS, user });
        done();
      });
  });

  it("should handle failed login when invalid credentials provided", done => {
    // Arrange
    authService.login = jest.fn(() => Promise.reject("Invalid credentials."));

    const username = "invalid";
    const password = "invalid";
    const message = "Invalid credentials.";
    const store = mockStore({
      auth: {}
    });

    // Act
    return store.dispatch(authActions.login(username, password)).then(() => {
      const actions = store.getActions();
      // Assert
      expect(actions[0]).toEqual({ type: AUTH.LOGIN_BEGIN });
      expect(actions[1]).toEqual({ type: AUTH.LOGIN_FAILED, message });
      done();
    });
  });
});
