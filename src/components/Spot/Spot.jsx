import React from 'react'
import { inject, observer } from 'mobx-react'

const Spot = inject('GlobalStore')(observer(() => {
    return (
        <section>
          <h2>Spot</h2>
        </section>
      )
}))

export default Spot