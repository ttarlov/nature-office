import React from 'react'
import { inject, observer } from 'mobx-react'
import GlobalStore from '../../store/GlobalStore'
import Loading from '../Loading/Loading'
import Search from '../Search/Search'
import Weather from '../Weather/Weather'

const LandingPage = inject('GlobalStore')(observer(() => {
  const allSpots = [...GlobalStore.spots]

  const findRandomSpot = () => {
    let sortedSpots = allSpots.sort(() => Math.random() - 0.5)
    return sortedSpots[0]
  }

  return !GlobalStore.spots.length || !GlobalStore.weatherTemp || !GlobalStore.weatherType  ?
    <Loading /> :
      <section className="landing-container">
        <Search />
        <Weather />
        <section className="spot-wrapper">
          <div className="spot-img-wrapper">
            <img
              className="spot-img"
              src={findRandomSpot().photo}
              alt="spot"
            />
          </div>
          <p className="category-title">ALL SPOTS</p>
        </section>
        <section className="spot-wrapper">
          <div className="spot-img-wrapper">
            <img
              className="spot-img"
              src={findRandomSpot().photo}
              alt="spot"
            />
          </div>
          <p className="category-title">TOP SPOTS</p>
        </section>
      </section>
}))

export default LandingPage
