import ProjectPage from "@/components/ProjectPage/ProjectPage";
import { ProjectArray } from "@/utils/Array";

export const metadata = {
    title: 'Hämeensaari | Asuntoja, majoitusta, kaupallisia tiloja, pysäköintiä.',
    description: `Hämeenlinnan keskustakehityshanke on vetovoimainen keskustan laadukkain asuinalue ja palveluijen keskittymä. Kokonaisuus muodostuu asunnoista, majoituksesta, kaupallisista palveluista, pysäköintilaitoksesta ja Vanajaveden rannan kaupunkipuistosta.`,
}

export default function Turku({ params: { lang } }) {
    const projectArray = ProjectArray();
    const languagePack = lang === 'en' ? projectArray[3].english : projectArray[3].finnish
    return  <ProjectPage arrayObject={projectArray[3]} languagePack={languagePack} />
}