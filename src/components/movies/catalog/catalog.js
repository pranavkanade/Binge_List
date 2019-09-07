import React from "react";
import MovieCollection from "./collection";
import {
  getPopularMovies,
  getMoviesNowPlaying,
  getTopRatedMovies,
  getUpcomingMovies
} from "../../../api/movies";
import { Segment, Header } from "semantic-ui-react";

const movieCategories = [
  {
    key: "Now Playing",
    api: getMoviesNowPlaying
  },
  {
    key: "Popular",
    api: getPopularMovies
  },
  {
    key: "Top Rated",
    api: getTopRatedMovies
  },
  {
    key: "Upcoming",
    api: getUpcomingMovies
  }
];

const getApiRequest = category => {
  const selectedCategory = movieCategories.filter(cat => cat.key === category);
  if (selectedCategory.length == 1) {
    return selectedCategory[0].api;
  } else {
    return getPopularMovies;
  }
};

export default props => {
  return (
    <>
      <Header as="h2">{props.category}</Header>
      <Segment textAlign="center" basic>
        <MovieCollection
          getRequestedMovies={getApiRequest(props.category)}
          category={props.category}
        />
      </Segment>
    </>
  );
};
