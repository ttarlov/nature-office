import React from 'react'
import { inject, observer } from 'mobx-react'

const LandingPage = inject('GlobalStore')(observer(() => {
    return (
        <section>
          <h2>Landing Page</h2>
        </section>
      )
}))

export default LandingPage