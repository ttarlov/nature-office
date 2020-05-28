import React from 'react'
import { inject, observer } from 'mobx-react'

const AddNewSpot = inject('GlobalStore')(observer(() => {
    return (
        <section>
          <h2>AddNewSpot</h2>
        </section>
      )
}))

export default AddNewSpot
