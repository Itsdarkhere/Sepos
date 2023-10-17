import ProjectPage from "@/components/ProjectPage/ProjectPage";
import { ProjectArray } from "@/utils/Array";

export async function generateMetadata({params}) {
    if (params?.lang === 'en') {
      return {
        title: 'Inkoonranta | Sepos Oy',
        description: `Inkoonranta development is real quality of life by the ocean. It is tranquality, happiness and community
        spirit. In essence Inkoonranta is a choice without waiver.`,
        openGraph: {
          title: 'Inkoonranta | Sepos Oy',
          description: `Inkoonranta development is real quality of life by the ocean. It is tranquality, happiness and community
          spirit. In essence Inkoonranta is a choice without waiver.`,
          url: 'https://www.sepos.fi/en/inkoonranta',
          siteName: 'Sepos Oy',
          images: [
            {
              url: 'https://ik.imagekit.io/s93qwyistj0/pics-highres/4_2_UAksGxlg.png?updatedAt=1653664958435',
              width: 600,
              height: 450,
            },
            {
              url: 'https://ik.imagekit.io/s93qwyistj0/pics-highres/inkoo-1_g_FySAwI-.webp?updatedAt=1653664959274',
              width: 2000,
              height: 1139,
            },
          ],
          locale: 'en',
          type: 'website',
        },
        twitter: {
          card: 'summary_large_image',
          title: 'Inkoonranta | Sepos Oy',
          description: `Inkoonranta development is real quality of life by the ocean. It is tranquality, happiness and community
          spirit. In essence Inkoonranta is a choice without waiver.`,
          images: ['https://ik.imagekit.io/s93qwyistj0/pics-highres/inkoo-1_g_FySAwI-.webp?updatedAt=1653664959274'],
        },
      }
    }
  
    return {
      title: 'Inkoonranta | Sepos Oy',
      description: `Inkoonranta on elämänlaatua meren äärellä. Se on omaa rauhaa ja naapurihenkeä, sulassa sovussa. Iloinen Inkoonranta on valinta, ilman luopumista.`,
      openGraph: {
        title: 'Inkoonranta | Sepos Oy',
        description: `Inkoonranta on elämänlaatua meren äärellä. Se on omaa rauhaa ja naapurihenkeä, sulassa sovussa. Iloinen Inkoonranta on valinta, ilman luopumista.`,
        url: 'https://www.sepos.fi/fi/inkoonranta',
        siteName: 'Sepos Oy',
        images: [
          {
            url: 'https://ik.imagekit.io/s93qwyistj0/pics-highres/4_2_UAksGxlg.png?updatedAt=1653664958435',
            width: 600,
            height: 450,
          },
          {
            url: 'https://ik.imagekit.io/s93qwyistj0/pics-highres/inkoo-1_g_FySAwI-.webp?updatedAt=1653664959274',
            width: 2000,
            height: 1139,
          },
        ],
        locale: 'fi',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Inkoonranta | Sepos Oy',
        description: `Inkoonranta on elämänlaatua meren äärellä. Se on omaa rauhaa ja naapurihenkeä, sulassa sovussa. Iloinen Inkoonranta on valinta, ilman luopumista.`,
        images: ['https://ik.imagekit.io/s93qwyistj0/pics-highres/inkoo-1_g_FySAwI-.webp?updatedAt=1653664959274'],
      },
    }
}
  

export default function Turku({ params: { lang } }) {
    const projectArray = ProjectArray();
    const languagePack = lang === 'en' ? projectArray[4].english : projectArray[4].finnish
    return <ProjectPage arrayObject={projectArray[4]} languagePack={languagePack} />
}