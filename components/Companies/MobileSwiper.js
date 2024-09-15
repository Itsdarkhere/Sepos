import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import CompanyTwo from "./CompanyTwo";

export default function MobileCarousel({ companyArray, lang }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
    slidesToScroll: 1,
  });

  return (
    <div className='embla' ref={emblaRef}>
      <div className='embla__container flex'>
        {companyArray.map((company, index) => (
          <div className='embla__slide mr-4 flex-[0_0_85%] min-w-0' key={index}>
            <CompanyTwo companyObject={company} lang={lang} />
          </div>
        ))}
      </div>
    </div>
  );
}
