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
          title: 'Hangon Läntinen Laituri | Sepos Oy',
          description: `80 - 100 beach front apartments will be built for seasonal and year-round living at Kuningatarvuori 
          in the Eastern harbour of Hanko city, right next to all the amenities.`,
          images: ['https://ik.imagekit.io/s93qwyistj0/pics-highres/garden-4_QcB330_WN.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664961374'],
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
            url: 'https://ik.imagekit.io/s93qwyistj0/pics-highres/3_mPMP68khO.png?updatedAt=1653664961057',
            width: 600,
            height: 450,
          },
          {
            url: 'https://ik.imagekit.io/s93qwyistj0/pics-highres/hameensaari-1_9Clirhoi9.webp?updatedAt=1653664962692',
            width: 2000,
            height: 1125,
          },
        ],
        locale: 'fi',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Hangon Läntinen Laituri | Sepos Oy',
        description: `Kuningatarvuorelle, Itäsatamaan, merenrantaan ja Hangon palvelujen ääreen rakennetaan noin 80 – 100 asuntoa, vapaa-ajan ja ympärivuotiseen asumiseen.`,
        images: ['https://ik.imagekit.io/s93qwyistj0/pics-highres/garden-4_QcB330_WN.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664961374'],
      },
    }
}
  

export default function Turku({ params: { lang } }) {
    const projectArray = ProjectArray();
    const languagePack = lang === 'en' ? projectArray[5].english : projectArray[5].finnish
    return <ProjectPage arrayObject={projectArray[5]} languagePack={languagePack} />
}