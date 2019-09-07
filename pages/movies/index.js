import React, { useState } from "react";
import { useRouter } from "next/router";
import { Segment, Header, Dropdown } from "semantic-ui-react";
import MovieCatalog from "../../src/components/movies/catalog/catalog";
import MovieSearched from "../../src/components/movies/catalog/searched";

const movieCategories = [
  {
    key: "Now Playing",
    text: "Now Playing",
    value: "Now Playing"
  },
  {
    key: "Popular",
    text: "Popular",
    value: "Popular"
  },
  {
    key: "Top Rated",
    text: "Top Rated",
    value: "Top Rated"
  },
  {
    key: "Upcoming",
    text: "Upcoming",
    value: "Upcoming"
  }
];

const DEFAULTCATEGORY = "Popular";

const renderFullSearchResult = searchQuery => {
  return (
    <Segment basic>
      <Header as="h2">Welcome to movies' catalog</Header>
      <MovieSearched searchQuery={searchQuery} />
    </Segment>
  );
};

const movies = props => {
  const router = useRouter();
  const { searched } = router.query;
  if (searched) {
    return renderFullSearchResult(searched);
  }
  const { category } = router.query;
  const [selectedCategory, setSelectedCategory] = useState(
    category ? category : DEFAULTCATEGORY
  );
  return (
    <Segment basic>
      <Header as="h2">Welcome to TMDB's movie catalog</Header>
      <Segment attached color="orange" padded="very">
        <Header>Filter Movies By Category :</Header>
        <Dropdown
          placeholder="Select Category"
          selection
          defaultValue={selectedCategory}
          options={movieCategories}
          onChange={(e, { value }) => {
            setSelectedCategory(value);
          }}
        />
      </Segment>
      <MovieCatalog category={selectedCategory} />
    </Segment>
  );
};

export default movies;
