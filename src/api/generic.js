// Only going to make `get` requests so will resue this function.
// Letting the caller worry about error
export const fetchData = async url => {
  const resp = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await resp.json();
  return data;
};
