import React from 'react'
import { inject, observer } from 'mobx-react'
import GlobalStore from '../../store/GlobalStore'
import { Redirect } from 'react-router-dom'


// inject('GlobalStore')
const Login = inject('GlobalStore')(observer((props) => {
  return (
    <section className="login-form-background">
      <div className="login-content">
          <h1 className="main-title">{GlobalStore.title}</h1>
          <h3 className="form-title">Find your outdoor office spot</h3>
        <form className="login-form" onSubmit = {(e)=> GlobalStore.validateUser(e)}>
          {
            GlobalStore.loginError
            && <p className="login-error">{GlobalStore.loginError}</p>
          }
          <div className="login-form-item">
            <label htmlFor="userName">Name</label>
            <input
              type="text"
              name="userName"
              placeholder="name"
              value={GlobalStore.userName}
              onChange={GlobalStore.handleChange}
            />
          </div>
          <div className="login-form-item">
            <label htmlFor="userEmail">Email</label>
            <input
              type="text"
              name="userEmail"
              placeholder="email"
              value={GlobalStore.userEmail}
              onChange={GlobalStore.handleChange}
            />
          </div>
          <div className="login-form-item">
            <label htmlFor="zipCode">Zip Code</label>
            <input
              type="text"
              name="zipCode"
              maxLength="5"
              placeholder="80202"
              value={GlobalStore.zipCode}
              onChange={GlobalStore.handleChange}
            />
          </div>
          <button className="login-btn">GO!</button>
        </form>
        {GlobalStore.isFormCompleted && <Redirect to="/landing" />}
      </div>
    </section>
  )
}))

export default Login
