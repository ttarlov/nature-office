// import { observable, action, computed } from 'mobx'
// import { getSpotsApi, getSpotPhoto, getSpotDetailsApi, checkIfPropertyExists } from "../apiCalls"
// // import { RouterStore, syncHistoryWithStore } from ‘mobx-react-router’;
// import { Redirect, Link } from 'react-router-dom';
// import React from 'react'
// import { zipCodes } from '../constants'

// class GlobalStore {
//   @observable title = 'nature office';
//   @observable apiData = [] 
//   @observable spots = []
//   @observable loginError = ''
//   @observable completedForm = false;
//   @observable userName = ''
//   @observable userEmail = ''
//   @observable zipCode = ''
//   @observable zipCodes = zipCodes
//   @observable spotDetails = {}
//   @observable loadingSpotDetailPics = false

//   @action handleChange = (event) => {
//     // this.loginError = ''
//     this[event.target.name] = event.target.value
//   }

//   @action validateUser = (event) => {
//     this.completedForm = false
//     event.preventDefault()
    
//     console.log('here')
//     console.log(this.zipCode)

//       // (!this.zipCodes.includes(this.zipCode)
//     if (this.userName === '' || this.userEmail === '' || !this.zipCodes.includes(parseInt(this.zipCode))){
//       this.loginError = 'Please fill all Inputs'
//     } else {
//       console.log('all inputs satisfied')
//       this.loginError = ''
//       this.completedForm = true;
//       this.getSpots()
//     }
//   }

//    @action getSpots = async () => {
//   console.log('apicall made')
//   const spotsApiData = await getSpotsApi()
//   // .then(data=> console.log(data))
//   spotsApiData.results.forEach(spot => {
//     console.log(spot);
    
//     this.spots.push(
//       {
//         name: spot.name,
//         id: spot.id,
//         address: spot.vicinity,
//         rating: spot.rating,
//         photo: getSpotPhoto(spot.photos[0].photo_reference),
//         coordinates: spot.geometry.location,
//         placeId: spot.place_id,
//         favorite: false
//       }
//     )
//   })
//   }

//   @action toggleFavorite = (id) => {
//     this.spots.forEach(spot => {
//       (spot.id === id) && (spot.favorite = !spot.favorite)
//     })
//     if (this.spotDetails && this.spotDetails.id === id) {
//       this.spotDetails.favorite = !this.spotDetails.favorite
//     }
//   }

//   @action displaySpotDetails = async (id) => {
//     this.loadingSpotDetailPics = true
//     const spot = this.spots.find(item => item.id === id)
//     const spotDetails = await getSpotDetailsApi(spot.placeId)
//     const d = spotDetails.result
//     const photoUrls = d.photos.map(photo => getSpotPhoto(photo.photo_reference))
//     this.spotDetails = {
//       name: spot.name,
//       address: spot.address,
//       rating: spot.rating,
//       coordinates: spot.coordinates,
//       favorite: spot.favorite,
//       id: d.id,
//       phone: d.formatted_phone_number,
//       hours: checkIfPropertyExists(() => d.opening_hours.weekday_text),
//       reviews: d.reviews,
//       types: d.types,
//       mapUrl: d.url,
//       website: d.website,
//       pictures: [...photoUrls],
//       wifi: true,
//       restroom: true,
//     }
//    console.log(this.spotDetails)
//    this.loadingSpotDetailPics = false
//   }

// }

// const store = new GlobalStore()
// export default store


  
import { observable, action, computed } from 'mobx'
import { getSpotsApi, getSpotPhoto, getSpotDetailsApi, checkIfPropertyExists } from "../apiCalls"
// import { RouterStore, syncHistoryWithStore } from ‘mobx-react-router’;
import { Redirect, Link } from 'react-router-dom';
import React from 'react'
import { zipCodes } from '../constants'

class GlobalStore {
  @observable title = 'nature office';
  @observable apiData = []
  @observable spots = []
  @observable loginError = ''
  @observable completedForm = false;
  @observable userName = ''
  @observable userEmail = ''
  @observable zipCode = ''
  @observable zipCodes = zipCodes
  @observable spotDetails = {}
  @observable loadingSpotDetailPics = false

  @action handleChange = (event) => {
    // this.loginError = ''
    this[event.target.name] = event.target.value
  }

  @action validateUser = (event) => {
    this.completedForm = false
    event.preventDefault()

    console.log('here')
    console.log(this.zipCode)

      // (!this.zipCodes.includes(this.zipCode)
    if (this.userName === '' || this.userEmail === '' || !this.zipCodes.includes(parseInt(this.zipCode))){
      this.loginError = 'Please fill all Inputs'
    } else {
      console.log('all inputs satisfied')
      this.loginError = ''
      this.completedForm = true;
      this.getSpots()
    }
  }

   @action getSpots = async () => {
  console.log('apicall made')
  const spotsApiData = await getSpotsApi()
  // .then(data=> console.log(data))
  spotsApiData.results.forEach(spot => {
    console.log(spot);

    this.spots.push(
      {
        name: spot.name,
        id: spot.id,
        address: spot.vicinity,
        rating: spot.rating,
        photo: getSpotPhoto(spot.photos[0].photo_reference, 500),
        coordinates: spot.geometry.location,
        placeId: spot.place_id,
        favorite: false
      }
    )
  })
  }

  @action toggleFavorite = (id) => {
    this.spots.forEach(spot => {
      (spot.id === id) && (spot.favorite = !spot.favorite)
    })
    if (this.spotDetails && this.spotDetails.id === id) {
      this.spotDetails.favorite = !this.spotDetails.favorite
    }
  }

  @action displaySpotDetails = async (id) => {
    this.loadingSpotDetailPics = true
    const spot = this.spots.find(item => item.id === id)
    const spotDetails = await getSpotDetailsApi(spot.placeId)
    const d = spotDetails.result
    const photoUrls = d.photos.map(photo => getSpotPhoto(photo.photo_reference, 3000))
    this.spotDetails = {
            name: spot.name,
            address: spot.address,
            rating: spot.rating,
            coordinates: spot.coordinates,
            favorite: spot.favorite,
            id: d.id,
            phone: d.formatted_phone_number,
            hours: checkIfPropertyExists(() => d.opening_hours.weekday_text),
            reviews: d.reviews,
            types: d.types,
            mapUrl: d.url,
            website: d.website,
            pictures: photoUrls,
            wifi: true,
            restroom: true,
          }
   this.loadingSpotDetailPics = false
  }
}

const store = new GlobalStore()
export default store