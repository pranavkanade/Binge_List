import actionTypes from "./actionTypes";

const initialState = {
  latestSearchTerm: "",
  searchResults: null
};

const reducer = (state = initialState, action) => {
  let resp = null;
  switch (action.type) {
    case actionTypes.CLEAR_SEARCH_RESULTS:
      resp = { ...initialState };
      return resp;
    case actionTypes.STORE_LATEST_SEARCH_RESULTS:
      console.log("storing data");
      resp = Object.assign({}, state, {
        ...action.data
      });
      return resp;
    default:
      return state;
  }
};

export default reducer;
