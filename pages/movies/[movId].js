import React from "react";
import { Container } from "semantic-ui-react";
import DetailedMovie from "../../src/components/movies/detailed";

const movies = props => {
  return (
    <Container>
      <DetailedMovie movieId={props.movieId} type="movie" />
    </Container>
  );
};

movies.getInitialProps = async ({ query }) => {
  const movId = query.movId;
  return { movieId: movId };
};

export default movies;
