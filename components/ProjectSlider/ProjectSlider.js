"use client";
import React, { useState } from "react";
import Project from "./Project";

export default function ProjectSlider({ projectArray, lang }) {
  const [projectIndex, setProjectIndex] = useState(0);

  const content = () => {
    const project = projectArray[projectIndex];
    return (
      <Project project={project} lang={lang} projectIndex={projectIndex} projectPage={false} />
    );
  };

  const changeProject = (index) => {
    setProjectIndex(index);
  };

  const checkButtonSelected = (index) => {
    return index === projectIndex
      ? `${" text-neutral-200 text-sm border-b border-b-orange-400 px-4 py-2"}`
      : "text-neutral-400 text-sm border-b border-b-neutral-800 px-4 py-2";
  };

  return (
    <div
      className={
        " w-full bg-neutral-800 flex justify-center items-center pb-16 md:py-16 px-6"
      }
      id='projects'
    >
      <div className={" w-full max-w-7xl flex flex-col"}>
        <div className={" text-start md:text-center"}>
          <h3
            className={
              " text-xl md:text-3xl mb-4 md:mb-6 font-semibold text-neutral-300"
            }
          >
            {lang === "en" ? "Real Estate Development" : "Kiinteistökehitys"}
          </h3>
          <div className=' hidden md:flex flex-row w-full justify-center gap-4 mb-8'>
            {projectArray.map((project, index) => {
              return (
                <button
                  className={checkButtonSelected(index)}
                  key={index}
                  onClick={() => changeProject(index)}
                >
                  {project.name}
                </button>
              );
            })}
          </div>
        </div>
        {/* DESKTOP */}
        <div className='hidden md:block w-full h-full'>{content()}</div>
        {/* MOBILE */}
        <div className="w-full h-full flex flex-col gap-4 md:hidden">
            {projectArray.map((project, i) => {
              return (
                <Project key={i} project={project} lang={lang} projectIndex={i} projectPage={false} />
              )
            })}
        </div>
      </div>
    </div>
  );
}
