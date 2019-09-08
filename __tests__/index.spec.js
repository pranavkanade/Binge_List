import React from "react";
import { shallow, mount } from "enzyme";
import MoviesInTheaters from "../src/components/index/inTheater";
import PopularMovies from "../src/components/index/popular";
import { PopularData } from "../test_data/apiData";
import renderer from "react-test-renderer";

describe("Testing Index page", () => {
  describe("Test Movies in Theaters", () => {
    it("Fetches data from server and updates the state", () => {
      const mockSuccessResponse = PopularData;
      const mockJsonPromise = Promise.resolve(mockSuccessResponse);
      const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise
      });
      global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

      const wrapper = mount(<MoviesInTheaters />);
      expect(global.fetch).toHaveBeenCalledTimes(1);

      process.nextTick(() => {
        expect(wrapper.state()).toEqual({
          moviesNowPlaying: PopularData.results
        });
      });
    });
  });

  describe("Test Popular Movies", () => {
    it("Fetches data from server and updates the state", () => {
      const mockSuccessResponse = PopularData;
      const mockJsonPromise = Promise.resolve(mockSuccessResponse);
      const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise
      });
      global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

      const wrapper = mount(<PopularMovies />);
      expect(global.fetch).toHaveBeenCalledTimes(1);

      process.nextTick(() => {
        expect(wrapper.state().moviesList.length).toEqual(
          PopularData.results.length
        );
      });
    });

    it("Shows only 8 movies initiallly", () => {
      const mockSuccessResponse = PopularData;
      const mockJsonPromise = Promise.resolve(mockSuccessResponse);
      const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise
      });
      global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

      const wrapper = mount(<PopularMovies />);
      expect(wrapper.state().showCount).toEqual(8);
    });
  });
});

describe("Snapshot testing Index Page", () => {
  describe("Test Movies in Theaters", () => {
    it("Renders correctly", () => {
      const mockSuccessResponse = PopularData;
      const mockJsonPromise = Promise.resolve(mockSuccessResponse);
      const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise
      });
      global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

      const moviesInTheater = renderer.create(<MoviesInTheaters />).toJSON();
      expect(moviesInTheater).toMatchSnapshot();

      global.fetch.mockClear();
      delete global.fetch;
    });
  });
});
