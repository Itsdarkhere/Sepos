"use client";
import { Dialog, Transition } from "@headlessui/react";
import React, { useCallback, useState, useEffect, Fragment } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Loader } from "lucide-react";

export default function ImagePopup({
  popupOpen,
  setPopupOpen,
  arrayObject,
  index,
}) {
  const closePopup = useCallback(() => {
    setPopupOpen(false);
  }, [setPopupOpen]);

  return (
    <Transition show={popupOpen} as={Fragment}>
      <Dialog
        open={popupOpen}
        onClose={closePopup}
        className='fixed inset-0 z-50 overflow-hidden'
      >
        <div className='flex items-center justify-center min-h-screen'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <div className='relative bg-zinc-900 rounded-lg overflow-hidden shadow-xl transform transition-all w-full max-w-[90vw] max-h-[90vh]'>
              <Carousel images={arrayObject.pictures2} initialIndex={index} />
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

function Carousel({ images, initialIndex }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    startIndex: initialIndex,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowLeft") emblaApi?.scrollPrev();
      if (e.key === "ArrowRight") emblaApi?.scrollNext();
    },
    [emblaApi]
  );

  return (
    <div
      className='embla overflow-hidden relative w-full'
      ref={emblaRef}
      onKeyDown={onKeyDown}
    >
      <div className='embla__container flex h-full'>
        {images.map((src, index) => (
          <CarouselSlide key={index} src={src} />
        ))}
      </div>
      <button
        className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-zinc-600 hover:bg-opacity-75 rounded-full p-2'
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <ChevronLeft className='w-6 h-6' />
      </button>
      <button
        className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-zinc-600 hover:bg-opacity-75 rounded-full p-2'
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <ChevronRight className='w-6 h-6' />
      </button>
    </div>
  );
}

function CarouselSlide({ src }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className='embla__slide flex-[0_0_100%] min-w-0 flex justify-center items-center bg-zinc-900'>
      <div className='relative w-full h-full flex justify-center items-center'>
        {!imageLoaded && (
          <div className='absolute inset-0 flex items-center justify-center'>
            <Loader className='w-8 h-8 animate-spin text-white' />
          </div>
        )}
        <Image
          src={src}
          alt='Real estate project'
          onClick={(e) => e.stopPropagation()}
          style={{
            objectFit: "contain",
            maxWidth: "100%",
            maxHeight: "100%",
            opacity: imageLoaded ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
          width={1000}
          height={1000}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
    </div>
  );
}
