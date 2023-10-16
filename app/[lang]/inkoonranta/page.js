import ProjectPage from "@/components/ProjectPage/ProjectPage";
import { ProjectArray } from "@/utils/Array";

export const metadata = {
    title: 'Inkoonranta | Elämänlaatua meren äärellä.',
    description: `Inkoonranta on elämänlaatua meren äärellä. Se on omaa rauhaa ja naapurihenkeä, sulassa sovussa. Iloinen Inkoonranta on valinta, ilman luopumista.`,
}

export default function Turku({ params: { lang } }) {
    const projectArray = ProjectArray();
    const languagePack = lang === 'en' ? projectArray[4].english : projectArray[4].finnish
    return <ProjectPage arrayObject={projectArray[4]} languagePack={languagePack} />
}