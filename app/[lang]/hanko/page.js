import ProjectPage from "@/components/ProjectPage/ProjectPage";
import { ProjectArray } from "@/utils/Array";

export const metadata = {
    title: 'Hangon Läntinen Laituri | Kiinteistökehitys',
    description: `Kuningatarvuorelle, Itäsatamaan, merenrantaan ja Hangon palvelujen ääreen rakennetaan noin 80 – 100 asuntoa, vapaa-ajan ja ympärivuotiseen asumiseen.`,
}

export default function Turku({ params: { lang } }) {
    const projectArray = ProjectArray();
    const languagePack = lang === 'en' ? projectArray[5].english : projectArray[5].finnish
    return <ProjectPage arrayObject={projectArray[5]} languagePack={languagePack} />
}