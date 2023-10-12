import styles from './ImagePopup.module.css';
import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

export default function ImagePopup({ popupOpen, setPopupOpen, arrayObject, index }) {
  return (
    <div id={styles.modal_container}>
      <div className={`${styles.popup_button_left} ${styles.popup_button}`}>
        {popupOpen && <MdKeyboardArrowLeft />}
      </div>
      <div className={`${styles.popup_button_right} ${styles.popup_button}`}>
        {popupOpen && <MdKeyboardArrowRight />}
      </div>

      <Transition show={popupOpen} as={Fragment}>
        <Dialog open={popupOpen} onClose={() => setPopupOpen(false)} className={styles.dialog}>
          <Dialog.Overlay className={styles.dialog_overlay} />
          <div id='image-modal' className={styles.modal}>
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
              {arrayObject.pictures2.map((src, index) => (
                <SwiperSlide
                  className={`${styles.modal_slide} ${styles.swiper_slide} ${styles.swiper_lazy}`}
                  key={index}
                >
                  <picture
                    loading="eager"
                    alt="project-big"
                    className={`${styles.popup_gallery_image} ${styles.swiper_lazy}`}
                  >
                    <img
                      className={`${styles.popup_gallery_image} ${styles.swiper_lazy}`}
                      src={src}
                      alt="project"
                    />
                  </picture>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}





