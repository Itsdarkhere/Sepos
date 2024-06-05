import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import arrowIcon from "../../public/arrow-icon.svg";
import styles from "./ProjectSlider.module.css";

export default function Project({project, lang, projectIndex}) {
  return (
    <motion.div
      className={
        "w-full h-full relative flex justify-start items-end overflow-hidden cursor-pointer"
      }
      key={projectIndex} // Consider using a more unique key
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={
          " w-full z-10 px-4 md:px-8 py-6 md:py-24 flex flex-col justify-center items-start md:items-center"
        }
      >
        <h4 className={" font-semibold text-white text-3xl mb-2"}>{project.name}</h4>
        <p
          className={
            " max-w-[600px] line-clamp-4 mb-8 text-sm md:text-base font-light text-neutral-200 text-start md:text-center"
          }
        >
          {lang === "en"
            ? project.english.description
            : project.finnish.description}
        </p>
        <Link
          href={project.projectPage}
          className={
            " flex flex-row text-sm border bg-opacity-40 text-white bg-neutral-800 px-4 py-2 border-orange-400 rounded-md gap-2 items-center"
          }
        >
          {lang === "en" ? "Learn More" : "Lue lisää"}
          <Image height={16} className={""} src={arrowIcon} alt='arrow icon' />
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
