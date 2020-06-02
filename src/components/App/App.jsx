import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Map from '../Map/Map';
import Login from '../Login/Login';
import LandingPage from '../LandingPage/LandingPage';
import Nav from '../Nav/Nav';
import SpotContainer from '../SpotContainer/SpotContainer';
import SpotDetails from '../SpotDetails/SpotDetails';
import AddNewSpot from '../AddNewSpot/AddNewSpot';
import GlobalStore from '../../store/GlobalStore';
import UserPage from '../UserPage/UserPage';
import Error from '../Error/Error.jsx';

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
              title={`All Spots in ${GlobalStore.city}, ${GlobalStore.zipCode}`}
              spots={GlobalStore.spots}
            />
          } />

          <Route exact path='/searchResults' render={ () =>
            <SpotContainer
              title={'Search Results'}
              spots={GlobalStore.filteredSpots}
            />
          } />

          <Route exact path='/topRated' render={ () =>
            <SpotContainer
              title={`Top Rated Spots in ${GlobalStore.city}, ${GlobalStore.zipCode}`}
              spots={GlobalStore.filteredSpots}
            />
          } />

          <Route exact path='/favorites' render={ () =>
            <SpotContainer
              title={'Favorites'}
              spots={GlobalStore.spots}
            />
          } />

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
