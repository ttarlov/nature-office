import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import GlobalStore from '../../store/GlobalStore'
import IosPin from 'react-ionicons/lib/IosPin'
const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;


const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
const Map = (props) => {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          center={props.center}
          zoom={16}
        >
        <a href={GlobalStore.spotDetails.mapUrl} target="_blank">
        <IosPin 
          color="#9e020f"
          fontSize="60px"
          beat={true}
          onClick={() => GlobalStore.openGoogleMaps}
        >dkdfsjvk</IosPin>
        </a>
        </GoogleMapReact>
      </div>
    )
}
 
export default Map;

 