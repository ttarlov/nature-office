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
import MdHome from 'react-ionicons/lib/MdHome'
import MdLaptop from 'react-ionicons/lib/MdLaptop'
import IosPaperPlane from 'react-ionicons/lib/IosPaperPlane'
import IosBatteryCharging from 'react-ionicons/lib/IosBatteryCharging'
import { Link } from 'react-router-dom'
import Map from '../Map/Map'
import Loading from '../Loading/Loading'
import { fromUnixTime } from 'date-fns'


const SpotDetails = inject('GlobalStore')(observer((props) => {
  const loadingMessage = "LOADING WORK SPACE DETAILS..."

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
    website,
    pictures,
    wifi,
    power,
  } = GlobalStore.spotDetails

  let galleryItems, stars, comments, workTime

  if (!GlobalStore.loadingSpotDetails) {
    if (rating !== undefined) {
      stars = [...Array(Math.round(rating))].map(i => <MdStar/>)
      galleryItems = pictures.map(img => {
        return (
          <div>
            <img src={img} alt="spot" className="details-img"/>
          </div>
        )
      })
    }
    if (reviews !== undefined) {
      let timeNow
      comments = reviews.map(review => {
        // console.log('review',   review)
        if (review) {
        timeNow = JSON.stringify(fromUnixTime(review.time))
        // console.log(timeNow)
        // console.log(Date.now())
        return (
          <li className="details-comment">
            <p className="comment-name">{review.author_name}</p>
            <p className="comment-text">{review.text}</p>
            <p className="comment-time">{review.relative_time_description}</p>
            <p className="comment-time">{timeNow}</p>
          </li>
        )
        } else {
            return ''
          }
      })
    }
    if (hours !== null || hours !== undefined) {
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

    // window.scrollTo(0, 0)
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
        {
          favorite
          ? <MdHeart
              color="#fff"
              fontSize="60px"
              className="spot-remove-fav"
              onClick={() => GlobalStore.toggleFavorite(id)} />
          : <MdHeartOutline
              color="#fff"
              fontSize="60px"
              className="spot-add-fav"
              onClick={() => GlobalStore.toggleFavorite(id)} />
        }
        {
          GlobalStore.loadingSpotDetails
          ? <Loading message={loadingMessage}/>
          : <Slider {...gallerySettings} className="details-img-gallery">
              {galleryItems}
            </Slider>
        }
      </div>
      <section className="details-info-map-wrapper">
        <div className="details-info-wrapper">
          <h2 className="details-name">{name || "N/a"}</h2>
          <div className="stars-container">
            { stars }
          </div>
          <div className="feature">
            <MdHome
              fontSize="40px"
            />
            <p>{address || 'N/a'}</p>
          </div>
          <div className="feature">
            <MdCall
              fontSize="40px"
            />
            <p>{phone || 'N/a'}</p>
          </div>
          <div className="feature">
            <MdLaptop
              fontSize="40px"
            />
            {website ? <a href={website} target='_blank' rel="noopener noreferrer">Open Website</a> : <p>N/a</p>}
          </div>
          <div className="feature">
            <IosWifi
              fontSize="40px"
            />
            <p>{wifi ? 'Yes' : 'No'}</p>
          </div>
          <div className="feature">
            <IosBatteryCharging
              fontSize="40px"
            />
            <p>{power ? 'Yes' : 'No'}</p>
          </div>
          {
            GlobalStore.loadingSpotDetails
            ? <Loading message={loadingMessage}/>
            : <div className="time-feature">
                <MdTime
                  fontSize="40px"
                  className="feature-icon"
                />
                <ul className="work-time-wrapper">
                  { workTime }
                </ul>
              </div>
          }
        </div>
        <div className="details-map-wrapper">
          <Map center={coordinates}/>
        </div>
      </section>
        {
          GlobalStore.loadingSpotDetails
          ? <Loading message={loadingMessage}/>
          : <section className="details-comment-container">
              <h2>Comments: </h2>
              <ul className="details-comment-wrapper">
                { comments }
              </ul>
              <form className="comment-form">
                <div className="comment-form-item">
                  <label htmlFor="comment-username" className="comment-label">Name</label>
                    <input
                      type="text"
                      name="commentUserName"
                      placeholder="Name"
                      value={GlobalStore.commentUserName}
                      onChange={GlobalStore.handleChange}
                  />
                </div>
                <div className="comment-form-item">
                  <label htmlFor="comment" className="comment-label">Comment</label>
                    <textarea
                      name="commentMessage"
                      placeholder="Comment"
                      rows="8"
                      value={GlobalStore.commentMessage}
                      onChange={GlobalStore.handleChange}
                    />
                </div>
                <p className= "comment-error-message">
                  {GlobalStore.loginError || <span className="comment-fill-message">Let us know what you think!</span> }
                </p>
                <div className="comment-form-item">
                  <button
                    className="add-comment-btn"
                    onClick={(event) => GlobalStore.postComment(event, id)}
                  >
                    SEND
                    <IosPaperPlane fontSize="30px"/>
                  </button>
                </div>
              </form>
            </section>
        }
    </section>
  )
}))

export default SpotDetails
