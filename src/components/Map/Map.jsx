import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import GlobalStore from '../../store/GlobalStore'
import MapTag from '../MapTag/MapTag'
const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
 
const Map = () => {
  const otherSpots = GlobalStore.spots.filter(spot => spot.id !== GlobalStore.spotDetails.id)
  const markers = otherSpots.map(spot => {
    const marker = [{...spot.coordinates}]
    return (
      <MapTag
            color="red"
            lat={marker[0].lat}
            lng={marker[0].lng}
            beat={true}
            id={spot.id}
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
          <MapTag 
            color="blue"
            lat={targetMarker[0].lat}
            lng={targetMarker[0].lng}
            beat={true}
            id={GlobalStore.spotDetails.id}
          />
        </GoogleMapReact>
      </div>
    )
}
 
export default Map;


 