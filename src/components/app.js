import React, { useState } from "react";
import { Segment, Container, Header, Grid, Icon } from "semantic-ui-react";
import Link from "next/link";
import style from "../../static/styles/style.scss";
import InTheaterBox from "./movies/inTheater";
import PopularMovies from "./movies/popular";
import SearchBar from "./ui/searchBar";

const app = () => {
  const [isSearched, setIsSearched] = useState(false);

  return (
    <Container className={style.App}>
      <Segment basic>
        <Grid>
          <Grid.Row>
            <Grid.Column width="4" />
            <Grid.Column width="8">
              <SearchBar setIsSearched={setIsSearched} />
            </Grid.Column>
            <Grid.Column width="4" textAlign="left">
              {isSearched ? (
                <Link
                  href={{
                    pathname: "/movies",
                    query: { key: "searched" }
                  }}
                  as="/movies#searched">
                  <a style={{ cursor: "pointer" }}>
                    Show All search results <Icon name="arrow right" />
                  </a>
                </Link>
              ) : null}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
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
