import React, { useState } from "react";
import {
  Segment,
  Container,
  Header,
  Button,
  Divider
} from "semantic-ui-react";
import style from "../../static/styles/style.scss";
import InTheaterBox from "./movies/inTheater";
import PopularMovies from "./movies/popular";
import Link from "next/link";

const POPULAR = "Popular";

const app = () => {
  return (
    <Container className={style.App}>
      <Segment color="teal" basic secondary padded>
        <InTheaterBox />
      </Segment>
      <br />
      <Segment basic>
        <Header textAlign="left" as="h2">
          Popular Movies
          <Link
            href={{
              pathname: "/movies",
              query: { category: POPULAR }
            }}
            as="/movies">
            <Button floated="right" color="orange" basic>
              Show All
            </Button>
          </Link>
        </Header>
        <PopularMovies />
      </Segment>
    </Container>
  );
};

export default app;
