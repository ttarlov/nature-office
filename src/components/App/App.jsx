import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Route, Switch, Redirect } from 'react-router-dom'
import GlobalStore from '../../store/GlobalStore'
import Login from '../Login/Login'
import Nav from '../Nav/Nav'
import SpotContainer from '../SpotContainer/SpotContainer'
import LandingPage from '../LandingPage/LandingPage'
import Favorites from '../Favorites/Favorites'
// import Map from '../Map/Map'
import SpotDetails from '../SpotDetails/SpotDetails'
import AddNewSpot from '../AddNewSpot/AddNewSpot'
import UserPage from '../UserPage/UserPage'
import Error from '../Error/Error.jsx'

@inject('GlobalStore')
@observer
class App extends Component {
  render() {
    return (
      <section className="app-container">
        <Switch>
          <Route
            exact path='/' render={ () => <Login /> }
          />

          {
            GlobalStore.isFormCompleted
            ? <Route exact path='/landing' render={ () => <LandingPage /> } />
            : <Redirect to="/" exact />
          }

          <Route exact path='/spotContainer' render={ () =>
            <SpotContainer
              title={'All Work Spaces'}
              spots={GlobalStore.spots}
            />
          } />

          <Route exact path='/searchResults' render={ () =>
            <SpotContainer
              title={'Search Results'}
              spots={GlobalStore.filteredSearch}
            />
          } />

          <Route exact path='/topRated' render={ () =>
            <SpotContainer
              title={'Top Rated Work Spaces'}
              spots={GlobalStore.filteredTopRated}
            />
          } />

          <Route
            exact path='/favorites' render={ () => <Favorites /> }
          />

          <Route
            exact path='/spotDetails/:name' render={ () => <SpotDetails /> }
          />

          <Route
            exact path='/userPage' render={ () => <UserPage /> }
          />

          <Route
            exact path='/addNewSpot' render={ () => <AddNewSpot /> }
          />

          <Route path='*' render ={ () => <Error /> } />
        </Switch>
        {GlobalStore.spots.length > 0 && <Nav/>}
      </section>
    )
  }
}

export default App
