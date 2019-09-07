import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import reducer from "./reducer";

export function initializeBLStore(initialState) {
  const isServer = typeof window === "undefined";
  if (isServer) {
    return createStore(reducer, composeWithDevTools(applyMiddleware()));
  }
  let store;
  if (initialState) {
    store = createStore(
      reducer,
      initialState,
      composeWithDevTools(applyMiddleware())
    );
  } else {
    store = createStore(reducer, composeWithDevTools(applyMiddleware()));
  }
  return store;
}
