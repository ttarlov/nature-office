import React from 'react'
import { inject, observer } from 'mobx-react'
import GlobalStore from '../../store/GlobalStore'
import Spot from '../Spot/Spot'

const SpotContainer = inject('GlobalStore')(observer((props) => {
  const spots = GlobalStore.spots.map(spot => {
    return <Spot
              spot={spot}
              id={spot.id}
              key={spot.id}
            />
  })
    return (
        <section className="spot-container">
          { spots }
        </section>
      )
}))

export default SpotContainer