"use client";
import styles from "./ImagePopup.module.css";
import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css/navigation";
import "swiper/css";

export default function ImagePopup({
  popupOpen,
  setPopupOpen,
  arrayObject,
  index,
}) {
  return (
    <div id='modal_container'>
      <Transition show={popupOpen} as={Fragment}>
        <Dialog
          open={popupOpen}
          onClose={() => setPopupOpen(false)}
          className={styles.dialog}
        >
          <Dialog.Overlay className={styles.dialog_overlay} />
          <div
            id='image-modal'
            className={
              "w-11/12 h-4/5 md:w-4/5 flex justify-center items-center pointer-events-none"
            }
            onClick={() => setPopupOpen(false)}
          >
            <div className={styles.image_loader}></div>
            <Swiper
              spaceBetween={50}
              direction='horizontal'
              slidesPerView={1}
              slidesPerGroup={1}
              speed={200}
              pagination={false}
              loop={true}
              observer={true}
              observeParents={true}
              parallax={true}
              initialSlide={index}
              navigation={false}
              className={styles.modal_swiper}
            >
              {arrayObject.pictures2.map((src, index) => (
                <SwiperSlide
                  className={` flex justify-center items-center swiper-slide swiper-lazy`}
                  key={index}
                >
                  <Image
                    fill
                    className={` object-contain cursor-pointer pointer-events-auto swiper-lazy `}
                    src={src}
                    alt='Real estate project'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
