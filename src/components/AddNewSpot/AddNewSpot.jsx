import React from 'react'
import GlobalStore from '../../store/GlobalStore'
import { inject, observer } from 'mobx-react'
import { Link, Redirect } from 'react-router-dom'

const AddNewSpot = inject('GlobalStore')(observer(() => {

  return (
    !GlobalStore.newSpotFormCompleted ?
    <section className="add-new-spot-form-background">
    <div className="add-new-spot-content">
      <h2 className="add-new-spot-title">Add a new spot!</h2>

      <form className="add-new-spot-form">
      {GlobalStore.loginError &&
        <p className="add-spot-error">{GlobalStore.loginError}
        </p>}
        <div className="add-form-item">
          <label htmlFor="spotName">Name of Spot* (ex: Piney Creek Park)</label>
          <input
            type='text'
            placeholder='new spot name'
            value={GlobalStore.newSpotName}
            name='newSpotName'
            onChange={GlobalStore.handleChange}
          />
        </div>
        <div className="add-form-item">
          <label htmlFor="address">Address* (if no exact address: city, state)</label>
          <input
            type='text'
            placeholder='address'
            value={GlobalStore.newSpotAddress}
            name='newSpotAddress'
            onChange={GlobalStore.handleChange}
          />
        </div>
        <div className="add-form-item">
          <label htmlFor="zipCode">Zip Code*</label>
          <input
            type='text'
            placeholder='zip code'
            maxLength='5'
            value={GlobalStore.newSpotZipCode}
            name='newSpotZipCode'
            onChange={GlobalStore.handleChange}
          />
        </div>
        <div className="add-form-item">
          <label htmlFor="rating">Rating*</label>
          <input
            type='text'
            maxLength='1'
            placeholder='rating(1-5)'
            value={GlobalStore.newSpotRating}
            name='newSpotRating'
            onChange={GlobalStore.handleChange}
          />
        </div>
        <div className="add-form-item">
          <input
            type= 'text'
            placeholder='image links (optional)'
            value={GlobalStore.newSpotImages}
            name='newSpotImages'
            onChange={GlobalStore.handleChange}
          />
          <label htmlFor="commaLink">(separate multiple image links by comma)</label>
        </div>
        <button className="add-new-spot-button"
          onClick={GlobalStore.addNewSpot}
        >
          Upload New Spot!
        </button>
        <label className="required" htmlFor="userName">* required </label>
      </form>
    </div>
    </section> :
    <div className="add-new-spot-form-background">
      <div className="new-spot-added">
        <h2 className="add-new-spot-title">New Spot Added!</h2>
        <Link to="/spotContainer">
        <button className="new-spot-added-button">
        Back to All Spots
        </button>
        </Link>
      </div>
    </div>
      )
}))

export default AddNewSpot
