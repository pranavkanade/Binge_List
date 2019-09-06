import { BASEAPI, APIKEY } from "../../global.config";

export const getPersonsProfile = async (personId, storeProfileInfo) => {
  const apiEndpoint = `/person/${personId}`;
  const queryString = `?api_key=${APIKEY}&language=en-US`;
  const URL = `${BASEAPI}${apiEndpoint}${queryString}`;
  try {
    const personsProfile = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await personsProfile.json();
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
    const movieCredits = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await movieCredits.json();
    storeMovieCredits(data);
  } catch (err) {
    console.log("An error has occured when fetching person's movie credits");
  }
};
