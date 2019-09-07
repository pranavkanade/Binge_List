import React, { Component } from "react";
import { getPopularMovies } from "../../api/movies";
import Listing from "./catalog/listing";

class PopularMovies extends Component {
  state = {
    moviesList: null,
    activePage: 1,
    totalPages: 1
  };

  fetchMoviesFromPage = async activePage => {
    this.setState({ activePage });
    // Every time we change the page number the api will be invoked to find the listing on that page
    getPopularMovies(activePage, this.storePopularMovies);
  };

  render() {
    return (
      <Listing
        {...this.state}
        fetchMoviesFromPage={this.fetchMoviesFromPage}
      />
    );
  }

  storePopularMovies = (moviesList, totalPages) => {
    this.setState({ moviesList, totalPages });
  };

  componentDidMount() {
    getPopularMovies(this.state.activePage, this.storePopularMovies);
  }
}

export default PopularMovies;
