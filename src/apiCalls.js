
const apiCalls = () => {
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=parks&location=39.750759, -104.996656&radius=50000&type=point_of_interest&key=${apiKey}`;
  return fetch(proxyurl + url)
  .then(response => response.json())
  .then(contents => console.log(contents.results))
  .catch(() => console.log("Can't access " + url + " response. Blocked by browser?"))


export default apiCalls
