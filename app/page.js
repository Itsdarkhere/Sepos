import styles from './page.module.css'
import EntryView from '@/components/EntryView/EntryView'
import ProjectSlider from '@/components/ProjectSlider/ProjectSlider';
import { ProjectArray } from '@/utils/Array';

export default function Home() {
  let loaded = false;
  const english = true;
  const projectArray = ProjectArray();
  return (
    <main className={styles.main}>
      <EntryView english={english} loaded={loaded} />
      <ProjectSlider projectArray={projectArray} english={english}/>
    </main>
  )
}
