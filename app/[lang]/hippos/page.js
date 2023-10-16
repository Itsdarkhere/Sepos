import ProjectPage from "@/components/ProjectPage/ProjectPage";
import { ProjectArray } from "@/utils/Array";

export const metadata = {
    title: 'Hippos Jyväskylä | Meidän yhteinen liikunnan ja hyvinvoinnin keskus',
    description: `Hippos on valmistuessaan paitsi kaupunkilaisten kohtaamispaikka, myös Pohjoismaiden merkittävin liikunnan, urheilun ja huippu-urheilun, terveyden edistämisen sekä hyvinvoinnin ja tapahtumien keskus. Lisäksi se yhdistää liikunnan tutkimuksen ja teknologisen tuotekehityksen kansainvälisesti merkittäväksi kokonaisuudeksi.`,
}

export default function Turku({ params: { lang } }) {
    const projectArray = ProjectArray();
    const languagePack = lang === 'en' ? projectArray[2].english : projectArray[2].finnish
    return <ProjectPage arrayObject={projectArray[2]} languagePack={languagePack} />
}