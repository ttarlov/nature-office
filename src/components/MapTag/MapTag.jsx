import React from 'react'
import { inject, observer } from 'mobx-react'
import GlobalStore from '../../store/GlobalStore'
import IosPin from 'react-ionicons/lib/IosPin'

export const MapTag = inject('GlobalStore')(observer((props) => {
  return (
    <div
      onClick={() => GlobalStore.displaySpotDetails(props.id)}>
      <IosPin color="grey" fontSize="40px"/>
      <p className="map-tag-name">{props.name}</p>
    </div>
  )
}))

export const MapTargetTag = inject('GlobalStore')(observer((props) => {
  return (
    <a
      href={props.mapUrl}
      target="_blank">
      <IosPin color="red" fontSize="40px"/>
      <p className="map-tag-name">{props.name}</p>
    </a>
  )
}))


