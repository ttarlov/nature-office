import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import GlobalStore from '../../store/GlobalStore'
import MdPerson from 'react-ionicons/lib/MdPerson'
import SpotContainer from '../SpotContainer/SpotContainer';

const UserPage = inject('GlobalStore')(observer(() => {
  const {
    userName,
    userEmail
  } = GlobalStore

  const filteredFavorites = GlobalStore.spots.filter(spot => spot.favorite)


  return (
    <section className="user-page-container">
      <div className="user-page-img">
        <h2 className="user-page-title">Nature Office</h2>
      </div>
      <div className="user-profile-wrapper">
        <MdPerson
          className="user-icon"
          color="#fff"
          fontSize="50px"
        />
        <div className="user-info-wrapper">
          <h2>{userName}</h2>
          <h2>{userEmail}</h2>
        </div>
      </div>
      <Link to="/"
        onClick={GlobalStore.clearStore}
        className="logout-btn"
      >
        LOGOUT
      </Link>
      <SpotContainer
        title={'Your Favorites'}
        spots={filteredFavorites}
      />
    </section>
  )
}))

export default UserPage
