import React from 'react'
import { inject, observer } from 'mobx-react'
import GlobalStore from '../../store/GlobalStore'
import { Link, Redirect } from 'react-router-dom'


const Login = inject('GlobalStore')(observer((props) => {
  console.log('isFormCompleted', GlobalStore.isFormCompleted)
    return (
        <section>
          <h2>{GlobalStore.title}</h2>
          <form onSubmit = {(e)=> GlobalStore.validateUser(e)}>
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
          <button type="submit" className="login-btn" >Login</button>
          </form>
        {GlobalStore.isFormCompleted && <Redirect to="/landing" />}
          {GlobalStore.loginError &&
           <p>
             {GlobalStore.loginError}
           </p>}
        </section>
      )
}))

export default Login
