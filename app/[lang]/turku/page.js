import ProjectPage from "@/components/ProjectPage/ProjectPage";
import { ProjectArray } from "@/utils/Array";

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
          url: 'https://www.sepos.fi/en/turku',
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
          locale: 'fi',
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
      title: 'Turun Ratapiha | Uusi kaupunginosa täynnä tapahtumia ja elämyksiä',
      description: `Turun Ratapiha -hanke monipuolistaa osaltaan Turun kaupunkikeskustan tapahtuma-, kulttuuri- ja elämystarjontaa ja lisää sen vetovoimaisuutta ja yhdistää ratapiha-alueen erottamia kaupunginosia toisiinsa.`,
      openGraph: {
        title: 'Turun Ratapiha | Uusi kaupunginosa täynnä tapahtumia ja elämyksiä',
        description: `Turun Ratapiha -hanke monipuolistaa osaltaan Turun kaupunkikeskustan tapahtuma-, kulttuuri- ja elämystarjontaa ja lisää sen vetovoimaisuutta ja yhdistää ratapiha-alueen erottamia kaupunginosia toisiinsa.`,
        url: 'https://www.sepos.fi/fi/turku',
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
        title: 'Turun Ratapiha | Uusi kaupunginosa täynnä tapahtumia ja elämyksiä',
        description: `Turun Ratapiha -hanke monipuolistaa osaltaan Turun kaupunkikeskustan tapahtuma-, kulttuuri- ja elämystarjontaa ja lisää sen vetovoimaisuutta ja yhdistää ratapiha-alueen erottamia kaupunginosia toisiinsa.`,
        images: ['https://ik.imagekit.io/s93qwyistj0/pics-highres/garden-4_QcB330_WN.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664961374'],
      },
    }
}
  

export default function Turku({ params: { lang } }) {
    const projectArray = ProjectArray();
    const languagePack = lang === 'en' ? projectArray[1].english : projectArray[1].finnish
    return <ProjectPage arrayObject={projectArray[1]} languagePack={languagePack} />
}