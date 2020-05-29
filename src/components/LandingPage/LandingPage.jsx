import React from 'react'
import { inject, observer } from 'mobx-react'
import GlobalStore from '../../store/GlobalStore'

const LandingPage = inject('GlobalStore')(observer((props) => {
  console.log('landingPage', GlobalStore)
    return (
        <section>
          <h2>Landing Page</h2>
        </section>
      )
}))

export default LandingPage