import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import MdHeart from 'react-ionicons/lib/MdHeart'
import MdMap from 'react-ionicons/lib/MdMap'
import MdSearch from 'react-ionicons/lib/MdSearch'
import MdPerson from 'react-ionicons/lib/MdPerson'
import MdAddCircle from 'react-ionicons/lib/MdAddCircle'


const Nav = inject('GlobalStore')(observer(() => {
    return (
          <nav className="nav">

            <Link to="/landing">
              <MdSearch 
                className="nav-icon"
                color="#fff"
                fontSize="40px"
              />
            </Link>

            <Link to="/SpotContainer">
              <MdHeart 
                className="nav-icon"
                color="#fff"
                fontSize="40px"
              />
            </Link>

            <Link to="/landing">
              <MdMap 
                className="nav-icon"
                color="#fff"
                fontSize="40px"
              />
            </Link>

            <Link to="/addNewSpot">
              <MdAddCircle
                className="nav-icon"
                color="#fff"
                fontSize="40px"
              />
            </Link>

            <Link to="/userPage">
              <MdPerson
                className="nav-icon"
                color="#fff"
                fontSize="40px"
              />
            </Link>
            
          </nav>
      )
}))

export default Nav