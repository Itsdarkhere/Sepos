import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectSlider.module.css";

export default function ProjectTwo({project, lang, projectIndex}) {

    return (
        <Link
        href={project.projectPage}
      className={
        "w-full cursor-pointer relative overflow-hidden rounded-md flex justify-start items-end cursor-pointer"
      }
      key={projectIndex} // Consider using a more unique key
    >
      <div
        className={
          `w-full z-10 px-2 pt-6 pb-8 flex flex-col justify-center ${'items-start'} md:items-center`
        }
      >
        <h4 className={`font-semibold text-white text-3xl ${' mb-1 md:mb-2'}`}>{project.name}</h4>
        <p
          className={
            ` $ max-w-[600px] line-clamp-2 mb-8 text-sm md:text-base font-light text-neutral-300 text-start md:text-center`
          }
        >
          {lang === "en"
            ? project.english.description
            : project.finnish.description}
        </p>
        <div
          className={
            " flex flex-row absolute bottom-0 left-0 py-1 text-sm px-3 text-neutral-900 font-bold bg-neutral-200 bg-opacity-80 rounded-tr-md"
          }
        >
          {lang === "en" ? "Learn More" : "Lue lisää"}
          {/* <Image height={20} className={" text-neutral-900"} src={arrowIcon} alt='arrow icon' /> */}
        </div>
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
    </Link>
    )
}