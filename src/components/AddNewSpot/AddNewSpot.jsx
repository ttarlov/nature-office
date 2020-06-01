import React from 'react'
import GlobalStore from '../../store/GlobalStore'
import { inject, observer } from 'mobx-react'

const AddNewSpot = inject('GlobalStore')(observer(() => {
//   this.state = {
//     name: '',
//     date: '',
//     time: '',
//     number: ''
//   }
// }
//
// handleChange = (event) => {
//   const { name, value } = event.target
//   this.setState({
//     [name]: value
//   })
//   // this.setState({ [e.target.name]: e.target.value})
// }
//
// submitReservation = (event) => {
//   event.preventDefault();
//   const { addReservation } = this.props;
//   console.log(this.state.guests)
//   const newReservation = { ...this.state, id: Date.now()};
//   addReservation(newReservation);
//   this.resetInputs();
// }
//
// resetInputs = () => {
//   this.setState({
//     name: '',
//     date: '',
//     time: '',
//     number: ''
//   })
// }


// {
//   // name: spot.name,
//   id: spot.id,
//   // address: spot.vicinity,
//   rating: spot.rating,
//   photo: photo,
//   coordinates: spot.geometry.location,
//   // placeId: spot.place_id,
//   favorite: false
// }
console.log(GlobalStore.newSpotRating);
  return (
    <section className="add-new-spot-form-background">
    <h2>Add a new spot!</h2>
    <section className="add-new-spot-form-container">
    <form className="add-new-spot-form">
    <input
      type='text'
      placeholder='new spot name'
      value={GlobalStore.newSpotName}
      name='newSpotName'
      onChange={GlobalStore.handleChange}
    />
      <input
        type='text'
        placeholder='address'
        value={GlobalStore.newSpotAddress}
        name='newSpotAddress'
        onChange={GlobalStore.handleChange}
      />
      <input
        type='text'
        placeholder='zip code'
        maxlength='5'
        value={GlobalStore.newSpotZipCode}
        name='newSpotZipCode'
        onChange={GlobalStore.handleChange}
      />
      <input
        type='text'
        maxlength='1'
        placeholder='rating(1-5)'
        value={GlobalStore.newSpotRating}
        name='newSpotRating'
        onChange={GlobalStore.handleChange}
      />

      <input
        type= 'text'
        placeholder='image links'
        value={GlobalStore.newSpotImages}
        name='newSpotImages'
        onChange={GlobalStore.handleChange}
      />
        <label htmlFor="userName">(separate multiple images by comma)</label>
      <button
        onClick={GlobalStore.addNewSpot}
      >
        Upload New Spot!
      </button>
    </form>
    </section>

    </section>
      )
}))

export default AddNewSpot
