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
import { getSpots } from '../../apiCalls'

import UserPage from '../UserPage/UserPage'
import { inject, observer } from 'mobx-react'
import { Route, Redirect, Switch } from 'react-router-dom'

@inject('GlobalStore')
// @inject('routing')
@observer
class App extends Component{
  render() {
    return (
      <section className="app-container">
        <Switch>
        <Route
          exact path='/' render={ () =>
            <Login />
          }
        />

        <Route
          path='/landing' render={ () =>
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
        </Switch>

        <Nav />
      </section>
    )
  }
}

export default App
