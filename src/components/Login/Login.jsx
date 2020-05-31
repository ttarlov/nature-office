import React from 'react'
import { inject, observer } from 'mobx-react'
import GlobalStore from '../../store/GlobalStore'
import { Link, Redirect } from 'react-router-dom'
import homePageBackground from "./homePageBackground.jpg"


const Login = inject('GlobalStore')(observer((props) => {
  console.log('isFormCompleted', GlobalStore.isFormCompleted)
    return (

      <section className="login-form-background">

    <div className="login-title">
      <h2>{GlobalStore.title}</h2>
      <h3 className="form-title">Find your outdoor office spot</h3>
      </div>
      <section className="login-form-container">
      <form className="login-form">
      {GlobalStore.loginError &&
        <p className="">{GlobalStore.loginError}
        </p>}
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
            type="number"
            name="zipCode"
            placeholder="80202"
            value={GlobalStore.zipCode}
            onChange={GlobalStore.handleChange}
          />
          <button className="login-btn" onClick={GlobalStore.validateUser}>
          Go!</button>
          </form>
          {GlobalStore.isFormCompleted && <Redirect to="/landing" />}

        </section>
        </section>
      )
}))

export default Login
