import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import styles from "./ProjectSlider.module.css";

const arrowIcon = "/arrow-right3.svg";

export default function Project({
  project,
  lang,
  projectIndex,
  projectPage,
  viewing,
}) {
  return (
    <motion.div
      className={`w-full relative flex rounded-md overflow-hidden justify-start items-end`}
      key={projectIndex}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={`w-full z-10 px-4 md:px-8 py-6 md:py-20 flex flex-col justify-center ${
          projectPage ? " items-center" : "items-start"
        } md:items-center`}
      >
        {viewing && (
          <div className=' bg-neutral-800 px-3 bg-opacity-40 py-1 mb-3 border border-neutral-400 rounded-md  text-sm text-neutral-300 font-regular'>
            {lang === "en" ? "Currently viewing" : "Nyt katselet"}
          </div>
        )}
        <h4
          className={`font-semibold ${viewing ? 'text-neutral-300' : 'text-white'} text-lg md:text-2xl ${
            projectPage ? "mb-4" : " mb-1 md:mb-2"
          }`}
        >
          {project.name}
        </h4>
        <p
          className={` ${
            projectPage && "hidden"
          } max-w-[600px] line-clamp-2 mb-8 text-sm md:text-base font-light text-neutral-200 text-start md:text-center`}
        >
          {lang === "en"
            ? project.english.description
            : project.finnish.description}
        </p>
        {!viewing && (
          <Link
            to={project.projectPage}
            className={
              " flex flex-row text-sm border bg-opacity-40 hover:bg-opacity-80 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-orange-400 text-white bg-neutral-800 px-4 py-2 border-orange-400 rounded-md gap-1 items-center"
            }
          >
            {lang === "en" ? "Learn More" : "Lue lisää"}
            <img
              className="h-5 w-5"
              src={arrowIcon}
              alt='arrow icon'
            />
          </Link>
        )}
      </div>
      <img
        src={project.displayImage[0]}
        className={`absolute inset-0 ${styles.project_mainpage_image}`}
        alt='wide-project-img'
      />
    </motion.div>
  );
}
