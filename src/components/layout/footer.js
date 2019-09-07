import React from "react";
import { Container, Segment, Grid, Icon, Divider } from "semantic-ui-react";

const footer = props => {
  return (
    <Segment attached color="orange">
      <Container>
        <p>This project is built by Pranav Kanade using TMDB APIs</p>
      </Container>
    </Segment>
  );
};

export default footer;
