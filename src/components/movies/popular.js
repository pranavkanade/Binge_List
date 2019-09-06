import React, { Component } from "react";
import {
  Button,
  Segment,
  Message,
  Pagination,
  Card,
  Divider
} from "semantic-ui-react";
import { getPopularMovies } from "../../api/movies";
import MovieCard from "../ui/movieCard";
import Loader from "../ui/loader";

class PopularMovies extends Component {
  state = {
    popularMovies: null,
    activePage: 1,
    totalPages: 1
  };

  renderMovieCards = () => {
    if (this.state.popularMovies.length === 0) {
      return (
        <Message info>
          <Message.Header>No more movies to show</Message.Header>
        </Message>
      );
    }
    const movieCards = this.state.popularMovies.map(movie => {
      return <MovieCard movie={movie} key={movie.id} />;
    });

    return <>{movieCards}</>;
  };

  handlePaginationChange = async (e, { activePage }) => {
    this.setState({ activePage });
    // Every time we change the page number the api will be invoked to find the listing on that page
    getPopularMovies(activePage, this.storePopularMovies);
  };

  // Use the function both at the top and at the bottom so that it'll be convenient for the user
  renderPagination = () => {
    const { activePage, totalPages } = this.state;
    return (
      <Pagination
        activePage={activePage}
        onPageChange={this.handlePaginationChange}
        size="medium"
        totalPages={totalPages}
      />
    );
  };

  render() {
    return (
      <>
        <Segment basic>
          {this.renderPagination()}
          <Divider hidden />
          {this.state.popularMovies ? (
            <Card.Group itemsPerRow={4}>{this.renderMovieCards()}</Card.Group>
          ) : (
            // If data is yet to be fetched; Show loader
            <Loader />
          )}
          <Divider hidden />
          {this.renderPagination()}
        </Segment>
      </>
    );
  }

  storePopularMovies = (popularMovies, totalPages) => {
    this.setState({ popularMovies, totalPages });
  };

  componentDidMount() {
    getPopularMovies(this.state.activePage, this.storePopularMovies);
  }
}

export default PopularMovies;
