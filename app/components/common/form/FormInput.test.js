import React from "react";
import { shallow } from "enzyme";
import FormInput from "./FormInput";

function setup(props) {
  return shallow(<FormInput {...props} />);
}

describe("<InputForm /> component", () => {
  const requiredProps = {
    type: "email",
    name: "test",
    inputId: "someId",
    onChange: () => {}
  };

  it("renders itself", () => {
    // Arrange Act
    const wrapper = setup({
      ...requiredProps
    });
    expect(wrapper.find("Input")).toHaveLength(1);
  });

  it('uses "type" attribute', () => {
    // Arrange Act
    const wrapper = setup({
      ...requiredProps
    });
    // Assert
    expect(wrapper.find("Input").prop("type")).toEqual(requiredProps.type);
  });

  it('uses "name" attribute', () => {
    // Arrange Act
    const wrapper = setup({
      ...requiredProps
    });

    // Assert
    expect(wrapper.find("Input").prop("name")).toEqual(requiredProps.name);
  });

  it('uses "placeholder" attribute', () => {
    // Arrange
    const placeholder = "test";

    // Act
    const wrapper = setup({
      ...requiredProps,
      placeholder
    });

    // Assert
    expect(wrapper.find("Input").prop("placeholder")).toEqual(placeholder);
  });

  it('uses "required" attribute', () => {
    // Arrange
    const required = true;

    // Act
    const wrapper = setup({
      ...requiredProps,
      required
    });

    // Assert
    expect(wrapper.instance().props.required).toEqual(required);
  });
});
