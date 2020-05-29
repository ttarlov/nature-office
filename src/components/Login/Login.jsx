import React from 'react'
import { inject, observer } from 'mobx-react'
import GlobalStore from '../../store/GlobalStore'


const Login = inject('GlobalStore')(observer((props) => {
    return (
        <section>
          <h2>{GlobalStore.title}</h2>
          <button className="login-btn" onClick={GlobalStore.getSpots}>Login BTN</button>
        </section>
      )
}))

export default Login