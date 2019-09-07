import React, { Component } from "react";
import { Segment, Message, Card } from "semantic-ui-react";
import MovieCard from "../../ui/movieCard";
import Loader from "../../ui/loader";

const NUM_OF_MOVIES_IN_A_ROW = 4;

// This can be turned into functional component, by creating card grp UI component and pushing handlePagination to parent comonent.
class MovieListing extends Component {
  renderMovieCards = () => {
    if (this.props.moviesList.length === 0) {
      return (
        <Message info>
          <Message.Header>No more movies to show</Message.Header>
        </Message>
      );
    }
    const movieCards = this.props.moviesList.map(movie => {
      return <MovieCard movie={movie} key={movie.id} />;
    });

    return (
      <Card.Group itemsPerRow={NUM_OF_MOVIES_IN_A_ROW}>
        {movieCards}
      </Card.Group>
    );
  };

  render() {
    return (
      <Segment basic>
        {this.props.moviesList ? (
          this.renderMovieCards()
        ) : (
          // If data is yet to be fetched; Show loader
          <Loader />
        )}
      </Segment>
    );
  }
}

export default MovieListing;
