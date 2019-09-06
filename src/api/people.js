import { BASEAPI, APIKEY } from "../../global.config";
import { fetchData } from "./generic";

export const getPersonsProfile = async (personId, storeProfileInfo) => {
  const apiEndpoint = `/person/${personId}`;
  const queryString = `?api_key=${APIKEY}&language=en-US`;
  const URL = `${BASEAPI}${apiEndpoint}${queryString}`;
  try {
    // using the genric `get` request method to fetch the data
    const data = await fetchData(URL);
    storeProfileInfo(data);
  } catch (err) {
    console.log("An error has occured when fetching person's profile");
  }
};

export const getPersonsMovieCredits = async (personId, storeMovieCredits) => {
  const apiEndpoint = `/person/${personId}/movie_credits`;
  const queryString = `?api_key=${APIKEY}&language=en-US`;
  const URL = `${BASEAPI}${apiEndpoint}${queryString}`;
  try {
    const data = await fetchData(URL);
    storeMovieCredits(data);
  } catch (err) {
    console.log("An error has occured when fetching person's movie credits");
  }
};
