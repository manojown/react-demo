import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { findByTestAtrr } from "../../../utils/testingUtils";
import JobListing from "./index";
import { Job } from "../../../models/job";
configure({ adapter: new Adapter() });

const setUp = (props = {}) => {
  const component = shallow(<JobListing {...props} />);
  return component;
};

describe("JobListing Component Load", () => {
  let component;
  beforeEach(() => {
    component = setUp({ jobs: [new Job()] });
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "JobListing");
    expect(wrapper.length).toBe(1);
  });
});
