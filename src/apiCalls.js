const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

export const getSpotsApi = async () => {
  console.log('apiCalls')
  const result = await fetch('https://fe-cors-proxy.herokuapp.com', {
  headers: {
    "Target-URL": `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=parks&location=39.750759, -104.996656&radius=50000&type=point_of_interest&key=${apiKey}`
  }
})
  const response = await result.json()
  console.log("GetSpotsApi Returns", response.results);
  
  return response
  // .then(data => console.log(data.results))
  // .catch(error => console.error(error))
}

export const getSpotPhoto = (param) => {
  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=600&photoreference=${param}&key=${apiKey}`
 
}

export const getSpotDetailsApi = async (placeId) => {
  try {
    const response = await fetch('https://fe-cors-proxy.herokuapp.com', {
      headers: {
        "Target-URL": `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`
      }
    })
    return await response.json()  
  } catch (error) {
    console.log(error)
  }
}
