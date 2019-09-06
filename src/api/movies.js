import { BASEAPI, APIKEY } from "../../global.config";

export const getMoviesNowPlaying = async (pageNum, storeMoviesNowPlaying) => {
  const APIENDPOINT = "/movie/now_playing";
  const queryString = `?api_key=${APIKEY}&language=en-US&page=${pageNum}`;
  const URL = `${BASEAPI}${APIENDPOINT}${queryString}`;
  try {
    const moviesNowPlaying = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await moviesNowPlaying.json();
    storeMoviesNowPlaying(data.results);
    // return data;
  } catch (err) {
    console.log("An error has occured when fetching movies now playing");
  }
};

export const getDetailedMovie = async (movieId, storeMovieDetails) => {
  const apiEndpoint = `/movie/${movieId}`;
  const queryString = `?api_key=${APIKEY}&language=en-US`;
  const URL = `${BASEAPI}${apiEndpoint}${queryString}`;
  try {
    const movieDetails = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await movieDetails.json();
    storeMovieDetails(data);
    // return data;
  } catch (err) {
    console.log("An error has occured when fetching movie details");
  }
};

export const getMovieCredits = async (movieId, storeMovieCast) => {
  const apiEndpoint = `/movie/${movieId}/credits`;
  const queryString = `?api_key=${APIKEY}`;
  const URL = `${BASEAPI}${apiEndpoint}${queryString}`;
  try {
    const movieCredits = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await movieCredits.json();
    if (data.cast) {
      storeMovieCast(data.cast);
    }
    // return data;
  } catch (err) {
    console.log("An error has occured when fetching movie credits");
  }
};

// export const logoutHandler = async event => {
//   try {
//     const logoutRes = await fetch(URLS.USERLOGOUT, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: getAuthorization()
//       }
//     });
//     const data = await logoutRes.json();
//     // remove if any thing is remaining of the previous user
//     removeUserFromLocalStorage();
//   } catch (err) {}
// };
