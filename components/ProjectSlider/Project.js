import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import arrowIcon from "../../public/arrow-right3.svg";
import styles from "./ProjectSlider.module.css";

export default function Project({project, lang, projectIndex, projectPage}) {
  return (
    <motion.div
      className={
        "w-full relative flex justify-start items-end overflow-hidden cursor-pointer"
      }
      key={projectIndex} // Consider using a more unique key
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={
          `w-full z-10 px-4 md:px-8 py-6 md:py-24 flex flex-col justify-center ${projectPage ? ' items-center' : 'items-start'} md:items-center`
        }
      >
        <h4 className={`font-semibold text-white text-lg ${projectPage ? 'mb-4' : ' mb-1 md:mb-2'}`}>{project.name}</h4>
        <p
          className={
            ` ${projectPage && 'hidden'} max-w-[600px] line-clamp-2 mb-8 text-sm md:text-base font-light text-neutral-200 text-start md:text-center`
          }
        >
          {lang === "en"
            ? project.english.description
            : project.finnish.description}
        </p>
        <Link
          href={project.projectPage}
          className={
            " flex flex-row text-sm border bg-opacity-40 hover:bg-opacity-80 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-orange-400 text-white bg-neutral-800 px-4 py-2 border-orange-400 rounded-md gap-1 items-center"
          }
        >
          {lang === "en" ? "Learn More" : "Lue lisää"}
          <Image height={20} className={""} src={arrowIcon} alt='arrow icon' />
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
}
