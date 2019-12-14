import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import rpwIcon from '../../images/ga-pin-street.png';
import DirectionsBox from './mapdirections';

import mapStyles from './googlemap.module.scss';
 
class Gmap extends Component {
  static defaultProps = {
    center: {
        lat: 41.2906039,
        lng: -73.4952177
    },
    zoom: 17
  };

renderMarkers(map, maps) {

// eslint-disable-next-line
let marker = new maps.Marker({
      position: {
        lat: 41.2906039,
        lng: -73.4952177
      },
      map,
      icon: rpwIcon,
      title: 'RecessPlayworks'
    });
  }

  render() {
    const APIKey = process.env.GATSBY_GOOGLE_API_KEY;
    
    return (
      <div className={mapStyles.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: APIKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
          yesIWantToUseGoogleMapApiInternals
        >
        </GoogleMapReact>
        <DirectionsBox/> 
      </div>
    );
  }
}

export default Gmap;
