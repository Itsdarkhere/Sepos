import styles from './Map.module.css';
import { AiFillHome } from 'react-icons/ai';
import GoogleMapReact from 'google-map-react';
import React from 'react';

export default function Map({ arrayObject }) {
//   const center = {
//     lat: arrayObject.latLong[0],
//     lng: arrayObject.latLong[1]
//   };

    const center = {
        lat: 0,
        lng: 0
    };

  if (center.lat !== '') {
    return (
      <div className={styles.map_container}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={center}
          defaultZoom={11}
        >
          {/* <AiFillHome lat={center.lat} lng={center.lng} className={styles.marker} /> */}
        </GoogleMapReact>
      </div>
    );
  } else {
    return '';
  }
}