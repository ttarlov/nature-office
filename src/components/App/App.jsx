import React, { Component } from 'react'
import './App.scss'
import Map from '../Map/Map'
import Login from '../Login/Login'
import LandingPage from '../LandingPage/LandingPage'
import Nav from '../Nav/Nav'
import Search from '../Search/Search'
import SpotContainer from '../SpotContainer/SpotContainer'
import SpotDetails from '../SpotDetails/SpotDetails'
import AddNewSpot from '../AddNewSpot/AddNewSpot'
import { apiCalls } from '../../apiCalls'

import UserPage from '../UserPage/UserPage'
import { inject, observer } from 'mobx-react'
import { Route, Redirect, Switch } from 'react-router-dom'

@inject('GlobalStore')
@observer
class App extends Component{
  constructor() {
    super();

  }
  componentDidMount() {
    apiCalls()

  }

  render() {
    return (
      <section className="App">
        <Route
          exact path='/' render={ () =>
            <Login />
          }
        />

        <Route
          exact path='/landing' render={ () =>
            <>
              <Search />
              <LandingPage />
            </>
          }
        />

        <Route
          exact path='/spotContainer' render={ () =>
            <SpotContainer />
          }
        />

        <Route
          exact path='/spotDetails' render={ () =>
            <SpotDetails />
          }
        />

        <Route
          exact path='/userPage' render={ () =>
            <UserPage />
          }
        />

        <Route
          exact path='/addNewSpot' render={ () =>
            <AddNewSpot />
          }
        />

        <Nav />
      </section>
    )
  }
}

export default App
