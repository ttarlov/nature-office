const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

export const getSpotsApi = async (coordinates) => {
  let latitude = coordinates.lat
  let longitude = coordinates.lng
  try {
  const result = await fetch('https://fe-cors-proxy.herokuapp.com', {
  headers: {
    "Target-URL": `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=parks&location=${latitude},${longitude}&radius=5000&type=point_of_interest&key=${apiKey}`
    // "Target-URL": `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=parks&location=39.750759, -104.996656&radius=50000&type=point_of_interest&key=${apiKey}`
  }
})
  if(!result.ok) {
    throw new Error(`Problem received status code of ${result.status}`)
  }

  const response = await result.json()
  console.log("GetSpotsApi Returns", response.results);
  return response
} catch(error) {
  window.alert(`Server Error. Its not your fault the error is: ${error}`)
}
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

export const getCoordinates = async (zipCode) => {
  try {
    const result = await fetch('https://fe-cors-proxy.herokuapp.com', {
      headers: {
        "Target-URL": `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=${apiKey}`
      }
    })
    if (!result.ok) {
      throw new Error(`Problem received status code of ${result.status}`)
    }
    const response = await result.json()
    console.log("zipcode Returns", response.results);
    return response.results
  } catch (error) {
    window.alert(`Server Error. Its not your fault the error is: ${error}`)
  }
}

export const getWeatherApi = async () => {
  const result = await fetch('https://fe-cors-proxy.herokuapp.com', {
    headers: {
      "Target-URL": 'https://www.metaweather.com/api/location/2391279/'
    }
  })

  return await result.json()
}

export const getNorrisJoke = async () => {
  const result = await fetch('https://api.chucknorris.io/jokes/random')
  const response = await result.json()
  return response.value
}
