import React from "react";
import {
  Button,
  Segment,
  Container,
  Header,
  Card,
  Search,
  Grid
} from "semantic-ui-react";
import style from "../../static/styles/style.scss";
import InTheaterBox from "./movies/inTheater";
import PopularMovies from "./movies/popular";
import SearchBar from "./ui/searchBar";

const app = () => {
  return (
    <Container className={style.App}>
      <Grid>
        <Grid.Row>
          <Grid.Column width="4" />
          <Grid.Column width="8">
            <SearchBar />
          </Grid.Column>
          <Grid.Column width="4" />
        </Grid.Row>
      </Grid>

      <br />
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
