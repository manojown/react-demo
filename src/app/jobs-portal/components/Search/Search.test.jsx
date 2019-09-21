import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { findByTestAtrr } from "../../../utils/testingUtils";
import SearchArea from "./index";
import SearchBar from "./searchBar";

configure({ adapter: new Adapter() });

const setUp = (Component, props = {}) => {
  const component = shallow(<Component {...props} />);
  return component;
};

describe("Search Component Load", () => {
  it("SearchArea Should render without errors", () => {
    let component = setUp(SearchArea, { onHandleChange: jest.fn() });
    const wrapper = findByTestAtrr(component, "SearchArea");
    expect(wrapper.length).toBe(1);
  });
  it("SearchBar Should render without errors", () => {
    let component = setUp(SearchBar, { onChange: jest.fn(), name: "" });
    const wrapper = findByTestAtrr(component, "SearchBar");
    expect(wrapper.length).toBe(1);
  });
});
