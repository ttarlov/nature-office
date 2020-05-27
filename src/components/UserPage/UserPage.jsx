import React from 'react'
import { inject, observer } from 'mobx-react'

const UserPage = inject('GlobalStore')(observer(() => {
    return (
        <section>
          <h2>UserPage</h2>
        </section>
      )
}))

export default UserPage