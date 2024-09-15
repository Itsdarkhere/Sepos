import ProjectPage from "@/components/ProjectPage/ProjectPage";
import { ProjectArray } from "@/utils/Array";

export async function generateMetadata({params}) {
    if (params?.lang === 'en') {
      return {
        title: 'Hippos Jyväskylä | Sepos Oy',
        description: `On completion Hippos is not only a meeting place for citizens of Jyväskylä, but also the most 
        significant exercise, professional-sports, health, wellbeing and events center in the Nordic countries. At 
        Hippos sports research and technological product development is combined into a world-class entity.`,
        openGraph: {
          title: 'Hippos Jyväskylä | Sepos Oy',
          description: `On completion Hippos is not only a meeting place for citizens of Jyväskylä, but also the most 
          significant exercise, professional-sports, health, wellbeing and events center in the Nordic countries. At 
          Hippos sports research and technological product development is combined into a world-class entity.`,
          url: 'https://www.sepos.fi/en/hippos',
          siteName: 'Sepos Oy',
          images: [
            {
              url: 'https://ik.imagekit.io/s93qwyistj0/pics-highres/2_-ebonMhRi.png?updatedAt=1653664960613',
              width: 600,
              height: 450,
            },
            {
              url: 'https://ik.imagekit.io/s93qwyistj0/pics-highres/hippos-3_Ms8zCjZOqP.jpg?updatedAt=1653664958297',
              width: 2000,
              height: 1382,
            },
          ],
          locale: 'en',
          type: 'website',
        },
        twitter: {
          card: 'summary_large_image',
          title: 'Hippos Jyväskylä | Sepos Oy',
          description: `On completion Hippos is not only a meeting place for citizens of Jyväskylä, but also the most 
          significant exercise, professional-sports, health, wellbeing and events center in the Nordic countries. At 
          Hippos sports research and technological product development is combined into a world-class entity.`,
          images: ['https://ik.imagekit.io/s93qwyistj0/pics-highres/hippos-3_Ms8zCjZOqP.jpg?updatedAt=1653664958297'],
        },
      }
    }
  
    return {
      title: 'Hippos Jyväskylä | Sepos Oy',
      description: `Hippos on valmistuessaan paitsi kaupunkilaisten kohtaamispaikka, myös Pohjoismaiden merkittävin liikunnan, urheilun ja huippu-urheilun, terveyden edistämisen sekä hyvinvoinnin ja tapahtumien keskus. Lisäksi se yhdistää liikunnan tutkimuksen ja teknologisen tuotekehityksen kansainvälisesti merkittäväksi kokonaisuudeksi.`,
      openGraph: {
        title: 'Hippos Jyväskylä | Sepos Oy',
        description: `Hippos on valmistuessaan paitsi kaupunkilaisten kohtaamispaikka, myös Pohjoismaiden merkittävin liikunnan, urheilun ja huippu-urheilun, terveyden edistämisen sekä hyvinvoinnin ja tapahtumien keskus. Lisäksi se yhdistää liikunnan tutkimuksen ja teknologisen tuotekehityksen kansainvälisesti merkittäväksi kokonaisuudeksi.`,
        url: 'https://www.sepos.fi/fi/hippos',
        siteName: 'Sepos Oy',
        images: [
          {
            url: 'https://ik.imagekit.io/s93qwyistj0/pics-highres/2_-ebonMhRi.png?updatedAt=1653664960613',
            width: 600,
            height: 450,
          },
          {
            url: 'https://ik.imagekit.io/s93qwyistj0/pics-highres/hippos-3_Ms8zCjZOqP.jpg?updatedAt=1653664958297',
            width: 2000,
            height: 1382,
          },
        ],
        locale: 'fi',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Hippos Jyväskylä | Sepos Oy',
        description: `Hippos on valmistuessaan paitsi kaupunkilaisten kohtaamispaikka, myös Pohjoismaiden merkittävin liikunnan, urheilun ja huippu-urheilun, terveyden edistämisen sekä hyvinvoinnin ja tapahtumien keskus. Lisäksi se yhdistää liikunnan tutkimuksen ja teknologisen tuotekehityksen kansainvälisesti merkittäväksi kokonaisuudeksi.`,
        images: ['https://ik.imagekit.io/s93qwyistj0/pics-highres/hippos-3_Ms8zCjZOqP.jpg?updatedAt=1653664958297'],
      },
    }
}
  

export default function Turku({ params: { lang } }) {
    const projectArray = ProjectArray();
    const languagePack = lang === 'en' ? projectArray[2].english : projectArray[2].finnish
    return <ProjectPage projectArray={projectArray} lang={lang} arrayObject={projectArray[2]} languagePack={languagePack} />
}