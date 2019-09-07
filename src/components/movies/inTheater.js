import React, { Component } from "react";
import Link from "next/link";
import { Button, Segment, Message, Header, Card } from "semantic-ui-react";
import MovieCard from "../ui/movieCard";
import { getMoviesNowPlaying } from "../../api/movies";
import Loader from "../ui/loader";
import Listing from "../movies/catalog/listing";

const NOW_PLAYING = "Now Playing";
const DEFAULT_MOVIE_COUNT = 4;

class InTheatersBox extends Component {
  state = {
    moviesNowPlaying: null
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
            }}
            as="/movies">
            <Button floated="right" basic color="orange">
              Show All
            </Button>
          </Link>
        </Header>
        <Segment basic>
          {this.state.moviesNowPlaying ? (
            <Listing
              moviesList={
                this.state.moviesNowPlaying.length > DEFAULT_MOVIE_COUNT
                  ? this.state.moviesNowPlaying.slice(0, DEFAULT_MOVIE_COUNT)
                  : this.state.moviesNowPlaying
              }
            />
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
