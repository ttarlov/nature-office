import { observable, action, computed } from 'mobx'
import { getSpotsApi, getSpotPhoto } from "../apiCalls"
// import { RouterStore, syncHistoryWithStore } from ‘mobx-react-router’;
import { Redirect, Link } from 'react-router-dom';
import React from 'react'

class GlobalStore {
  @observable title = 'nature office';
  @observable apiData = [] 
  @observable spots = []
  @observable loginError = ''
  @observable completedForm = false;
  @observable userName = ''
  @observable userEmail = ''
  @observable zipCode = ''
  @observable zipCodes = [80201
,80202
,80203
,80204
,80205
,80210
,80211
,80212
,80216
,80217
,80218
,80222
,80226
,80227
,80228
,80206
,80207
,80208
,80209
,80214
,80215
,80219
,80220
,80221
,80223
,80224
,80225
,80229
,80232
,80233
,80230
,80231
,80234
,80236
,80247
,80248
,80249
,80256
,80257
,80259
,80261
,80262
,80266
,80271
,80235
,80237
,80238
,80239
,80243
,80244
,80246
,80250
,80251
,80252
,80260
,80263
,80264
,80265
,80273
,80274
,80279
,80280
,80281
,80290
,80291
,80293
,80294
,80295
,80299
,80294
,80295
,80299]


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