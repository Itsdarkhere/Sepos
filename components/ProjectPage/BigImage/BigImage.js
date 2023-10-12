import styles from './BigImage.module.css';
import { ResizeObserver } from '@juggle/resize-observer';
import React, { useState } from 'react';

export default function BigImage({ arrayObject, setImgLoaded }) {
  const [screenWidth, setWidth] = useState(1500);

  const ro = new ResizeObserver((entries, observer) => {
    entries.forEach((entry) => {
      const { inlineSize: width } = entry.contentBoxSize[0];
      setWidth(width);
    });
  });

//   ro.observe(document.body);

  const getPicture = () => {
    if (screenWidth < 600) {
      return (
        <picture
          loading="eager"
          onLoad={() => setImgLoaded(true)}
          alt="project"
          className={styles.big_image} // Use Next.js CSS Modules here
        >
          {/* <source srcSet={process.env.PUBLIC_URL + './pics-highres/' + projectIndex + '.webp'} type="image/webp"></source> */}
          <img
            onLoad={() => setImgLoaded(true)}
            className={styles.big_image} // Use Next.js CSS Modules here
            src={arrayObject.displayImage[1]}
            alt="wide-project-img"
          ></img>
        </picture>
      );
    }
    return (
      <picture
        loading="eager"
        onLoad={() => setImgLoaded(true)}
        alt="project"
        key={arrayObject}
        className={styles.big_image} // Use Next.js CSS Modules here
      >
        {/* <source srcSet={process.env.PUBLIC_URL + './pics-highres/wide-dark-' + projectIndex + '.webp'} type="image/webp"></source> */}
        <img
          onLoad={() => setImgLoaded(true)}
          className={styles.big_image} // Use Next.js CSS Modules here
          src={arrayObject.displayImage[0]}
          alt="wide-project-img"
        ></img>
      </picture>
    );
  };

  return (
    <div className={styles.big_image_container}> {/* Use Next.js CSS Modules here */}
      {getPicture()}
    </div>
  );
}