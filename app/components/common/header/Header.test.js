import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

function setup(props) {
  return shallow(<Header {...props} />);
}

describe("<Header /> component", () => {
  it("renders itself", () => {
    // Arrange Act
    const wrapper = setup();

    // Assert
    expect(wrapper.find(".navbar")).toHaveLength(1);
    expect(wrapper.find(".container")).toHaveLength(1);
    expect(wrapper.find("a").text()).toBe("React Starter");
  });
});
