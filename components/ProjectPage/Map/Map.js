'use client'
import styles from './Map.module.css';
import { AiFillHome } from 'react-icons/ai';
import GoogleMapReact from 'google-map-react';
import React from 'react';

export default function Map({ arrayObject }) {
   const center = {
     lat: arrayObject.latLong[0],
     lng: arrayObject.latLong[1]
   };


  if (center.lat !== '') {
    return (
        <div className={styles.mapdaddy}>
            <div className={styles.map_container}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
                defaultCenter={center}
                defaultZoom={11}
                >
                    <IconWrapper lat={center.lat} lng={center.lng} />
                </GoogleMapReact>
            </div>
        </div>
    );
  } else {
    return '';
  }
}

function IconWrapper() {
    return (
        <div>
          <AiFillHome className={styles.marker} />
        </div>
    )
}