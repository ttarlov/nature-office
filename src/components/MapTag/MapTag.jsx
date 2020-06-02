import React from 'react'
import { inject, observer } from 'mobx-react'
import GlobalStore from '../../store/GlobalStore'
import IosPin from 'react-ionicons/lib/IosPin'

const MapTag = inject('GlobalStore')(observer((props) => {
  return (
    <div
      onClick={() => GlobalStore.displaySpotDetails(props.id)}>
      <IosPin color="red" fontSize="40px"/>
      <p className="map-tag-name">{props.name}</p>
    </div>
  )
}))

export default MapTag
