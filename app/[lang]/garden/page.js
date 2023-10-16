import ProjectPage from "@/components/ProjectPage/ProjectPage";
import { ProjectArray } from "@/utils/Array";
import Head from "next/head";

export const metadata = {
    title: 'Garden Helsinki',
    description: `Garden Helsinki on Töölöön, Nordenskiöldinkadun varrelle suunnitteilla oleva kiinteistökehityshanke. Gardeniin suunnitellaan modernia kansainvälisen tason tapahtuma-areenaa ja sen ympärille kehitettäviä kattavia oheispalveluja sekä jokapäiväisiä palveluita kaupunkilaisten käyttöön.`,
}

export default function Turku() {
    const projectArray = ProjectArray();
    return (
        <div>
            <ProjectPage arrayObject={projectArray[0]} projectIndex={0} />
        </div>
    )
}