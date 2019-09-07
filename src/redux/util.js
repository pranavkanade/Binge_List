export const getStateFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("__BL_STORE__");
    return JSON.parse(data);
  } catch (err) {}
};

export const setStateToLocalStorage = data => {
  //Storing to local storage
  let newData = null;
  let storedState = null;
  try {
    storedState = getStateFromLocalStorage();
  } catch (err) {
    console.log("Error");
  }
  try {
    newData = storedState
      ? {
          ...storedState,
          ...data
        }
      : { ...data };
    newData = JSON.stringify(data);
    localStorage.setItem("__BL_STORE__", newData);
  } catch (e) {}
};
