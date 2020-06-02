import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import MdHeart from 'react-ionicons/lib/MdHeart'
import MdHeartOutline from 'react-ionicons/lib/MdHeartOutline'
import MdStar from 'react-ionicons/lib/MdStar'
import GlobalStore from '../../store/GlobalStore'

const Spot = inject('GlobalStore')(observer((props) => {
    const {
      rating,
      favorite,
      name,
      photo ,
      address,
      id
    } = props.spot
    console.log('name', name);
    const stars = [...Array(Math.round(rating))].map(i => <MdStar/>)
    return (
        <section className="spot-wrapper">
          <div className="spot-img-wrapper">
            {favorite ?
              <MdHeart
                color="#fff"
                fontSize="40px"
                className="spot-remove-fav"
                onClick={() => GlobalStore.toggleFavorite(id)}
              /> :
              <MdHeartOutline
                color="#fff"
                fontSize="40px"
                className="spot-add-fav"
                onClick={() => GlobalStore.toggleFavorite(id)}
              />
            }
          <Link
            to={`/spotDetails/${name}`}
            onClick={() => GlobalStore.displaySpotDetails(id)}
          >
            <img
              className="spot-img"
              src={photo} onError={GlobalStore.addDefaultSrc}
              alt="spot"
            />
          </Link>
          </div>
          <Link
            className="open-spot"
            to={`/spotDetails/${name}`}
            onClick={() => GlobalStore.displaySpotDetails(id)}
          >
            <p className="spot-title">{name}</p>
            <p className="spot-adress">{address}</p>
            <div className="stars-container">
              { stars }
            </div>
          </Link>
        </section>
      )
}))

export default Spot
