import React from "react";
import { shallow } from "enzyme";
import LoginForm from "./LoginForm";

function setup(props) {
  return shallow(<LoginForm {...props} />);
}

describe("<LoginForm /> component", () => {
  it("renders itself", () => {
    // Arrange Act
    const wrapper = setup({
      onSubmit() {}
    });

    // Assert
    expect(wrapper.find("form")).toHaveLength(1);
    expect(wrapper.find("FormInput")).toHaveLength(2);
  });

  it("should handle username Changes", () => {
    // Arrange
    const wrapper = setup({
      onSubmit() {}
    });
    const event = {
      target: {
        name: "username",
        value: "jdoe"
      }
    };
    const expectedState = {
      username: "jdoe",
      password: ""
    };

    // Act
    wrapper
      .find("FormInput")
      .first()
      .simulate("change", event);

    // Assert
    expect(wrapper.state()).toEqual(expectedState);
  });

  it("should handle password Changes", () => {
    // Arrange
    const wrapper = setup({
      onSubmit() {}
    });
    const event = {
      target: {
        name: "password",
        value: "secret"
      }
    };
    const expectedState = {
      username: "",
      password: "secret"
    };

    // Act
    wrapper
      .find("FormInput")
      .last()
      .simulate("change", event);

    // Assert
    expect(wrapper.state()).toEqual(expectedState);
  });

  it("should handle form submit", () => {
    // Arrange
    const props = {
      onSubmit: jest.fn()
    };
    const wrapper = setup(props);

    const event = {
      preventDefault: jest.fn()
    };

    // Act
    wrapper.find("form").simulate("submit", event);

    // Assert
    expect(event.preventDefault.mock.calls.length).toBe(1);
    expect(props.onSubmit.mock.calls.length).toBe(1);
  });
});
