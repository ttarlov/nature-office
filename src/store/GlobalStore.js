import { observable, action, computed } from 'mobx'
import { getSpotsApi, getSpotPhoto } from "../apiCalls"

class GlobalStore {
  @observable title = 'nature office'
  @observable spots = []

  @action getSpots = ()=> {
  getSpotsApi()
  .then(data => data.results.forEach(spot => {
    this.spots.push(
      {
        name: spot.name,
        id: spot.id,
        address: spot.vicinity,
        rating: spot.rating,
        // photo: getSpotPhoto(spot.photos[0].photo_reference).then(data => data),
        photoRef: spot.photos[0].photo_reference,
        coordinates: spot.geometry.location,
        open: spot.opening_hours.open_now,
        wifi: true,
        restroom: true,
        comments:["great spot"],
        placeId: spot.place_id
      }
    )
  }))
  .catch(error => console.error(error))
  }
}

const store = new GlobalStore()
export default store