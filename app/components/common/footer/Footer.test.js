import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

function setup(props) {
  return shallow(<Footer {...props} />);
}

describe("<Footer /> component", () => {
  it("renders itself", () => {
    // Arrange Act
    const wrapper = setup();

    // Assert
    expect(wrapper.find("footer")).toHaveLength(1);
    expect(wrapper.find("p")).toHaveLength(2);
  });
});
