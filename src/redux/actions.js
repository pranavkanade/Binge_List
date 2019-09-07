import actionTypes from "./actionTypes";

// Actions
export const storeLatestSearchResults = data => {
  return { type: actionTypes.STORE_LATEST_SEARCH_RESULTS, data: data };
};

export const clearSearchResults = () => {
  return { type: actionTypes.CLEAR_SEARCH_RESULTS };
};
