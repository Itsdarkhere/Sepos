import React from 'react';

export default function Gallery({ activatePopup, arrayObject, setIndex }) {
  return (
    <div className={" flex-1"}>
      <div className={" grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3"} onClick={() => activatePopup()}>
        {arrayObject.pictures.map((src, index) => {
          return (
            <picture
              loading="eager"
              onClick={() => setIndex(index)}
              alt="project"
              className=" cursor-pointer"
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 2 }}
              key={src}
            >
              <img className={" rounded-md"} src={src} alt="project" />
            </picture>
          );
        })}
      </div>
    </div>
  );
}