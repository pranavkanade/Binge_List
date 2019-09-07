import React, { Component } from "react";
import Listing from "./listing";

const DEFAULTACTIVEPAGE = 1;

class MovieCollection extends Component {
  state = {
    moviesList: null,
    activePage: DEFAULTACTIVEPAGE,
    totalPages: 1
  };

  fetchMoviesFromPage = async activePage => {
    this.setState({ activePage });
    // Every time we change the page number the api will be invoked to find the listing on that page
    this.props.getRequestedMovies(activePage, this.storeMoviesList);
  };

  render() {
    return (
      <Listing
        {...this.state}
        fetchMoviesFromPage={this.fetchMoviesFromPage}
      />
    );
  }

  storeMoviesList = (moviesList, totalPages) => {
    this.setState({ moviesList, totalPages });
  };

  componentDidUpdate(prevProps, prevState) {
    // Update the movie results when category is changed.
    if (this.props.category !== prevProps.category) {
      this.fetchMoviesFromPage(DEFAULTACTIVEPAGE);
    }
  }

  componentDidMount() {
    this.props.getRequestedMovies(this.state.activePage, this.storeMoviesList);
  }
}

export default MovieCollection;
