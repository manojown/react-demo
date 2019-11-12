import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { findByTestAtrr } from "../../../utils/testingUtils";
import JobCard from "./index";
import { Job } from "../../../models/job";
configure({ adapter: new Adapter() });

const setUp = (props = {}) => {
  const component = shallow(<JobCard {...props} />);
  return component;
};

describe("JobCard Component Load", () => {
  let component;
  beforeEach(() => {
    component = setUp({ job: new Job() });
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "JobCard");
    expect(wrapper.length).toBe(1);
  });
});
