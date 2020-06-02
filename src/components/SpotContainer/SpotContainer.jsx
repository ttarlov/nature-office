import React from 'react'
import { inject, observer } from 'mobx-react'
import GlobalStore from '../../store/GlobalStore'
import Spot from '../Spot/Spot'

const SpotContainer = inject('GlobalStore')(observer((props) => {
  GlobalStore.newSpotFormCompleted = false;

  const spots = props.spots.map(spot =>
    <Spot
      spot={spot}
      id={spot.id}
      key={spot.id}
    />
  )

  return (
    <React.Fragment>
      {window.scrollTo(0, 0)}
      <header className="title-container">
        <h1 className="location-title">{GlobalStore.city}, {GlobalStore.zipCode}</h1>
        <h1 className="title">{props.title}</h1>
      </header>
      <section className="spot-container">
        {spots}
      </section>
    </React.Fragment>
  )
}))

export default SpotContainer
