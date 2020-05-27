import React from 'react'
import { inject, observer } from 'mobx-react'
import Spot from '../Spot/Spot'

const SpotContainer = inject('GlobalStore')(observer(() => {
    return (
        <section>
         Spot Container
          <Spot />
        </section>
      )
}))

export default SpotContainer