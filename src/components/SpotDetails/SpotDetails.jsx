import React from 'react'
import { inject, observer } from 'mobx-react'
import MdHeartOutline from 'react-ionicons/lib/MdHeartOutline'
import MdHeart from 'react-ionicons/lib/MdHeart'
import MdArrowRoundBack from 'react-ionicons/lib/MdArrowRoundBack'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SpotDetails = inject('GlobalStore')(observer((props) => {
  // FAKE IMG DATA, REPLACE WITH FETCHED IMG
    const imgData = [
      "https://images.unsplash.com/photo-1518172001620-cd0e03e41ff4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80",
      "https://images.unsplash.com/photo-1568319552388-8795606b75d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1522206038088-8698bcefa6a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1554700124-538d459fc050?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    ]
  // CREATE GALLERY ITEMS
    const galleryItems = imgData.map(img => {
      return (
        <div>
          <img src={img} alt="spot" className="details-img"/>
        </div>
      )
    })
    
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
            <MdArrowRoundBack
              className="details-back-btn"
              color="#fff"
              fontSize="60px"
            />
            {!props ? <MdHeart 
                color="#fff"
                fontSize="40px"
                className="spot-remove-fav"/> : 
                <MdHeartOutline 
                color="#fff"  
                fontSize="60px"
                className="spot-add-fav"/>
              }
            <Slider {...gallerySettings} className="details-img-slider">
                {galleryItems}
            </Slider> 
          </div>
        </section>
      )
}))

export default SpotDetails