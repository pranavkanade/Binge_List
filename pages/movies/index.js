import React, { useState } from "react";
import { Segment, Header, Dropdown } from "semantic-ui-react";
import MovieCatalog from "../../src/components/movies/catalog/catalog";

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

export default () => {
  const [selectedCategory, setSelectedCategory] = useState(DEFAULTCATEGORY);

  return (
    <Segment basic>
      <Header as="h2">Welcome to movies' catalog</Header>
      <Segment basic>
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
