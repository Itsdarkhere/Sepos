'use client'
import styles from './Companies.module.css';
import Company from './Company/Company';
import { motion } from 'framer-motion';
import { animateTextChange } from '@/utils/animateTextChange';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import arrowRight from '../../public/white-arrow-right.svg'
import 'swiper/css';

export default function Companies({ companyArray, english }) {
    return (
        <div className={styles.companies_outer_container} id="companies">
            <div className={styles.companies_inner_container}>
                <motion.div className={styles.companies_text} transition={{ duration: 1 }}>
                    <div className={styles.companies_text_header}>
                        {animateTextChange('', english, 'Affiliated Companies', 'Osakkuusyhtiöt')}
                    </div>
                </motion.div>
                <div className={styles.swiper_button_left}>
                    <Image height={19} alt="arrow left" src={arrowRight} />
                </div>
                <div className={styles.swiper_button_right}>
                    <Image height={19} alt="arrow right" src={arrowRight} />
                </div>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={4}
                    direction={'horizontal'}
                    loop={true}
                    navigation={{
                        nextEl: `.${styles.swiper_button_right}`,
                        prevEl: `.${styles.swiper_button_left}`,
                    }}
                    className={styles.company_swiper}
                    slidesPerGroup="4"
                    speed="1000ms"
                    pagination={false}
                    breakpoints={{
                        "1300": {
                            "slidesPerView": 4,
                            "slidesPerGroup": 4,
                            "spaceBetween": 10
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
                                <Company companyObject={company} english={english} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}