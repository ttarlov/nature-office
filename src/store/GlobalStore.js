import { observable, action, computed } from 'mobx'
import {
  getSpotsApi,
  getSpotDetailsApi,
  checkIfPropertyExists,
  getNorrisJoke,
  getCoordinates } from "../apiCalls"
import { Redirect, Link } from 'react-router-dom';
import React from 'react'
import { zipCodes, getSpotPhoto } from '../constants'
const stockPhoto = "/images/stockPhoto.jpg"



class GlobalStore {
  @observable title = 'nature office';
  @observable apiData = []
  @observable spots = []
  @observable loginError = ''
  @observable isFormCompleted = false;
  @observable userName = ''
  @observable userEmail = ''
  @observable zipCode = '80202'
  @observable zipCodes = zipCodes
  @observable spotDetails = {}
  @observable loadingSpotDetailPics = false
  @observable joke = ''
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
      this.errorJoke()
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
  }


  @action errorJoke = async () => {
    const joke = await getNorrisJoke()
    this.joke = joke;

  }

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
       photo = getSpotPhoto(spot.photos[0].photo_reference, 500)
    }
    this.spots.push(
      {
        name: spot.name,
        id: spot.id,
        address: spot.vicinity,
        rating: spot.rating,
        photo: photo,
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
            power: false,
          }
   this.loadingSpotDetailPics = false
  }
}

const store = new GlobalStore()
export default store
