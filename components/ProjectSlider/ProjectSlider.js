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
