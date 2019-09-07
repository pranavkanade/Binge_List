// import React from "react";
import { initializeBLStore } from "./store";

const isServer = typeof window === "undefined";

import { getStateFromLocalStorage, setStateToLocalStorage } from "./util";

export function getOrCreateStore(initialState) {
  //Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeBLStore(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  const localState = getStateFromLocalStorage();
  let store = null;
  if (!localState) {
    store = initializeBLStore(initialState);
    setStateToLocalStorage(store.getState());
  } else {
    store = initializeBLStore(localState);
  }

  return store;
}
