'use client'
import styles from './Companies.module.css';
import Company from './Company/Company';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import arrowRight from '../../public/white-arrow-right.svg'
import 'swiper/css';
import 'swiper/css/navigation';

export default function Companies({ companyArray, lang }) {
    return (
        <div className={styles.companies_outer_container} id="companies">
            <div className={styles.companies_inner_container}>
                <div className=' mb-8'>
                    <div className={" text-base md:text-3xl font-semibold text-neutral-300"}>
                        <p>{lang === 'en' ? 'Affiliated Companies' : 'Osakkuusyhtiöt'}</p>
                    </div>
                </div>
                <Swiper
                    modules={[Navigation]}
                    direction={'horizontal'}
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
                        "1300": {
                            "slidesPerView": 4,
                            "slidesPerGroup": 4,
                            "spaceBetween": 25
                        },
                        "900": {
                            "slidesPerView": 3,
                            "slidesPerGroup": 3,
                            "spaceBetween": 10
                        },
                        "600": {
                            "slidesPerView": 2,
                            "slidesPerGroup": 2,
                            "spaceBetween": 10
                        },
                        "000": {
                            "slidesPerView": 1.1,
                            "slidesPerGroup": 1,
                            "spaceBetween": 10
                        }
                    }}>
                    {companyArray.map((company, index) => {
                        return (
                            <SwiperSlide className={styles.swiper_slide} key={index}>
                                <Company companyObject={company} lang={lang} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}