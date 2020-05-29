import React from 'react'
import { inject, observer } from 'mobx-react'
import GlobalStore from '../../store/GlobalStore'

const LandingPage = inject('GlobalStore')(observer((props) => {
  console.log('landingPage', GlobalStore.spots[0])
    return (
        <section>
          <h2>HI</h2>
          {/* <h2>{GlobalStore.spots[0].name}</h2> */}
        </section>
      )
}))

export default LandingPage