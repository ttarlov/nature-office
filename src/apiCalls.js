
// export const apiCalls = () => {
//   const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
//   const proxyurl = "https://cors-anywhere.herokuapp.com/";
//   const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=parks&location=39.750759, -104.996656&radius=50000&type=point_of_interest&key=${apiKey}`;
//   return fetch(proxyurl + url)
//   .then(response => response.json())
//   .then(contents => console.log(contents.results))
//   .catch(() => console.log("Can't access " + url + " response. Blocked by browser?"))

// }
const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

export const getSpotsApi = () => {
  console.log('apiCalls')
  return fetch('https://fe-cors-proxy.herokuapp.com', {
  headers: {
    "Target-URL": `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=parks&location=39.750759, -104.996656&radius=50000&type=point_of_interest&key=${apiKey}`
  }
})
  .then(response => response.json())
  // .then(data => console.log(data.results))
  // .catch(error => console.error(error))
}

export const getSpotPhoto = (param) => {
  console.log(param)
  return fetch('https://fe-cors-proxy.herokuapp.com', {
    headers: {
      "Target-URL": `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&key=${apiKey}&photoreference=${param}`
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))

}

// export getPictures = (param)=>{

// }


export const getAreas = () => {
  return fetch('https://vrad-api.herokuapp.com/api/v1/areas')
    .then(res => res.json())
    .then(data => {
      const areaDetails = data.areas.map(area => {
        return fetch(`https://vrad-api.herokuapp.com${area.details}`)
          .then(res => res.json())
          .then(area => {
            return {
              name: area.name,
              ...area
            }
          })
      })
      return Promise.all(areaDetails)
    })



}