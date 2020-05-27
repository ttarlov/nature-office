import React from 'react'
import { inject, observer } from 'mobx-react'

const Login = inject('GlobalStore')(observer(() => {
    return (
        <section>
          <h2>Login</h2>
        </section>
      )
}))

export default Login