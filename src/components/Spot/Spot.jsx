import React from 'react'
import { inject, observer } from 'mobx-react'

const Spot = inject('GlobalStore')(observer((props) => {
    return (
        <section className="spot-wrapper">
          <div className="img-wrapper">
            <button className="favorite-btn">{'\u2764'}</button>
            <img
              className="spot-img"
              src="https://images.unsplash.com/photo-1568380893557-3fc59fd902ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt="spot"
            />
          </div>
        </section>
      )
}))

export default Spot