import ProjectPage from "@/components/ProjectPage/ProjectPage";
import { ProjectArray } from "@/utils/Array";
import Head from "next/head";

export const metadata = {
    title: 'Hämeensaari | Asuntoja, majoitusta, kaupallisia tiloja, pysäköintiä.',
    description: `Hämeenlinnan keskustakehityshanke on vetovoimainen keskustan laadukkain asuinalue ja palveluijen keskittymä. Kokonaisuus muodostuu asunnoista, majoituksesta, kaupallisista palveluista, pysäköintilaitoksesta ja Vanajaveden rannan kaupunkipuistosta.`,
}

export default function Turku() {
    const projectArray = ProjectArray();
    return (
        <div>
            <ProjectPage arrayObject={projectArray[3]} projectIndex={3} />
        </div>
    )
}