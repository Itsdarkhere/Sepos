import styles from './page.module.css'
import EntryView from '@/components/EntryView/EntryView'
import ProjectSlider from '@/components/ProjectSlider/ProjectSlider';
import Companies from '@/components/Companies/Companies';
// import About from '@/components/About/About';
import Contacts from '@/components/Contacts/Contacts';
import { ProjectArray, CompanyArray } from '@/utils/Array';

export const metadata = {
  title: 'Sepos Oy | Kiinteistökehitys',
  description: `Sepos Oy is a company founded in 2014 and owned by Timo Everi, Ilkka Kilpimaa 
  and NasdaqOMX Helsinki listed Taaleri Sijoitus Oy. The Company's field of activity is real estate development
  and investing in companies operating in the active lifestyle value chain.`,
}

export default function Home() {
  const english = true;
  const projectArray = ProjectArray();
  const companyArray = CompanyArray();

  return (
    <main className={styles.main}>
      <EntryView english={english} />
      <ProjectSlider projectArray={projectArray} english={english}/>
      <Companies companyArray={companyArray} english={english}/>
      {/* <About english={english}/> */}
      <Contacts english={english}/>
    </main>
  )
}
