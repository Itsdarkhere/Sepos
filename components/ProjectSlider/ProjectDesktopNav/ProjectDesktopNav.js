import styles from '../ProjectSlider.module.css';
import { motion } from 'framer-motion';
export default function ProjectDesktopNav({projectArray, lang, changeProject, checkButtonSelected}) {
  return (
    <div className={styles.project_slider_container}>
      <div className={styles.header}>
        <h3 className={styles.header_inner}>
          {lang === "en" ? (
            <motion.p
              key='red'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Real Estate <br /> Development
            </motion.p>
          ) : (
            <motion.p
              key='blue'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Kiinteistökehitys
            </motion.p>
          )}
        </h3>
      </div>
      <div className=' pt-4 flex flex-col text-start justify-start items-start'>
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
  );
}
