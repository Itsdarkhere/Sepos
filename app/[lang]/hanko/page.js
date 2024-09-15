import ProjectPage from "@/components/ProjectPage/ProjectPage";
import { ProjectArray } from "@/utils/Array";


export async function generateMetadata({params}) {
    if (params?.lang === 'en') {
      return {
        title: 'Hangon Läntinen Laituri | Sepos Oy',
        description: `80 - 100 beach front apartments will be built for seasonal and year-round living at Kuningatarvuori 
        in the Eastern harbour of Hanko city, right next to all the amenities.`,
        openGraph: {
          title: 'Hangon Läntinen Laituri | Sepos Oy',
          description: `80 - 100 beach front apartments will be built for seasonal and year-round living at Kuningatarvuori 
          in the Eastern harbour of Hanko city, right next to all the amenities.`,
          url: 'https://www.sepos.fi/en/hanko',
          siteName: 'Sepos Oy',
          images: [
            {
              url: 'https://ik.imagekit.io/s93qwyistj0/pics-highres/5_we_gUTVZI.png?updatedAt=1653664959850',
              width: 600,
              height: 450,
              alt: 'My custom alt',
            },
            {
              url: 'https://ik.imagekit.io/s93qwyistj0/pics-highres/hanko-1_DB4odN3fVj.webp?updatedAt=1653664961782',
              width: 1780,
              height: 1000,
            },
          ],
          locale: 'en',
          type: 'website',
        },
        twitter: {
          card: 'summary_large_image',
          title: 'Hangon Läntinen Laituri | Sepos Oy',
          description: `80 - 100 beach front apartments will be built for seasonal and year-round living at Kuningatarvuori 
          in the Eastern harbour of Hanko city, right next to all the amenities.`,
          images: ['https://ik.imagekit.io/s93qwyistj0/pics-highres/hanko-1_DB4odN3fVj.webp?updatedAt=1653664961782'],
        },
      }
    }
  
    return {
      title: 'Hangon Läntinen Laituri | Sepos Oy',
      description: `Kuningatarvuorelle, Itäsatamaan, merenrantaan ja Hangon palvelujen ääreen rakennetaan noin 80 – 100 asuntoa, vapaa-ajan ja ympärivuotiseen asumiseen.`,
      openGraph: {
        title: 'Hangon Läntinen Laituri | Sepos Oy',
        description: `Kuningatarvuorelle, Itäsatamaan, merenrantaan ja Hangon palvelujen ääreen rakennetaan noin 80 – 100 asuntoa, vapaa-ajan ja ympärivuotiseen asumiseen.`,
        url: 'https://www.sepos.fi/fi/hanko',
        siteName: 'Sepos Oy',
        images: [
            {
              url: 'https://ik.imagekit.io/s93qwyistj0/pics-highres/5_we_gUTVZI.png?updatedAt=1653664959850',
              width: 600,
              height: 450,
              alt: 'My custom alt',
            },
            {
              url: 'https://ik.imagekit.io/s93qwyistj0/pics-highres/hanko-1_DB4odN3fVj.webp?updatedAt=1653664961782',
              width: 1780,
              height: 1000,
            },
        ],
        locale: 'fi',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Hangon Läntinen Laituri | Sepos Oy',
        description: `Kuningatarvuorelle, Itäsatamaan, merenrantaan ja Hangon palvelujen ääreen rakennetaan noin 80 – 100 asuntoa, vapaa-ajan ja ympärivuotiseen asumiseen.`,
        images: ['https://ik.imagekit.io/s93qwyistj0/pics-highres/hanko-1_DB4odN3fVj.webp?updatedAt=1653664961782'],
      },
    }
}
  

export default function Turku({ params: { lang } }) {
    const projectArray = ProjectArray();
    const languagePack = lang === 'en' ? projectArray[5].english : projectArray[5].finnish
    return <ProjectPage projectArray={projectArray} lang={lang} arrayObject={projectArray[5]} languagePack={languagePack} />
}