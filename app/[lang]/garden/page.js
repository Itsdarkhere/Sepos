import ProjectPage from "@/components/ProjectPage/ProjectPage";
import { ProjectArray } from "@/utils/Array";

export const metadata = {
    title: 'Garden Helsinki',
    description: `Garden Helsinki on Töölöön, Nordenskiöldinkadun varrelle suunnitteilla oleva kiinteistökehityshanke. Gardeniin suunnitellaan modernia kansainvälisen tason tapahtuma-areenaa ja sen ympärille kehitettäviä kattavia oheispalveluja sekä jokapäiväisiä palveluita kaupunkilaisten käyttöön.`,
}

export default function Turku({ params: { lang } }) {
    const projectArray = ProjectArray();
    const languagePack = lang === 'en' ? projectArray[0].english : projectArray[0].finnish
    return <ProjectPage arrayObject={projectArray[0]} languagePack={languagePack} />
}