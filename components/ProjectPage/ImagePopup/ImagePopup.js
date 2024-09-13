"use client";
import React, { useCallback, useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Loader } from "lucide-react";
import Image from "next/image";

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
        className="fixed inset-0 z-50 overflow-hidden"
      >
        <div className="flex items-center justify-center min-h-screen">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="bg-zinc-900 rounded-lg shadow-xl transform overflow-hidden transition-all w-[80vw] h-[350px] max-h-full md:h-[60vh] flex items-center justify-center">
              <div className="w-full h-full md:p-6 overflow-hidden">
                <Carousel images={arrayObject.pictures2} initialIndex={index} />
              </div>
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

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

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

  const onKeyDown = useCallback((e) => {
    if (e.key === "ArrowLeft") emblaApi?.scrollPrev();
    if (e.key === "ArrowRight") emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden h-full w-full" ref={emblaRef} onKeyDown={onKeyDown}>
      <div className="embla__container flex h-full w-full">
        {images.map((src, index) => (
          <CarouselSlide key={index} src={src} />
        ))}
      </div>
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-zinc-600 hover:bg-opacity-75 rounded-full p-2"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-zinc-600 hover:bg-opacity-75 rounded-full p-2"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}

function CarouselSlide({ src }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="embla__slide flex-[0_0_100%] h-full w-full min-w-0 flex justify-center items-center bg-zinc-900">
      <div className="relative w-full h-full"> {/* Adjust this value to change aspect ratio */}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader className="w-8 h-8 animate-spin text-white" />
          </div>
        )}
        <Image
          src={src}
          alt="Real estate project"
          onClick={(e) => e.stopPropagation()}
          fill
          style={{
            objectFit: "contain",
            opacity: imageLoaded ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
    </div>
  );
}