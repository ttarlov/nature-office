import React from 'react'
import { inject, observer } from 'mobx-react'
// import { Link } from 'react-router-dom'
import GlobalStore from '../../store/GlobalStore'
import SpotContainer from '../SpotContainer/SpotContainer'

const Favorites = inject('GlobalStore')(observer(() => {
  const filteredFavorites = GlobalStore.spots.filter(spot => spot.favorite)
  return (
    <SpotContainer
      title={'Your Favorites'}
      spots={filteredFavorites}
    />
  )
}))

export default Favorites
