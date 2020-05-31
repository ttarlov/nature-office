import React from 'react'
import { inject, observer } from 'mobx-react'
import GlobalStore from '../../store/GlobalStore'
import Loading from '../Loading/Loading'
import Weather from '../Weather/Weather'
import Search from '../Search/Search'

const LandingPage = inject('GlobalStore')(observer(() => {
  const topRated = GlobalStore.spots[0] // Hard coded until getTopRatedSpots() is created / implemented


  if (!GlobalStore.spots.length || !GlobalStore.weatherTemp || !GlobalStore.weatherType) {
    return <Loading />
  } else {

    return (
      <section className="landing-container">
        <Search />
        <Weather />

        <img src={topRated.photo} alt="spot" />




      </section>
    )

  }
}))

export default LandingPage
