import Image from 'next/image';
import styles from './Gallery.module.css';
import React from 'react';

export default function Gallery({ activatePopup, arrayObject, setIndex }) {
  return (
    <div className={styles.direction_container}>
      <div className={styles.pp_gallery} onClick={() => activatePopup()}>
        {arrayObject.pictures.map((src, index) => {
          return (
            <picture
              loading="eager"
              onClick={() => setIndex(index)}
              alt="project"
              className={styles.gallery_picture}
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 2 }}
              key={src}
            >
              <img className={styles.gallery_image} src={src} alt="project" />
            </picture>
          );
        })}
      </div>
    </div>
  );
}