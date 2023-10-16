import styles from './page.module.css'
import EntryView from '@/components/EntryView/EntryView'
import ProjectSlider from '@/components/ProjectSlider/ProjectSlider';
import Companies from '@/components/Companies/Companies';
import About from '@/components/About/About';
import Contacts from '@/components/Contacts/Contacts';
import { ProjectArray, CompanyArray } from '@/utils/Array';
import Preloader from '@/components/Preloader/Preloader';

export default function Home() {
  let loaded = true;
  const english = true;
  const projectArray = ProjectArray();
  const companyArray = CompanyArray();
  return (
    <main className={styles.main}>
      <Preloader loaded={loaded} />
      <EntryView english={english} loaded={loaded} />
      <ProjectSlider projectArray={projectArray} english={english}/>
      <Companies companyArray={companyArray} english={english}/>
      {/* <About english={english}/> */}
      <Contacts english={english}/>
    </main>
  )
}
