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
    <img
      src={imageSource}
      alt='project'
      className='object-cover w-full h-full absolute inset-0'
    />
  );
}
