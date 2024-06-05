import ProjectPage from "@/components/ProjectPage/ProjectPage";
import { ProjectArray } from "@/utils/Array";

export async function generateMetadata({params}) {
    if (params?.lang === 'en') {
      return {
        title: 'Hämeensaari | Sepos Oy',
        description: `The Hämeenlinna downtown development project is an attractive, high-quality residential area in the city center and a concentration of services. The whole consists of apartments, accommodation, commercial services, a parking facility, and an urban park on the shore of Lake Vanajavesi.`,
        openGraph: {
          title: 'Hämeensaari | Sepos Oy',
          description: `The Hämeenlinna downtown development project is an attractive, high-quality residential area in the city center and a concentration of services. The whole consists of apartments, accommodation, commercial services, a parking facility, and an urban park on the shore of Lake Vanajavesi.`,
          url: 'https://www.sepos.fi/en/hameensaari',
          siteName: 'Sepos Oy',
          images: [
            {
              url: 'https://ik.imagekit.io/s93qwyistj0/pics-highres/garden-4_QcB330_WN.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664961374',
              width: 400,
              height: 250,
              alt: 'My custom alt',
            },
            {
              url: 'https://ik.imagekit.io/s93qwyistj0/pics-highres/3_mPMP68khO.png?updatedAt=1653664961057',
              width: 2000,
              height: 1333,
            },
          ],
          locale: 'en',
          type: 'website',
        },
        twitter: {
          card: 'summary_large_image',
          title: 'Hämeensaari | Sepos Oy',
          description: `The Hämeenlinna downtown development project is an attractive, high-quality residential area in the city center and a concentration of services. The whole consists of apartments, accommodation, commercial services, a parking facility, and an urban park on the shore of Lake Vanajavesi.`,
          images: ['https://ik.imagekit.io/s93qwyistj0/pics-highres/garden-4_QcB330_WN.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664961374'],
        },
      }
    }
  
    return {
      title: 'Hämeensaari | Sepos Oy',
      description: `Hämeenlinnan keskustakehityshanke on vetovoimainen keskustan laadukkain asuinalue ja palveluijen keskittymä. Kokonaisuus muodostuu asunnoista, majoituksesta, kaupallisista palveluista, pysäköintilaitoksesta ja Vanajaveden rannan kaupunkipuistosta.`,
      openGraph: {
        title: 'Hämeensaari | Sepos Oy',
        description: `Hämeenlinnan keskustakehityshanke on vetovoimainen keskustan laadukkain asuinalue ja palveluijen keskittymä. Kokonaisuus muodostuu asunnoista, majoituksesta, kaupallisista palveluista, pysäköintilaitoksesta ja Vanajaveden rannan kaupunkipuistosta.`,
        url: 'https://www.sepos.fi/fi/hameensaari',
        siteName: 'Sepos Oy',
        images: [
            {
              url: 'https://ik.imagekit.io/s93qwyistj0/pics-highres/garden-4_QcB330_WN.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664961374',
              width: 400,
              height: 250,
              alt: 'My custom alt',
            },
            {
              url: 'https://ik.imagekit.io/s93qwyistj0/pics-highres/3_mPMP68khO.png?updatedAt=1653664961057',
              width: 2000,
              height: 1333,
            },
        ],
        locale: 'fi',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Hämeensaari | Sepos Oy',
        description: `Hämeenlinnan keskustakehityshanke on vetovoimainen keskustan laadukkain asuinalue ja palveluijen keskittymä. Kokonaisuus muodostuu asunnoista, majoituksesta, kaupallisista palveluista, pysäköintilaitoksesta ja Vanajaveden rannan kaupunkipuistosta.`,
        images: ['https://ik.imagekit.io/s93qwyistj0/pics-highres/3_mPMP68khO.png?updatedAt=1653664961057'],
      },
    }
}
  

export default function Turku({ params: { lang } }) {
    const projectArray = ProjectArray();
    const languagePack = lang === 'en' ? projectArray[3].english : projectArray[3].finnish
    return  <ProjectPage projectArray={projectArray} lang={lang} arrayObject={projectArray[3]} languagePack={languagePack} />
}