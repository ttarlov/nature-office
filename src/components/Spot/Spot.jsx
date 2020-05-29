import React from 'react'
import { inject, observer } from 'mobx-react'
import MdHeart from 'react-ionicons/lib/MdHeart'
import MdHeartOutline from 'react-ionicons/lib/MdHeartOutline'
import MdStar from 'react-ionicons/lib/MdStar'

const Spot = inject('GlobalStore')(observer((props) => {
    const { 
      rating, 
      favorite, 
      name, 
      photo ,
      address
    } = props.spot
    const stars = [...Array(Math.round(rating))].map(i => <MdStar/>)
    return (
        <section className="spot-wrapper">
          <div className="spot-img-wrapper">
            {favorite ? <MdHeart 
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
              src={photo}
              alt="spot"
            />
          </div>
          <p className="spot-title">{name}</p>
          <p className="spot-adress">{address}</p>
          <div className="stars-container">
            { stars }
          </div>
        </section>
      )
}))

export default Spot