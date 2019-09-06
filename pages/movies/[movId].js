import React from "react";
import { Container } from "semantic-ui-react";
import Layout from "../../src/components/layout/layout";
import DetailedMovie from "../../src/components/detailed";

const movies = props => {
  return (
    <Layout>
      <Container>
        <DetailedMovie movieId={props.movieId} type="movie" />
      </Container>
    </Layout>
  );
};

movies.getInitialProps = async ({ query }) => {
  const movId = query.movId;
  return { movieId: movId };
};

export default movies;
