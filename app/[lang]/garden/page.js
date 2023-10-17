import ProjectPage from "@/components/ProjectPage/ProjectPage";
import { ProjectArray } from "@/utils/Array";

export async function generateMetadata({params}) {
    if (params?.lang === 'en') {
      return {
        title: 'Garden Helsinki | Sepos Oy',
        description: `Garden Helsinki, a world class event arena embraced by an extensive selection of complimenting amenities, facilities and services is under development in the heart of Helsinki. The arena, utilizing the most advanced technical solutions in the world, will provide elite sports and culture events and attractions for Helsinki residents and visitors on a daily basis all year round.`,
        openGraph: {
          title: 'Garden Helsinki | Sepos Oy',
          description: `Garden Helsinki, a world class event arena embraced by an extensive selection of complimenting amenities, facilities and services is under development in the heart of Helsinki. The arena, utilizing the most advanced technical solutions in the world, will provide elite sports and culture events and attractions for Helsinki residents and visitors on a daily basis all year round.`,
          url: 'https://www.sepos.fi/en/garden',
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
          title: 'Garden Helsinki | Sepos Oy',
          description: `Garden Helsinki, a world class event arena embraced by an extensive selection of complimenting amenities, facilities and services is under development in the heart of Helsinki. The arena, utilizing the most advanced technical solutions in the world, will provide elite sports and culture events and attractions for Helsinki residents and visitors on a daily basis all year round.`,
          images: ['https://ik.imagekit.io/s93qwyistj0/pics-highres/garden-4_QcB330_WN.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664961374'],
        },
      }
    }
  
    return {
      title: 'Garden Helsinki | Sepos Oy',
      description: `Garden Helsinki on Töölöön, Nordenskiöldinkadun varrelle suunnitteilla oleva kiinteistökehityshanke. Gardeniin suunnitellaan modernia kansainvälisen tason tapahtuma-areenaa ja sen ympärille kehitettäviä kattavia oheispalveluja sekä jokapäiväisiä palveluita kaupunkilaisten käyttöön.`,
      openGraph: {
        title: 'Garden Helsinki | Sepos Oy',
        description: `Garden Helsinki on Töölöön, Nordenskiöldinkadun varrelle suunnitteilla oleva kiinteistökehityshanke. Gardeniin suunnitellaan modernia kansainvälisen tason tapahtuma-areenaa ja sen ympärille kehitettäviä kattavia oheispalveluja sekä jokapäiväisiä palveluita kaupunkilaisten käyttöön.`,
        url: 'https://www.sepos.fi/fi/garden',
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
        title: 'Garden Helsinki | Sepos Oy',
        description: `Garden Helsinki on Töölöön, Nordenskiöldinkadun varrelle suunnitteilla oleva kiinteistökehityshanke. Gardeniin suunnitellaan modernia kansainvälisen tason tapahtuma-areenaa ja sen ympärille kehitettäviä kattavia oheispalveluja sekä jokapäiväisiä palveluita kaupunkilaisten käyttöön.`,
        images: ['https://ik.imagekit.io/s93qwyistj0/pics-highres/garden-4_QcB330_WN.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664961374'],
      },
    }
}
  
export default function Turku({ params: { lang } }) {
    const projectArray = ProjectArray();
    const languagePack = lang === 'en' ? projectArray[0].english : projectArray[0].finnish
    return <ProjectPage arrayObject={projectArray[0]} languagePack={languagePack} />
}