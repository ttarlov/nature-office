import { observable, action, computed } from 'mobx'
import { getSpotsApi, getNorrisJoke, getCoordinates } from "../apiCalls"
// import { RouterStore, syncHistoryWithStore } from ‘mobx-react-router’;
import { Redirect, Link } from 'react-router-dom';
import React from 'react'
import { zipCodes, getSpotPhoto } from '../constants'
const stockPhoto = "/images/stockPhoto.jpg"
// import rino from "../../images/RiNo.png";


class GlobalStore {
  @observable title = 'nature office';
  @observable apiData = []
  @observable spots = []
  @observable loginError = ''
  @observable isFormCompleted = false;
  @observable userName = ''
  @observable userEmail = ''
  @observable zipCode = ''
  @observable zipCodes = zipCodes
  @observable coordinates = {}

  @action handleChange = (event) => {
    // this.loginError = ''
    this[event.target.name] = event.target.value
  }

  @action validateUser = (event) => {
    
    this.isFormCompleted = false
    event.preventDefault()

    console.log('here')
    console.log(this.zipCode)
    // !this.zipCodes.includes(parseInt(this.zipCode))
      // (!this.zipCodes.length)
    if (this.userName === '' || this.userEmail === '' || (this.zipCode.length !== 5) ){
      this.loginError = 'Please fill all Inputs'
    } else {
      console.log('all inputs satisfied')
      this.loginError = ''
      this.isFormCompleted = true;
      this.getCoordinatesFromZip(+this.zipCode)
      // this.getSpots()
      // this.errorJoke()
    }
  }

  @action getCoordinatesFromZip = async (zipCode) =>{
    const coordinates = await getCoordinates(zipCode)
    console.log(coordinates)
    console.log(coordinates[0].geometry.location)
    this.coordinates = coordinates[0].geometry.location
    // this.lat = coordinates.results[0].location.lat
    // this.long = coordinates.results[0].location.long
    console.log('coordinates', this.coordinates);
    this.getSpots()
    getNorrisJoke()
  }

  
  // @action generateErrorJoke = async () => {
  //   const joke = await getNorrisJoke()
  

  // // }

   @action getSpots = async () => {
  console.log('apicall made')
  const spotsApiData = await getSpotsApi(this.coordinates)
  // .then(data=> console.log(data))
  let photo
  spotsApiData.results.forEach(spot => {
    console.log(spot);
    if (spot.photos === undefined){
       photo = stockPhoto
    } else {
       photo = getSpotPhoto(spot.photos[0].photo_reference)
    }
    this.spots.push(
      {
        name: spot.name,
        id: spot.id,
        address: spot.vicinity,
        rating: spot.rating,
        photo: photo,
        // photo: getSpotPhoto(spot.photos[0].photo_reference),
        coordinates: spot.geometry.location,
        // open: spot.opening_hours.open_now || false,
        wifi: true,
        restroom: true,
        comments:["great spot"],
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
  }
}

const store = new GlobalStore()
export default store

// spot.photos[0].photo_reference
