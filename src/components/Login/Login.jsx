import React from 'react'
import { inject, observer } from 'mobx-react'
import GlobalStore from '../../store/GlobalStore'
import { Redirect } from 'react-router-dom'


// inject('GlobalStore')
const Login = inject('GlobalStore')(observer((props) => {
  // console.log('isFormCompleted', GlobalStore.isFormCompleted)
  return (
    <section className="login-form-background">
      <div className="login-title">
        <h2>{GlobalStore.title}</h2>
        <h3 className="form-title">Find your outdoor office spot</h3>
      </div>
      <section className="login-form-container">
        <form className="login-form" onSubmit = {(e)=> GlobalStore.validateUser(e)}>

          {
            GlobalStore.loginError
            && <p className="login-error">{GlobalStore.loginError}</p>
          }

          <label htmlFor="userName">Name</label>
          <input
            type="text"
            name="userName"
            placeholder="name"
            value={GlobalStore.userName}
            onChange={GlobalStore.handleChange}
          />
          <label htmlFor="userEmail">Email</label>
          <input
            type="text"
            name="userEmail"
            placeholder="email"
            value={GlobalStore.userEmail}
            onChange={GlobalStore.handleChange}
          />
          <label htmlFor="zipCode">Zip Code</label>
          <input
            type="text"
            name="zipCode"
            maxLength="5"
            placeholder="80202"
            value={GlobalStore.zipCode}
            onChange={GlobalStore.handleChange}
          />
          <button className="login-btn">Go!</button>
        </form>
        {GlobalStore.isFormCompleted && <Redirect to="/landing" />}
      </section>
    </section>
  )
}))

export default Login
