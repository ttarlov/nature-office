import { observable, action, computed } from 'mobx'
import {
  getSpotsApi,
  getWeatherApi,
  getWoeid,
  getSpotDetailsApi,
  getNorrisJoke,
  getCoordinates,
  addNewSpotApi } from "../apiCalls"
import { Redirect, Link } from 'react-router-dom';
import React from 'react'
import {
  getSpotPhoto,
  checkIfStringExists,
  checkIfArrayExists
} from '../constants'
const stockPhoto = "/images/stockPhoto.jpg"
const chuckNorrisAddImage = "/images/chuckNorrisAddImage.png"

class GlobalStore {
  @observable title = 'nature office';
  @observable spots = []
  @observable loginError = ''
  @observable isFormCompleted = false;
  @observable userName = ''
  @observable userEmail = ''
  @observable zipCode = '80202'
  @observable spotDetails = {}
  @observable loadingSpotDetails = false
  @observable coordinates = {}
  @observable newSpotName = ''
  @observable newSpotAddress = ''
  @observable newSpotImages = ''
  @observable newSpotRating = ''
  @observable newSpotZipCode = ''
  @observable weatherType = ''
  @observable weatherTemp = ''
  @observable commentUserName = ''
  @observable commentMessage = ''
  @observable newSpotFormCompleted = false
  @observable filteredSearch = null
  @observable filteredTopRated = null
  @observable city = ''

  @action handleChange = (event) => {
    this[event.target.name] = event.target.value
    this.zipCode = this.zipCode.replace(/[^0-9]/, '')
    this.newSpotZipCode = this.newSpotZipCode.replace(/[^0-9]/, '')
    this.newSpotRating = this.newSpotRating.replace(/[^12345]/, '')
  }

  @action  addDefaultSrc(ev){
    ev.target.src = chuckNorrisAddImage
  }

  @action addNewSpot = async (event) => {
    event.preventDefault();
    if (this.newSpotName === '' || this.newSpotAddress === '' ||
    this.newSpotZipCode.length !== 5 || this.newSpotRating.length !== 1) {
      this.loginError = 'Please fill all Inputs'
      return
    } else {
        this.loginError = ''
        let photos = this.newSpotImages.split(',')
        const newSpotResults = await addNewSpotApi(+this.newSpotZipCode, this.newSpotName)
        if(!newSpotResults.length || !newSpotResults[0].types.includes('establishment')){
          this.loginError = 'Please enter a valid Spot'
          return
        }
        this.spots.unshift({
          name: this.newSpotName,
          id: Date.now(),
          address: this.newSpotAddress,
          rating: this.newSpotRating,
          photo: photos[0],
          photos: photos,
          coordinates: newSpotResults[0].geometry.location,
          placeId: newSpotResults[0].place_id,
          favorite: true
        })
        // console.log('this.spots', this.spots);
        this.resetInputs()
        this.newSpotFormCompleted = true;
    }
  }

  @action resetInputs = () => {
    this.newSpotName = ''
    this.newSpotAddress = ''
    this.newSpotImages = ''
    this.newSpotRating = ''
    this.newSpotZipCode = ''
  }

  @action validateUser = (event) => {
    this.isFormCompleted = false
    event.preventDefault()
    if (this.userName === '' || this.userEmail === '' || (this.zipCode.length !== 5) ) {
      this.loginError = 'Please fill all Inputs'
    } else {
      this.loginError = ''
      this.isFormCompleted = true;
      this.getCoordinatesFromZip(+this.zipCode)
    }
  }

  @action getCoordinatesFromZip = async (zipCode) =>{
    const coordinates = await getCoordinates(zipCode)
    // console.log(coordinates)
    // console.log(coordinates[0].geometry.location)
    this.coordinates = coordinates[0].geometry.location
    this.getSpots()
    this.getWeather()
    getNorrisJoke()
  }

  @action getSpots = async () => {
    const spotsApiData = await getSpotsApi(this.coordinates)
    let photo
    spotsApiData.results.forEach(spot => {
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
          favorite: false,
          reviews: []
        }
      )
    })
  }

  @action getWhereOnEarthId = async () => {
    const woeidData = await getWoeid(this.coordinates);
    return woeidData[0].woeid;
  }

  @action getWeather = async () => {
    const woeid = await this.getWhereOnEarthId();
    const weatherApiData = await getWeatherApi(woeid);
    this.weatherType = weatherApiData.consolidated_weather[0].weather_state_name;
    this.weatherTemp = weatherApiData.consolidated_weather[0].the_temp;
    this.city = weatherApiData.title;
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
    window.scrollTo(0, 0);
    this.loadingSpotDetails = true
    const spot = this.spots.find(item => item.id === id)
    const spotDetails = await getSpotDetailsApi(spot.placeId)
    const d = spotDetails.result
    let photoUrls
    if (d.photos){
      photoUrls = d.photos.map(photo => getSpotPhoto(photo.photo_reference, 3000))
    } else { photoUrls = spot.photos}
        this.spotDetails = {
          name: spot.name,
          address: spot.address,
          rating: spot.rating,
          coordinates: spot.coordinates,
          favorite: spot.favorite,
          id: d.id,
          phone: d.formatted_phone_number || undefined,
          hours: checkIfArrayExists(() => d.opening_hours.weekday_text),
          reviews: d.reviews.concat(spot.reviews) || undefined,
          types: d.types,
          mapUrl: d.url || undefined,
          website: d.website || undefined,
          pictures: photoUrls,
          wifi: true,
          power: false,
        }
    this.loadingSpotDetails = false
  }

  @action clearStore = () => {
    this.spots = []
    this.loginError = ''
    this.isFormCompleted = false;
    this.userName = ''
    this.userEmail = ''
    this.zipCode = ''
    this.spotDetails = {}
    this.coordinates = {}
    this.weatherType = ''
    this.weatherTemp = ''
    this.city = ''
    this.filteredSpots = null
  }

  @action postComment = (event, id) => {
    event.preventDefault();
    if (this.commentUserName !== '' && this.commentMessage !== '') {
      this.loginError = ''
      const comment = {
        relative_time_description: 'Now',
        author_name: this.commentUserName,
        text: this.commentMessage,
        time: Date.now()/1000
      }
      this.spotDetails.reviews.push(comment)
      this.spots.forEach(spot => {
        (spot.id === id) && (spot.reviews.push(comment))
      })
      this.commentUserName = ''
      this.commentMessage = ''
    } else if (this.commentUserName === '') {
        this.loginError = 'Please enter your name'
    } else if (this.commentMessage === '') {
        this.loginError = 'Please enter your comment'
      }
  }
}

const store = new GlobalStore()
export default store
