import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import GlobalStore from '../../store/GlobalStore'
import Weather from '../Weather/Weather'
import Loading from '../Loading/Loading'
import Search from '../Search/Search'

const LandingPage = inject('GlobalStore')(observer(() => {

  const filterTopRated = (e) => {
    let sortedByRating = [...GlobalStore.spots].sort((a, b) => b.rating - a.rating)
    GlobalStore.filteredSpots = sortedByRating.filter(spot => spot.rating >= 4.5)
    GlobalStore.filteredSpots.length === 0 && console.log('NO SPOTS RATED ABOVE 4.5');
  }

  const findRandomSpot = () => {
    let sortedSpots = [...GlobalStore.spots].sort(() => Math.random() - 0.5)
    return sortedSpots[0]
  }

  return !GlobalStore.spots.length || !GlobalStore.weatherTemp || !GlobalStore.weatherType  ?
    <Loading message="LOOKING OUTSIDE FOR WORK SPACES..."/> :
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
              <p className="category-title">Explore all spots in { GlobalStore.city }</p>
            </section>
          </Link>

          <Link to={'/topRated/'} onClick={filterTopRated}>
            <section className="spot-wrapper">
              <div className="spot-img-wrapper">
                <img
                  className="spot-img"
                  src={findRandomSpot().photo}
                  alt="spot"
                />
              </div>
              <p className="category-title">Top rated spots in { GlobalStore.city }</p>
            </section>
          </Link>
        </section>
      </React.Fragment>
}))

export default LandingPage
