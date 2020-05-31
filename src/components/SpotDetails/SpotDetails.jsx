  
import React from 'react'
import { inject, observer } from 'mobx-react'
import MdHeartOutline from 'react-ionicons/lib/MdHeartOutline'
import MdHeart from 'react-ionicons/lib/MdHeart'
import MdArrowRoundBack from 'react-ionicons/lib/MdArrowRoundBack'
import Slider from "react-slick"
import GlobalStore from '../../store/GlobalStore'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import MdStar from 'react-ionicons/lib/MdStar'
import IosWifi from 'react-ionicons/lib/IosWifi'
import MdTime from 'react-ionicons/lib/MdTime'
import IosBatteryCharging from 'react-ionicons/lib/IosBatteryCharging'
import { Link } from 'react-router-dom'


const SpotDetails = inject('GlobalStore')(observer((props) => {
  console.log(GlobalStore.spotDetails);
    const {
      id,
      name,
      pictures,
      favorite
    } = GlobalStore.spotDetails

    let galleryItems
    if (!GlobalStore.loadingSpotDetailPics) {
      galleryItems = pictures.map(img => {
      return (
        <div>
          <img src={img} alt="spot" className="details-img"/>
        </div>
      )
    })
  }

    const gallerySettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    const rating = 4.555
    const stars = [...Array(Math.round(rating))].map(i => <MdStar/>)

    return (
        <section className="details-container">
          <div className="details-img-gallery">
            <Link to="/spotContainer">
            <MdArrowRoundBack
              className="details-back-btn"
              color="#fff"
              fontSize="60px"
            />
            </Link>
            {favorite ? <MdHeart
                color="#fff"
                fontSize="60px"
                className="spot-remove-fav"
                onClick={() => GlobalStore.toggleFavorite(id)}/> :
                <MdHeartOutline
                color="#fff"
                fontSize="60px"
                className="spot-add-fav"
                onClick={() => GlobalStore.toggleFavorite(id)}/>
              }
              {GlobalStore.loadingSpotDetailPics ? <div>Loading Pictures </div> :
                <Slider {...gallerySettings} className="details-img-slider">
                {galleryItems}
                </Slider>
              }
          </div>

          <div className="details-info">
            <h2 className="details-name">{name}</h2>
            <p>adress: 3372 w 38th ave Denver</p>
            <div className="stars-container">
              { stars }
            </div>

            <div className="feature">
              <IosWifi
                fontSize="40px"
                className="feature-icon"
               />
              <p>wifi: </p>
            </div>
            <div className="feature">
              <MdTime
                fontSize="40px"
                className="feature-icon"
              />
              <p>open: </p>
            </div>
            <div className="feature">
              <IosBatteryCharging
                fontSize="40px"
                className="feature-icon"
              />
              <p>power: </p>
            </div>

            <ul className="details-comments">

            </ul>
          </div>
        </section>
      )
}))

export default SpotDetails