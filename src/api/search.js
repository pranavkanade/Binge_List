import { BASEAPI } from "../../global.config";
import { APIKEY } from "../../apiKey.tmdb";
import { fetchData } from "./generic";

// Here will only assemble the URL addresses to get the desired data

export const getMovieSearch = async (
  searchQueryText,
  storeSearchResults,
  pageNum = 1
) => {
  const APIENDPOINT = "/search/movie";
  const queryString = `?api_key=${APIKEY}&language=en-US&query=${searchQueryText}&page=${pageNum}&include_adult=false`;
  const URL = `${BASEAPI}${APIENDPOINT}${queryString}`;
  try {
    const data = await fetchData(URL);
    storeSearchResults(data);
  } catch (err) {
    console.log("An error has occured when fetching search results");
  }
};
