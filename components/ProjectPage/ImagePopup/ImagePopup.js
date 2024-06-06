"use client";
import styles from "./ImagePopup.module.css";
import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
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
          <button
            className={`${styles.swiper_button_prev} hidden md:flex h-auto btn btn-ghost rounded-md`}
            id='swiper-button-prev'
          >
            <MdKeyboardArrowLeft className={" h-10 w-10"} />
          </button>
          <button
            className={`${styles.swiper_button_next} hidden md:flex h-auto btn btn-ghost rounded-md`}
            id='swiper-button-next'
          >
            <MdKeyboardArrowRight className={" h-10 w-10"} />
          </button>
          <div
            id='image-modal'
            className={"w-11/12 h-4/5 md:w-4/5 flex justify-center items-center pointer-events-none"}
            onClick={() => setPopupOpen(false)}
          >
            <div className={styles.image_loader}></div>
            <Swiper
              modules={[Navigation]}
              spaceBetween={50}
              direction='horizontal'
              slidesPerView={1}
              slidesPerGroup={1}
              speed={300}
              pagination={false}
              loop={true}
              initialSlide={index}
              navigation={{
                nextEl: `#swiper-button-next`,
                prevEl: `#swiper-button-prev`,
              }}
              className={styles.modal_swiper}
            >
              {arrayObject.pictures2.map((src, index) => (
                <SwiperSlide
                  className={` flex justify-center items-center swiper-slide swiper-lazy`}
                  key={index}
                >
                  <Image
                    fill
                    className={` object-contain rounded-3xl cursor-pointer pointer-events-auto swiper-lazy `}
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
