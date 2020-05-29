import React from 'react'
import { inject, observer } from 'mobx-react'
import MdHeart from 'react-ionicons/lib/MdHeart'
import MdHeartOutline from 'react-ionicons/lib/MdHeartOutline'
import MdStar from 'react-ionicons/lib/MdStar'

const Spot = inject('GlobalStore')(observer((props) => {
    const rating = 4.555
    const stars = [...Array(Math.round(rating))].map(i => <MdStar/>)
    return (
        <section className="spot-wrapper">
          <div className="spot-img-wrapper">
            {!props ? <MdHeart 
              color="#fff"
              fontSize="40px"
              className="spot-remove-fav"/> : 
              <MdHeartOutline 
              color="#fff"  
              fontSize="40px"
              className="spot-add-fav"/>
            }
            <img
              className="spot-img"
              src="https://images.unsplash.com/photo-1518172001620-cd0e03e41ff4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80"
              alt="spot"
            />
          </div>
          <p className="spot-title">Title</p>
          <p className="spot-adress">3372 w 38th ave Denver</p>
          <div className="stars-container">
          { stars }
          </div>
        </section>
      )
}))

export default Spot