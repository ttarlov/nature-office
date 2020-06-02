import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import MdHeart from 'react-ionicons/lib/MdHeart';
import IosImages from 'react-ionicons/lib/IosImages';
import MdSearch from 'react-ionicons/lib/MdSearch';
import MdPerson from 'react-ionicons/lib/MdPerson';
import MdAddCircle from 'react-ionicons/lib/MdAddCircle';

const Nav = inject('GlobalStore')(observer(() => {
  return (
    <nav className="nav">
      <Link to="/landing" className="nav-item">
        <MdSearch
          className="nav-icon"
          color="#fff"
          fontSize="40px"
        />
        EXPLORE
      </Link>

      <Link to="/spotContainer" className="nav-item">
        <IosImages
          className="nav-icon"
          color="#fff"
          fontSize="40px"
        />
        ALL SPOTS
      </Link>

      <Link to="/favorites" className="nav-item">
        <MdHeart
          className="nav-icon"
          color="#fff"
          fontSize="40px"
        />
        FAVORITES
      </Link>

      <Link to="/addNewSpot" className="nav-item">
        <MdAddCircle
          className="nav-icon"
          color="#fff"
          fontSize="40px"
        />
        ADD NEW
      </Link>

      <Link to="/userPage" className="nav-item">
        <MdPerson
          className="nav-icon"
          color="#fff"
          fontSize="40px"
        />
        USER PAGE
      </Link>
    </nav>
  )
}))

export default Nav
