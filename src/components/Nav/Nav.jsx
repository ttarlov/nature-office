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
            <MdSearch 
              className="nav-icon"
              color="#fff"
              fontSize="40px"
            />
            <MdHeart 
              className="nav-icon"
              color="#fff"
              fontSize="40px"
            />
            <MdMap 
              className="nav-icon"
              color="#fff"
              fontSize="40px"
            />
            <MdAddCircle
              className="nav-icon"
              color="#fff"
              fontSize="40px"
            />
            <MdPerson
              className="nav-icon"
              color="#fff"
              fontSize="40px"
            />
          </nav>
      )
}))

export default Nav