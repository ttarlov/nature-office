
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
import MdCall from 'react-ionicons/lib/MdCall'
import IosBatteryCharging from 'react-ionicons/lib/IosBatteryCharging'
import { Link } from 'react-router-dom'
import Map from '../Map/Map'


const SpotDetails = inject('GlobalStore')(observer((props) => {
    const {
      name,
      address,
      rating,
      coordinates,
      favorite,
      id,
      phone,
      hours,
      reviews,
      types,
      mapUrl,
      website,
      pictures,
      wifi,
      power,
    } = GlobalStore.spotDetails


    let galleryItems
    let stars
    let comments
    let workTime
    if (!GlobalStore.loadingSpotDetailPics) {
      if (rating !== undefined){
      stars = [...Array(Math.round(rating))].map(i => <MdStar/>)

      galleryItems = pictures.map(img => {
      return (
        <div>
          <img src={img} alt="spot" className="details-img"/>
        </div>
        )
      })
    }
      if (reviews !== undefined){
      comments = reviews.map(review => {
        return (
          <li className="details-comment">
            <p>{review.relative_time_description}</p>
            <p>{review.author_name}</p>
            <p>{review.text}</p>
          </li>
        )
      })
      }
      if (hours !== null){
        workTime = hours.map(day => {
        return (
        <li className="work-time">{day}</li>
        )
      })
    }
    }


    const gallerySettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

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
            <p>adress: {address}</p>
            <div className="stars-container">
              { stars }
            </div>
            <div className="feature">
              <MdCall
                fontSize="40px"
                className="feature-icon"
               />
              <p>{phone}</p>
            </div>
            <div className="feature">
              <IosWifi
                fontSize="40px"
                className="feature-icon"
               />
              <p>{wifi ? 'Yes' : 'No'}</p>
            </div>
            <div className="feature">
              <IosBatteryCharging
                fontSize="40px"
                className="feature-icon"
              />
              <p>{power ? 'Yes' : 'No'}</p>
            </div>
            {GlobalStore.loadingSpotDetailPics ? <div>Loading Pictures </div> :
            <div className="time-feature">
              <MdTime
                fontSize="40px"
                className="feature-icon"
              />
              <ul className="work-time-wrapper">
                { workTime }
              </ul>
            </div>
            }
            <div className="details-map-wrapper">
              <Map center={coordinates}/>
            </div>
            {GlobalStore.loadingSpotDetailPics ? <div>Loading Pictures </div> :
                <ul className="details-comment-wrapper">
                { comments }
              </ul>
              }
          </div>
        </section>
      )
}))

export default SpotDetails
