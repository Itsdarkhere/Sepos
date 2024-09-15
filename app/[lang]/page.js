import styles from './page.module.css'
import EntryView from '@/components/EntryView/EntryView'
import ProjectSlider from '@/components/ProjectSlider/ProjectSlider';
import Companies from '@/components/Companies/Companies';
// import About from '@/components/About/About';
import Contacts from '@/components/Contacts/Contacts';
import { ProjectArray, CompanyArray } from '@/utils/Array';
import Information from '@/components/Information';

export async function generateMetadata({params}) {
  if (params?.lang === 'en') {
    return {
      title: 'Sepos Oy | Real Estate Development',
      description: `Sepos Oy is a company founded in 2014 and owned by Timo Everi, Ilkka Kilpimaa 
      and NasdaqOMX Helsinki listed Taaleri Sijoitus Oy. The Company's field of activity is real estate development
      and investing in companies operating in the active lifestyle value chain.`,
      openGraph: {
        title: 'Sepos Oy | Real Estate Development',
        description: `Sepos Oy is a company founded in 2014 and owned by Timo Everi, Ilkka Kilpimaa 
        and NasdaqOMX Helsinki listed Taaleri Sijoitus Oy. The Company's field of activity is real estate development
        and investing in companies operating in the active lifestyle value chain.`,
        url: 'https://www.sepos.fi',
        siteName: 'Sepos Oy',
        images: [
          {
            url: 'https://ik.imagekit.io/s93qwyistj0/pics-highres/garden-4_QcB330_WN.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664961374',
            width: 400,
            height: 250,
            alt: 'My custom alt',
          },
          {
            url: 'https://ik.imagekit.io/s93qwyistj0/pics-highres/garden-4_QcB330_WN.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664961374',
            width: 2000,
            height: 1333,
          },
        ],
        locale: 'en',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Sepos Oy | Real Estate Development',
        description: `Sepos Oy is a company founded in 2014 and owned by Timo Everi, Ilkka Kilpimaa 
        and NasdaqOMX Helsinki listed Taaleri Sijoitus Oy. The Company's field of activity is real estate development
        and investing in companies operating in the active lifestyle value chain.`,
        images: ['https://ik.imagekit.io/s93qwyistj0/pics-highres/garden-4_QcB330_WN.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664961374'],
      },
    }
  }

  return {
    title: 'Sepos Oy | Kiinteistökehitys',
    description: `Sepos Oy on vuonna 2014 perustettu Timo Everin, Ilkka Kilpimaan 
    ja NasdaqOMX listatun Taaleri Oyj:n omistama yritys, jonka toimialana on kiinteistökehitys 
    ja sijoittaminen aktiivisen elämäntavan arvoketjussa toimiviin yrityksiin.`,
    openGraph: {
      title: 'Sepos Oy | Kiinteistökehitys',
      description: `Sepos Oy on vuonna 2014 perustettu Timo Everin, Ilkka Kilpimaan 
      ja NasdaqOMX listatun Taaleri Oyj:n omistama yritys, jonka toimialana on kiinteistökehitys 
      ja sijoittaminen aktiivisen elämäntavan arvoketjussa toimiviin yrityksiin.`,
      url: 'https://www.sepos.fi',
      siteName: 'Sepos Oy',
      images: [
        {
          url: 'https://ik.imagekit.io/s93qwyistj0/pics-highres/garden-4_QcB330_WN.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664961374',
          width: 400,
          height: 250,
        },
        {
          url: 'https://ik.imagekit.io/s93qwyistj0/pics-highres/garden-4_QcB330_WN.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664961374',
          width: 2000,
          height: 1333,
        },
      ],
      locale: 'fi',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Sepos Oy | Kiinteistökehitys',
      description: `Sepos Oy on vuonna 2014 perustettu Timo Everin, Ilkka Kilpimaan 
      ja NasdaqOMX listatun Taaleri Oyj:n omistama yritys, jonka toimialana on kiinteistökehitys 
      ja sijoittaminen aktiivisen elämäntavan arvoketjussa toimiviin yrityksiin.`,
      images: ['https://ik.imagekit.io/s93qwyistj0/pics-highres/garden-4_QcB330_WN.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664961374'],
    },
  }
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
