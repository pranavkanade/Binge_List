import React, { Component } from "react";
import { Button, Segment, Message, Header, Card } from "semantic-ui-react";
import MovieCard from "./ui/movieCard";
import { getMoviesNowPlaying } from "../api/movies";
import Loader from "./ui/loader";

class InTheatersBox extends Component {
  state = {
    moviesNowPlaying: null
  };

  renderMovieCards = () => {
    if (this.state.moviesNowPlaying.length === 0) {
      return (
        <Message info>
          <Message.Header>No more movies to show</Message.Header>
        </Message>
      );
    }
    const movieCards = this.state.moviesNowPlaying.map(movie => {
      return <MovieCard movie={movie} />;
    });

    return <>{movieCards}</>;
  };

  render() {
    return (
      <React.Fragment>
        <Header attached="top" as="h2" textAlign="left">
          In Theaters Now !
        </Header>
        <Segment attached>
          {this.state.moviesNowPlaying ? (
            <Card.Group itemsPerRow={4}>{this.renderMovieCards()}</Card.Group>
          ) : (
            <Loader />
          )}
        </Segment>
      </React.Fragment>
    );
  }

  async componentDidMount() {
    const result = await getMoviesNowPlaying();
    const moviesNowPlaying = result.results;
    this.setState({ moviesNowPlaying: moviesNowPlaying });
  }
}

export default InTheatersBox;
