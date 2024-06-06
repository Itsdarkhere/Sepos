"use client";
import CompanyTwo from "./CompanyTwo";
import MobileSwiper from "./MobileSwiper";

export default function Companies({ companyArray, lang }) {
  return (
    <div
      className=' w-full py-16 pl-6 md:px-6 bg-neutral-900 flex justify-center items-center '
      id='companies'
    >
      <div className={"w-full max-w-7xl"}>
        <div className='  mb-4 md:mb-8'>
          <div
            className={" text-xl md:text-3xl font-semibold text-neutral-300"}
          >
            <p>{lang === "en" ? "Affiliated Companies" : "Osakkuusyhtiöt"}</p>
          </div>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className='w-full hidden md:grid grid-cols-2 gap-4'>
          {companyArray.map((company, i) => {
            return (
                <CompanyTwo key={i} companyObject={company} lang={lang} />
            );
          })}
        </div>

          {/* MOBILE LAYOUT */}
          <div className="block md:hidden w-full">
            <MobileSwiper companyArray={companyArray} lang={lang} />
          </div>
      </div>
    </div>
  );
}
