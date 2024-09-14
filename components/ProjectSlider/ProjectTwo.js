import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectSlider.module.css";

const ProjectCard = ({ project, lang, projectIndex, viewing }) => {
  const { name, projectPage, displayImage } = project;
  const description = lang === "en" ? project.english.description : project.finnish.description;

  const CardContent = () => (
    <>
      {viewing && (
        <div className="absolute z-10 left-0 top-0 px-2 py-1 bg-orange-400 bg-opacity-45 rounded-br-md text-sm font-regular">
          {lang === "en" ? "Currently viewing" : "Nyt katselet"}
        </div>
      )}
      <div className={`w-full z-10 px-2 ${viewing ? "pt-12 pb-6" : "pt-6 pb-14"} flex flex-col justify-center items-start md:items-center`}>
        <h4 className="font-semibold text-white text-3xl mb-1 md:mb-2">
          {name}
        </h4>
        <p className="max-w-[600px] line-clamp-2 text-sm md:text-base font-light text-neutral-300 text-start md:text-center">
          {description}
        </p>
        {!viewing && (
          <div className="flex flex-row absolute bottom-0 left-0 py-1 text-sm px-3 text-neutral-900 font-bold bg-neutral-200 bg-opacity-80 rounded-tr-md">
            {lang === "en" ? "Learn More" : "Lue lisää"}
          </div>
        )}
      </div>
      <Image
        fill
        priority
        placeholder="blur"
        src={displayImage[0]}
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8NUGpHgAF5QIN93np7gAAAABJRU5ErkJggg=="
        className={styles.project_mainpage_image}
        alt={`${name} project image`}
      />
    </>
  );

  const commonClasses = "w-full relative overflow-hidden rounded-md flex justify-start items-end";

  return viewing ? (
    <div className={`${commonClasses} cursor-default`} tabIndex={0} role="article">
      <CardContent />
    </div>
  ) : (
    <Link
      href={projectPage}
      className={`${commonClasses} cursor-pointer`}
      aria-label={`Learn more about ${name}`}
    >
      <CardContent />
    </Link>
  );
};

export default React.memo(ProjectCard);