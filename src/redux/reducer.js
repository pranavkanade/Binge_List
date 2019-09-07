import actionTypes from "./actionTypes";
import { getStateFromLocalStorage, setStateToLocalStorage } from "./util";
const initialState = {
  latestSearchTerm: "",
  searchResults: null,
  totalPages: 1
};

const reducer = (state = initialState, action) => {
  let resp = null;
  switch (action.type) {
    case actionTypes.CLEAR_SEARCH_RESULTS:
      resp = { ...initialState };
      setStateToLocalStorage(resp);
      return resp;
    case actionTypes.STORE_LATEST_SEARCH_RESULTS:
      console.log("storing data");
      resp = Object.assign({}, state, {
        ...action.data
      });
      setStateToLocalStorage(resp);
      return resp;
    default:
      return state;
  }
};

export default reducer;
