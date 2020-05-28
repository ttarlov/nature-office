const apiCalls = () => {
  const key = 'AIzaSyDA-XAIqOZb--MR4zGDxGL2SUn4TPqlY4s'
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=32.837074, -97.081955&radius=50000&type=point_of_interest&key=${key}`;
  return fetch(proxyurl + url)
  .then(response => response.json())
  .then(contents => console.log(contents.results))
  .catch(() => console.log("Can't access " + url + " response. Blocked by browser?"))
  
}
// const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=32.837074, -97.081955&radius=50000&type=point_of_interest&key=AIzaSyDOZKvrJT1yqONNCs49PY0r6diiWC6QNdY";


export default apiCalls
