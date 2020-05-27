import React from 'react'
import './App.scss'
import Map from '../Map/Map'
import Login from '../Login/Login'
import LandingPage from '../LandingPage/LandingPage'
import Nav from '../Nav/Nav'
import Search from '../Search/Search'
import SpotContainer from '../SpotContainer/SpotContainer'
import SpotDetails from '../SpotDetails/SpotDetails'
import UserPage from '../UserPage/UserPage'
import { inject, observer } from 'mobx-react'
import { Route, Redirect, Switch } from 'react-router-dom'


const App = inject('GlobalStore')(observer(() => {
  return (
    <section className="App">
      <Login/>
      <LandingPage/>
      <Map/>
      <Nav/>
      <Search/>
      <SpotContainer/>
      <SpotDetails/>
      <UserPage/>
    </section>
  )
}))

export default App
