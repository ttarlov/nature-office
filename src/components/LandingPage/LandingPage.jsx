import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import GlobalStore from '../../store/GlobalStore'
import Weather from '../Weather/Weather'
import Loading from '../Loading/Loading'
import Search from '../Search/Search'

const LandingPage = inject('GlobalStore')(observer(() => {
  const allSpots = [...GlobalStore.spots]

  const findRandomSpot = () => {
    let sortedSpots = allSpots.sort(() => Math.random() - 0.5)
    return sortedSpots[0]
  }

  return !GlobalStore.spots.length || !GlobalStore.weatherTemp || !GlobalStore.weatherType  ?
    <Loading /> :
      <React.Fragment>
      <div className="weather">
        <Weather/>
      </div>
      <section className="landing-container">
        <Search />
        <Link to={'/spotContainer/'}>
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
        </Link>
        <Link to={'/spotContainer/'}>
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
        </Link>
      </section>
      </React.Fragment>
}))

export default LandingPage
