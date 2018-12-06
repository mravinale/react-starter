import React from "react";
import { shallow } from "enzyme";
import initialState from "../../../reducers/initialState";
import { LoginPage, mapDispatchToProps, mapStateToProps } from "./LoginPage";

function setup(props) {
  return shallow(<LoginPage {...props} />);
}

describe("<LoginPage /> component", () => {
  it("renders itself", () => {
    const wrapper = setup({
      actions: {}
    });

    expect(wrapper.find("section")).toHaveLength(1);
    expect(wrapper.find("LoginForm")).toHaveLength(1);
  });

  it("should handle form submit itself", () => {
    const login = jest.fn();
    const wrapper = setup({
      actions: {
        login
      }
    });
    const form = wrapper.find("LoginForm");

    form.simulate("submit");

    expect(login).toHaveBeenCalledTimes(1);
  });

  describe("mapStateToProps functions", () => {
    it("should return the initial state of auth module", () => {
      const expectedProps = {
        authenticating: false,
        isAuthenticated: false,
        error: false,
        errorMessage: null,
        user: null
      };

      const props = mapStateToProps(Object.assign({}, initialState));

      expect(props).toEqual(expectedProps);
    });
  });

  describe("mapDispatchToProps functions", () => {
    it("actions prop should be defined", () => {
      const dispatch = () => {};

      const props = mapDispatchToProps(dispatch);

      expect(props.actions).toBeDefined();
    });

    it("should return the binded actions", () => {
      const dispatch = () => {};
      const expectedActions = [
        "loginRequest",
        "loginSuccess",
        "loginFailed",
        "login"
      ];

      const props = mapDispatchToProps(dispatch);

      expect(Object.keys(props.actions)).toEqual(expectedActions);
    });
  });
});
