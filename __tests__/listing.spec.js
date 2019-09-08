import React from "react";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";
import Listing from "../src/components/ui/listing";
import { PopularData } from "../test_data/apiData";

describe("UI Components Testing", () => {
  describe("Test Movie Listing", () => {
    it("it renders same number of movie cards as length of props moviesList", () => {
      const wrapper = mount(
        <Listing moviesList={PopularData.results.slice(0, 10)} />
      );
      expect(wrapper.props().moviesList.length).toEqual(10);
    });
  });
});
