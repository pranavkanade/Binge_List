import React, { useState } from "react";
import Link from "next/link";
import Menubar from "./menu";
import { Container, Segment, Grid, Icon, Divider } from "semantic-ui-react";
import SearchBar from "../ui/searchBar";

const layout = props => {
  const [searchQuery, setSearchQuery] = useState(null);
  return (
    <div>
      <Menubar />
      <Segment attached>
        <Grid>
          <Grid.Row>
            <Grid.Column width="4" />
            <Grid.Column width="8" textAlign="center">
              <SearchBar setSearchQuery={setSearchQuery} />
            </Grid.Column>
            <Grid.Column width="4" textAlign="left">
              {searchQuery ? (
                <Link
                  href={{
                    pathname: "/movies",
                    query: { searched: searchQuery }
                  }}
                  as={`/movies/searched/${searchQuery}`}>
                  <a style={{ cursor: "pointer" }}>
                    Show All search results <Icon name="arrow right" />
                  </a>
                </Link>
              ) : null}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Divider hidden />
      <Container>{props.children}</Container>
      <Segment attached>
        <h1>This is footer</h1>
      </Segment>
    </div>
  );
};

export default layout;
