import React from 'react'
import { inject, observer } from 'mobx-react'
import GlobalStore from '../../store/GlobalStore'
import Loading from '../Loading/Loading'
import Weather from '../Weather/Weather'
import Search from '../Search/Search'

const LandingPage = inject('GlobalStore')(observer(() => {
  if (!GlobalStore.spots.length || !GlobalStore.weatherTemp || !GlobalStore.weatherType) {
    return <Loading />
  } else {

    return (
      <section className="landing-page">
        <h2>LANDING PAGE</h2>
        <img src={GlobalStore.spots[0].photo} alt="spot" width="20px"></img>
        <h2>{GlobalStore.spots[0].name}</h2>
      </section>
    )

  }
}))

export default LandingPage
