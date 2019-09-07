import React, { Component } from "react";
import Link from "next/link";
import { Button, Segment, Message, Header, Card } from "semantic-ui-react";
import MovieCard from "../ui/movieCard";
import { getMoviesNowPlaying } from "../../api/movies";
import Loader from "../ui/loader";

const NOW_PLAYING = "Now Playing";

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
    const movieCards = this.state.moviesNowPlaying.slice(0, 4).map(movie => {
      return <MovieCard movie={movie} key={movie.id} />;
    });

    return <>{movieCards}</>;
  };

  render() {
    return (
      <React.Fragment>
        <Header as="h2" textAlign="left">
          Available in Theaters Now!
          <Link
            href={{
              pathname: "/movies",
              query: { category: NOW_PLAYING }
            }}>
            <Button floated="right" basic>
              Show All
            </Button>
          </Link>
        </Header>
        <Segment basic>
          {this.state.moviesNowPlaying ? (
            <Card.Group itemsPerRow={4}>{this.renderMovieCards()}</Card.Group>
          ) : (
            // If data is yet to be fetched; Show loader
            <Loader />
          )}
        </Segment>
      </React.Fragment>
    );
  }

  storeMoviesNowPlaying = moviesNowPlaying => {
    this.setState({ moviesNowPlaying });
  };

  componentDidMount() {
    // Making this async call
    getMoviesNowPlaying(1, this.storeMoviesNowPlaying);
  }
}

export default InTheatersBox;
