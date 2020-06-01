import React from 'react'
import { inject, observer } from 'mobx-react'
import GlobalStore from '../../store/GlobalStore'
import Loading from '../Loading/Loading'
import Search from '../Search/Search'
import Weather from '../Weather/Weather'

const LandingPage = inject('GlobalStore')(observer(() => {
  const topRated = GlobalStore.spots[0] // Hard coded until getTopRatedSpots() is created / implemented

  return !GlobalStore.spots.length || !GlobalStore.weatherTemp || !GlobalStore.weatherType  ?
    <Loading message="LOOKING OUTSIDE FOR WORK SPACES..."/> :
      <section className="landing-container">
        <Search />
        <Weather />
        <section className="spot-wrapper">
          <div className="spot-img-wrapper">
            <img
              className="spot-img"
              src={topRated.photo}
              alt="spot"
            />
          </div>
          <p className="category-title">TOP RATED</p>
        </section>
      </section>
}))

export default LandingPage
