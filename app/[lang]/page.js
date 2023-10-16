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

export default function Home({ params: { lang } }) {
  const projectArray = ProjectArray();
  const companyArray = CompanyArray();

  return (
    <main className={styles.main}>
      <EntryView lang={lang} />
      <ProjectSlider projectArray={projectArray} lang={lang}/>
      <Companies companyArray={companyArray} lang={lang}/>
      {/* <About english={english}/> */}
      <Contacts lang={lang}/>
    </main>
  )
}
