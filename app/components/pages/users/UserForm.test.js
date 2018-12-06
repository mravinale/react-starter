import React from "react";
import { shallow } from "enzyme";
import UserForm from "./UserForm";

function setup(props) {
  return shallow(<UserForm {...props} />);
}

describe("<UserForm /> component", () => {
  it("renders itself", () => {
    // Arrange Act
    const wrapper = setup({
      onChange: () => {},
      user: {},
      errors: {}
    });

    // Assert
    expect(wrapper.find("form")).toHaveLength(1);
    expect(wrapper.find("FormInput")).toHaveLength(4);
  });

  it("renders itself with errors", () => {
    // Arrange Act
    const wrapper = setup({
      onChange: () => {},
      user: {},
      errors: {
        name: "Name is required",
        email: "email is required"
      }
    });

    // Assert
    expect(wrapper.find("form")).toHaveLength(1);
    expect(wrapper.find("FormInput")).toHaveLength(4);
  });
});
