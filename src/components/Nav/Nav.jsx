import React from 'react'
import { inject, observer } from 'mobx-react'

const Nav = inject('GlobalStore')(observer(() => {
    return (
        <section>
          <h2>Nav</h2>
        </section>
      )
}))

export default Nav