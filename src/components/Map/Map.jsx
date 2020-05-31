import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
 
const Map = (props) => {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          center={props.center}
          zoom={16}
        >
        
        </GoogleMapReact>
      </div>
    )
}
 
export default Map;