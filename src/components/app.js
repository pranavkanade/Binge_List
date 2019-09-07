import React, { useState } from "react";
import { Segment, Container, Header } from "semantic-ui-react";
import style from "../../static/styles/style.scss";
import InTheaterBox from "./movies/inTheater";
import PopularMovies from "./movies/popular";

const app = () => {
  return (
    <Container className={style.App}>
      <Segment attached color="green">
        <InTheaterBox />
      </Segment>
      <br />
      <Segment basic>
        <Header textAlign="left" as="h2">
          Popular Movies
        </Header>
        <PopularMovies />
      </Segment>
    </Container>
  );
};

export default app;
