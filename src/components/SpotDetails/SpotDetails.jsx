import React from 'react'
import { inject, observer } from 'mobx-react'

const SpotDetails = inject('GlobalStore')(observer(() => {
    return (
        <section>
          <h2>SpotDetails</h2>
        </section>
      )
}))

export default SpotDetails