import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import GlobalStore from '../../store/GlobalStore'
import Loading from '../Loading/Loading'
import Weather from '../Weather/Weather'
import Search from '../Search/Search'
import IosArrowRoundForward from 'react-ionicons/lib/IosArrowRoundForward'

const LandingPage = inject('GlobalStore')(observer(() => {
  const randomizedInitially = [...GlobalStore.spots].sort(() => Math.random() - 0.5);
  const reRandomizeSpots = spots => spots.sort(() => Math.random() - 0.5);
  const topRatings = randomizedInitially.filter(spot => spot.rating >= 4.5);
  const bottomRatings = randomizedInitially.filter(spot => spot.rating < 4.5);
  const previewTopRated = reRandomizeSpots(topRatings)[0];
  const previewBottomRated = reRandomizeSpots(bottomRatings)[0];

  return (
    !GlobalStore.spots.length || !GlobalStore.weatherTemp || !GlobalStore.weatherType
    ? <Loading message="LOOKING OUTSIDE FOR WORK SPACES..."/>
    : <React.Fragment>
        <Weather/>
        <Search />
        <section className="spot-container">
          <section className="spot-wrapper">
            <div className="spot-img-wrapper">
              <Link to={'/spotContainer'}>
                <img
                  className="spot-img"
                  src={previewBottomRated.photo}
                  alt="spot"
                />
              </Link>
            </div>
            <Link
              to={`/spotDetails/${previewBottomRated.name}`}
              className="category-spot"
            >
                <p className="category-title">{previewBottomRated.name}</p>
                <IosArrowRoundForward
                  className="spot-arrow"
                  color="#333333"
                  fontSize="1.5rem"
                />
            </Link>
            <Link
              to={'/spotContainer'}
              className="open-spot">
                <p className="category-city">{ GlobalStore.city }</p>
                <p className="category-msg">Explore more work spaces</p>
            </Link>
          </section>
          <section className="spot-wrapper">
            <div className="spot-img-wrapper">
              <Link to={'/topRated'}>
                <img
                  className="spot-img"
                  src={previewTopRated.photo}
                  alt="spot" />
              </Link>
            </div>
            <Link
              to={`/spotDetails/${previewTopRated.name}`}
              className="category-spot"
            >
                <p className="category-title">{previewTopRated.name}</p>
                <IosArrowRoundForward
                  className="spot-arrow"
                  color="#333333"
                  fontSize="1.5rem"
                />
            </Link>
            <Link
              to={'/topRated'}
              className="open-spot"
            >
                <p className="category-city">{ GlobalStore.city }</p>
                <p className="category-msg">Top Rated</p>
            </Link>
          </section>
        </section>
      </React.Fragment>
  )
}))

export default LandingPage
