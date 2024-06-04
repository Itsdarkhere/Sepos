import Title from '@/components/Title';
import styles from '../ProjectSlider.module.css';
import { motion } from 'framer-motion';
export default function ProjectDesktopNav({projectArray, lang, changeProject, checkButtonSelected}) {
  return (
    <div className={styles.project_slider_container}>
      <div className={styles.header}>
        <Title partOne={"REAL ESTATE"} partTwo={"DEVELOPMENT"} />
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
