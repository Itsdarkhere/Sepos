"use client";
import Image from "next/image";
import { useLayoutEffect, useState } from "react";

export default function BigImage({ arrayObject }) {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const imageSource = isMobile
    ? arrayObject.displayImage[1]
    : arrayObject.displayImage[0];

  return (
    <div className='relative w-full h-auto flex justify-center items-center'>
      <div className='w-full h-0 pb-[80%] relative'>
        <Image
          src={imageSource}
          alt='project'
          fill
          sizes='(max-width: 600px) 100vw, 80vw'
          priority
          className='object-cover'
        />
      </div>
    </div>
  );
}
