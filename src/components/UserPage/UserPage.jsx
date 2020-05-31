import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import GlobalStore from '../../store/GlobalStore'
import MdPerson from 'react-ionicons/lib/MdPerson'

const UserPage = inject('GlobalStore')(observer(() => {
  const {
    userName,
    userEmail
  } = GlobalStore
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
        </section>
      )
}))

export default UserPage