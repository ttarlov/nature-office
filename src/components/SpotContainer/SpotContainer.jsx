import React from 'react'
import { inject, observer } from 'mobx-react'
import GlobalStore from '../../store/GlobalStore'
import Spot from '../Spot/Spot'

const SpotContainer = inject('GlobalStore')(observer((props) => {
  // UNCOMMENT WHEN ROUTING IS DONE
  // const spots = GlobalStore.spots.map(spot => {
  //   return <Spot 
  //             spot={spot}
  //             key={spot.id}
  //           />
  // })
    return (
        <section className="spot-container">
          {/* { spots } */}
          <Spot />
          <Spot />
          <Spot />
          <Spot />
          <Spot />
          <Spot />
          <Spot />
        </section>
      )
}))

export default SpotContainer