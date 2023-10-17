import ProjectPage from "@/components/ProjectPage/ProjectPage";
import { ProjectArray } from "@/utils/Array";

export async function generateMetadata({params}) {
    if (params?.lang === 'en') {
      return {
        title: 'Turun Ratapiha | Sepos Oy',
        description: `The Turku Ratapiha development unites the areas separated by the railway yard area and 
        contributes to expanding the city’s cultural-, events- and experience offerings. 
        A vibrant city center needs jobs, city center living and modern facilities to produce cultural, entertainment and 
        exercise services that enrichen people’s life’s.`,
        openGraph: {
          title: 'Turun Ratapiha | Sepos Oy',
          description: `The Turku Ratapiha development unites the areas separated by the railway yard area and 
          contributes to expanding the city’s cultural-, events- and experience offerings. 
          A vibrant city center needs jobs, city center living and modern facilities to produce cultural, entertainment and 
          exercise services that enrichen people’s life’s.`,
          url: 'https://www.sepos.fi/en/turku',
          siteName: 'Sepos Oy',
          images: [
            {
              url: 'https://ik.imagekit.io/s93qwyistj0/pics-highres/1_piPj1mCE5r.webp?updatedAt=1653664951654',
              width: 600,
              height: 450,
              alt: 'My custom alt',
            },
            {
              url: 'https://ik.imagekit.io/s93qwyistj0/pics-highres/turku-1_oyf-qKp8vR.jpg?updatedAt=1653664944232',
              width: 2000,
              height: 1125,
            },
          ],
          locale: 'en',
          type: 'website',
        },
        twitter: {
          card: 'summary_large_image',
          title: 'Turun Ratapiha | Sepos Oy',
          description: `The Turku Ratapiha development unites the areas separated by the railway yard area and 
          contributes to expanding the city’s cultural-, events- and experience offerings. 
          A vibrant city center needs jobs, city center living and modern facilities to produce cultural, entertainment and 
          exercise services that enrichen people’s life’s.`,
          images: ['https://ik.imagekit.io/s93qwyistj0/pics-highres/turku-1_oyf-qKp8vR.jpg?updatedAt=1653664944232'],
        },
      }
    }
  
    return {
      title: 'Turun Ratapiha | Sepos Oy',
      description: `Turun Ratapiha -hanke monipuolistaa osaltaan Turun kaupunkikeskustan tapahtuma-, kulttuuri- ja elämystarjontaa ja lisää sen vetovoimaisuutta ja yhdistää ratapiha-alueen erottamia kaupunginosia toisiinsa.`,
      openGraph: {
        title: 'Turun Ratapiha | Sepos Oy',
        description: `Turun Ratapiha -hanke monipuolistaa osaltaan Turun kaupunkikeskustan tapahtuma-, kulttuuri- ja elämystarjontaa ja lisää sen vetovoimaisuutta ja yhdistää ratapiha-alueen erottamia kaupunginosia toisiinsa.`,
        url: 'https://www.sepos.fi/fi/turku',
        siteName: 'Sepos Oy',
        images: [
            {
              url: 'https://ik.imagekit.io/s93qwyistj0/pics-highres/1_piPj1mCE5r.webp?updatedAt=1653664951654',
              width: 600,
              height: 450,
              alt: 'My custom alt',
            },
            {
              url: 'https://ik.imagekit.io/s93qwyistj0/pics-highres/turku-1_oyf-qKp8vR.jpg?updatedAt=1653664944232',
              width: 2000,
              height: 1125,
            },
        ],
        locale: 'fi',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Turun Ratapiha | Sepos Oy',
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