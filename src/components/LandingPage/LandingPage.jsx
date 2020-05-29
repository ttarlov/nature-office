import React from 'react'
import { inject, observer } from 'mobx-react'
import GlobalStore from '../../store/GlobalStore'

const LandingPage = inject('GlobalStore')(observer((props) => {
  console.log('landingPage', GlobalStore)
    if(!GlobalStore.spots.length) {
      return <div>Text</div>
    } else {
      return (
          <section>
            <h2>HI</h2>
            <img src={GlobalStore.spots[0].photo} alt="spot"></img>
            <h2>{GlobalStore.spots[0].name}</h2>
          </section>
        )
    }

}))

export default LandingPage