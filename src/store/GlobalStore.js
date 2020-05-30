import { observable, action, computed } from 'mobx'
import { getSpotsApi, getNorrisJoke } from "../apiCalls"
// import { RouterStore, syncHistoryWithStore } from ‘mobx-react-router’;
import { Redirect, Link } from 'react-router-dom';
import React from 'react'
import { zipCodes, getSpotPhoto } from '../constants'


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
  @observable joke = ''

  @action handleChange = (event) => {
    // this.loginError = ''
    this[event.target.name] = event.target.value
  }

  @action validateUser = (event) => {
    this.isFormCompleted = false
    event.preventDefault()
    
    console.log('here')
    console.log(this.zipCode)

      // (!this.zipCodes.includes(this.zipCode)
    if (this.userName === '' || this.userEmail === '' || !this.zipCodes.includes(parseInt(this.zipCode))){
      this.loginError = 'Please fill all Inputs'
    } else {
      console.log('all inputs satisfied')
      this.loginError = ''
      this.isFormCompleted = true;
      this.getSpots()
      this.errorJoke()
    }
  }

  @action errorJoke = async () => {
    const joke = await getNorrisJoke()
    this.joke = joke;
    
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
        photo: getSpotPhoto(spot.photos[0].photo_reference),
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