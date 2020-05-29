
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



// export getPictures = (param)=>{

// }


// export const getAreas = () => {
//   return fetch('https://vrad-api.herokuapp.com/api/v1/areas')
//     .then(res => res.json())
//     .then(data => {
//       const areaDetails = data.areas.map(area => {
//         return fetch(`https://vrad-api.herokuapp.com${area.details}`)
//           .then(res => res.json())
//           .then(area => {
//             return {
//               name: area.name,
//               ...area
//             }
//           })
//       })
//       return Promise.all(areaDetails)
//     })



// }