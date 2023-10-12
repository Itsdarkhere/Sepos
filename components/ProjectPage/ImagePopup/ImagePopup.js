import styles from './ImagePopup.module.css';
import Modal from 'react-modal';
// import ScrollLock from 'react-scrolllock';
import React from 'react';
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/components/lazy/lazy.min.css';
import 'swiper/css/navigation'
import 'swiper/css';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

export default function ImagePopup({ popupOpen, activatePopup, arrayObject, index }) {
  // I have no idea why this needs to be set
//   Modal.setAppElement('#root');

  return (
    // <ScrollLock isActive={popupOpen}>
      <div id={styles.modal_container}>
        <div className={`${styles.popup_button_left} ${styles.popup_button}`}>
          {popupOpen && <MdKeyboardArrowLeft />}
        </div>
        <div className={`${styles.popup_button_right} ${styles.popup_button}`}>
          {popupOpen && <MdKeyboardArrowRight />}
        </div>
        <Modal
          isOpen={popupOpen}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          onRequestClose={() => activatePopup()}
          overlayClassName={styles.modal_container}
          id={styles.image_modal}
          className={styles.modal}
        >
          <div className={styles.image_loader}></div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            initialSlide={index}
            navigation={{
              nextEl: `.${styles.popup_button_right}`,
              prevEl: `.${styles.popup_button_left}`,
            }}
            className={styles.modal_swiper}
            
          >
            {arrayObject.pictures2.map((src, index) => {
              return (
                <SwiperSlide className={`${styles.modal_slide} ${styles.swiper_slide} ${styles.swiper_lazy}`} key={index}>
                  <picture loading="eager" alt="project-big" className={`${styles.popup_gallery_image} ${styles.swiper_lazy}`}>
                    <img className={`${styles.popup_gallery_image} ${styles.swiper_lazy}`} src={src} alt="project" />
                  </picture>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Modal>
      </div>
    // </ScrollLock>
  );
}