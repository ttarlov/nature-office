const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

export const getSpotsApi = () => {
  return fetch('https://fe-cors-proxy.herokuapp.com', {
  headers: {
    "Target-URL": `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=parks&location=39.750759, -104.996656&radius=50000&type=point_of_interest&key=${apiKey}`
  }
})
  .then(response => response.json())
}

export const getSpotPhoto = (photoRef) => {
  return fetch('https://fe-cors-proxy.herokuapp.com', {
  headers: {
    "Target-URL": `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&key=${apiKey}photoreference=${photoRef}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})
  .then(response => response.json())
}
