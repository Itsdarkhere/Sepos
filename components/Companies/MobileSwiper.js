import styles from '../Companies/Companies.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import CompanyTwo from './CompanyTwo';

export default function MobileSwiper({ companyArray, lang }) {
  return (
    <Swiper
      modules={[Navigation]}
      direction={"horizontal"}
      loop={true}
      navigation={{
        nextEl: `.${styles.swiper_button_right}`,
        prevEl: `.${styles.swiper_button_left}`,
      }}
      className={styles.company_swiper}
      spaceBetween={25}
      slidesPerGroup={4}
      slidesPerView={4}
      speed={500}
      pagination={false}
      breakpoints={{
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 10,
        },
        "000": {
          slidesPerView: 1.1,
          slidesPerGroup: 1,
          spaceBetween: 10,
        },
      }}
    >
      {companyArray.map((company, index) => {
        return (
          <SwiperSlide className={styles.swiper_slide} key={index}>
            <CompanyTwo companyObject={company} lang={lang} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
