import ProjectPage from "@/components/ProjectPage/ProjectPage";
import { ProjectArray } from "@/utils/Array";

export const metadata = {
    title: 'Turun Ratapiha | Uusi kaupunginosa täynnä tapahtumia ja elämyksiä',
    description: `Turun Ratapiha -hanke monipuolistaa osaltaan Turun kaupunkikeskustan tapahtuma-, kulttuuri- ja elämystarjontaa ja lisää sen vetovoimaisuutta ja yhdistää ratapiha-alueen erottamia kaupunginosia toisiinsa.`,
}

export default function Turku({ params: { lang } }) {
    const projectArray = ProjectArray();
    const languagePack = lang === 'en' ? projectArray[1].english : projectArray[1].finnish
    return <ProjectPage arrayObject={projectArray[1]} languagePack={languagePack} />
}