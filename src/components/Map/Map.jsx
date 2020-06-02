import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import GlobalStore from '../../store/GlobalStore'
import { MapTag, MapTargetTag } from '../MapTag/MapTag'
const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
 
const Map = () => {
  const otherSpots = GlobalStore.spots.filter(spot => spot.id !== GlobalStore.spotDetails.id)
  const markers = otherSpots.map(spot => {
    const marker = [{...spot.coordinates}]
    return (
      <MapTag
            lat={marker[0].lat}
            lng={marker[0].lng}
            id={spot.id}
            name={spot.name}
          />
    )
  })
  const targetMarker = [{...GlobalStore.spotDetails.coordinates}]
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          center={GlobalStore.spotDetails.coordinates}
          zoom={16}
        >
          { markers }
          <MapTargetTag 
            lat={targetMarker[0].lat}
            lng={targetMarker[0].lng}
            mapUrl={GlobalStore.spotDetails.mapUrl}
          />
        </GoogleMapReact>
      </div>
    )
}
 
export default Map;


 