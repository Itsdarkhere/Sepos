"use client";
import { motion } from "framer-motion";
import styles from "./ProjectSlider.module.css";
import React, { useState } from "react";
import Image from "next/image";
import arrowIcon from "../../public/arrow-icon.svg";
import Link from "next/link";
import ProjectDesktopNav from "./ProjectDesktopNav/ProjectDesktopNav";
import Project from "./Project/Project";
import Title from "../Title";

export default function ProjectSlider({ projectArray, lang }) {
  const [projectIndex, setProjectIndex] = useState(0);

  const content = () => {
    const project = projectArray[projectIndex];

    return <Project project={project} lang={lang} />
    return (
      <motion.div
        className={styles.mainpage_project_img_container}
        key={projectIndex} // Consider using a more unique key
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.project_mainpage_text_container}>
          <h4 className={`${styles.project_mainpage_text_header} pl-6`}>
            {project.name}
          </h4>
          <p
            className={`${styles.project_mainpage_text_description} max-w-[550px] mb-8 pl-6 pt-2 font-light text-neutral-200 text-lg`}
          >
            {lang === "en"
              ? project.english.description
              : project.finnish.description}
          </p>
          <Link
            href={project.projectPage}
            className={`${styles.project_mainpage_text_link} pl-6`}
          >
            {lang === "en" ? "Learn More" : "Lue lisää"}
            <Image
              height={20}
              className={`${styles.project_mainpage_text_link_img} ml-2`}
              src={arrowIcon}
              alt='arrow icon'
            />
          </Link>
        </div>
        <Image
          fill
          priority
          placeholder='blur'
          src={project.displayImage[0]}
          blurDataURL={
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8NUGpHgAF5QIN93np7gAAAABJRU5ErkJggg=="
          }
          className={styles.project_mainpage_image}
          alt='wide-project-img'
        />
      </motion.div>
    );
  };

  const changeProject = (index) => {
    setProjectIndex(index);
  };

  const checkButtonSelected = (index) => {
    return index === projectIndex
      ? `${styles.project_button} ${styles.selected}`
      : styles.project_button;
  };

  return (
    <div className={" w-full flex justify-center py-12 md:py-24 px-4 md:px-24 bg-neutral-800"} id='projects'>
      <div className={"w-full max-w-[1880px] grid grid-cols-1 md:grid-cols-3"}>
        <ProjectDesktopNav projectArray={projectArray} lang={lang} changeProject={changeProject} checkButtonSelected={checkButtonSelected} />
        {/* <div className={'block md:hidden pb-8'}>
          <h3 className={styles.header_inner}>{lang === 'en' ? 'Real Estate Development' : 'Kiinteistökehitys'}</h3>
        </div> */}
        <div className=" md:hidden pb-8">
          <Title partOne={"REAL ESTATE"} partTwo={"DEVELOPMENT"} />
        </div>
        <div className={`${styles.mainpage_project_link} hidden md:block col-span-2`}>
          {content()}
        </div>
        <div className="w-full flex md:hidden flex-col gap-10">
          {projectArray.map((project, i) => {
            return <Project key={i} project={project} lang={lang} />;
          })}
        </div>
      </div>
    </div>
  );
}
