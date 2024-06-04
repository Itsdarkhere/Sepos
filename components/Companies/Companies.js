"use client";
import styles from "./Companies.module.css";
import Company from "./Company/Company";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import arrowRight from "../../public/white-arrow-right.svg";
import "swiper/css";
import "swiper/css/navigation";
import CompanyTwo from "./CompanyTwo/CompanyTwo";

export default function Companies({ companyArray, lang }) {
  return (
    <div
      className={`${styles.companies_outer_container} pl-4 md:px-16`}
      id='companies'
    >
      <CompaniesDesktop lang={lang} companyArray={companyArray} />
      <CompaniesMobile lang={lang} companyArray={companyArray} />
    </div>
  );
}

function CompaniesDesktop({ lang, companyArray }) {
  return (
    <div className={" max-w-[1880px] w-full hidden md:flex flex-col relative"}>
      <motion.div
        className={styles.companies_text}
        transition={{ duration: 1 }}
      >
        <div className={styles.companies_text_header}>
          <p>{lang === "en" ? "Affiliated Companies" : "Osakkuusyhtiöt"}</p>
        </div>
      </motion.div>
      <div className=' w-full gap-6 hidden md:grid grid-cols-1 md:grid-cols-2'>
        {companyArray.map((company, index) => {
          return <CompanyTwo key={index} companyObject={company} lang={lang} />;
        })}
      </div>
    </div>
  );
}

function CompaniesMobile({ lang, companyArray }) {
  return (
    <div className={" max-w-[1880px] w-full flex md:hidden flex-col"}>
      <motion.div
        className={styles.companies_text}
        transition={{ duration: 1 }}
      >
        <div className={styles.companies_text_header}>
          <p>{lang === "en" ? "Affiliated Companies" : "Osakkuusyhtiöt"}</p>
        </div>
      </motion.div>
      <button className={styles.swiper_button_left}>
        <Image height={19} alt='arrow left' src={arrowRight} />
      </button>
      <button className={styles.swiper_button_right}>
        <Image height={19} alt='arrow right' src={arrowRight} />
      </button>
      <Swiper
        modules={[Navigation]}
        direction={"horizontal"}
        loop={true}
        navigation={{
          nextEl: `.${styles.swiper_button_right}`,
          prevEl: `.${styles.swiper_button_left}`,
        }}
        className={"w-full pl-2"}
        spaceBetween={10}
        slidesPerGroup={1}
        slidesPerView={1.1}
        speed={500}
        pagination={false}
      >
        {companyArray.map((company, index) => {
          return (
            <SwiperSlide className={"py-2 pl-2"} key={index}>
              <CompanyTwo key={index} companyObject={company} lang={lang} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
