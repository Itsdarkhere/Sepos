'use client'
// import 'swiper/swiper.scss';
// import 'swiper/components/pagination/pagination.min.css';
import styles from './ProjectSlider.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import { animateTextChange } from '@/utils/animateTextChange';
import { AnimatePresence } from 'framer-motion';

export default function ProjectSlider({ projectArray, english }) {
  const [projectIndex, setProjectIndex] = useState(0);

  const content = projectArray.map((project, index) => {
    if (projectIndex === index) {
      return (
        <motion.div className={styles.mainpage_project_img_container} key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
          <div className={styles.project_mainpage_text_container}>
            <h4 className={styles.project_mainpage_text_header}>{project.name}</h4>
            {animateTextChange(styles.project_mainpage_text_description, english, project.description, project.fin_description)}
            <p className={styles.project_mainpage_text_link}>
                Learn More
                <img className={styles.project_mainpage_text_link_img} src="./icons/arrow-icon.svg" alt="arrow icon" />
            </p>
          </div>
          <picture loading="lazy" alt="company" className={styles.project_mainpage_picture}>
            <img className={styles.project_mainpage_image} src={project.displayImage[0]} alt="wide-project-img" />
          </picture>
        </motion.div>
      );
    }
    return null;
  });

  const changeProject = (index) => {
    console.log(index);
    setProjectIndex(index);
  };

  const checkButtonSelected = (index) => {
    return index === projectIndex ? `${styles.project_button} ${styles.selected}` : styles.project_button;
  };

  return (
    <div className={styles.project_slider_outer_container} id="projects">
      <div className={styles.project_slider_inner_container}>
        <div className={styles.project_slider_container}>
          <div className={styles.header}>
            <h3 className={styles.header_inner}>
              {english ? (
                <AnimatePresence mode="wait">
                  <motion.p key="red" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    Real Estate <br /> Development
                  </motion.p>
                </AnimatePresence>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.p key="blue" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    Kiinteistökehitys
                  </motion.p>
                </AnimatePresence>
              )}
            </h3>
          </div>
          {projectArray.map((project, index) => {
            return (
              <button className={checkButtonSelected(index)} key={index} onClick={() => changeProject(index)}>
                {project.name}
              </button>
            );
          })}
        </div>
        <div className={styles.mobile_header}>
          <h3 className={styles.header_inner}>{animateTextChange('', english, 'Real Estate Development', 'Kiinteistökehitys')}</h3>
        </div>
        <Link href={projectArray[projectIndex].projectPage} className={styles.mainpage_project_link}>
          {content}
        </Link>
        <select className={styles.mobile_project_select} value={projectIndex} onChange={(e) => changeProject(e.target.value)}>
          {projectArray.map((project, index) => {
            return (
              <option value={index} key={index}>
                {project.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}