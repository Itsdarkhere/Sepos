import { motion } from 'framer-motion';
import styles from '../ProjectSlider.module.css';
import Link from 'next/link';
import Image from 'next/image';
import arrowIcon from '../../../public/arrow-icon.svg'

export default function Project({project, lang}) {
  return (
    <motion.div
      className={`${styles.mainpage_project_img_container} md:h-full outline rounded-md outline-neutral-700 outline-offset-2 md:outline-offset-4 `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`${styles.project_mainpage_text_container} pt-10 pb-6 md:py-8`}>
        <h4 className={`${styles.project_mainpage_text_header} pb-2 text-lg md:text-3xl pl-4 md:pl-6`}>
          {project.name}
        </h4>
        <p
          className={`${styles.project_mainpage_text_description} max-w-[550px] mb-6 md:mb-8 pl-4 md:pl-6 pr-4 pt-2 font-light text-neutral-200 text-sm md:text-lg`}
        >
          {lang === "en"
            ? project.english.description
            : project.finnish.description}
        </p>
        <Link
          href={project.projectPage}
          className={`${styles.project_mainpage_text_link} text-sm md:text-base pl-4 md:pl-6`}
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
}
