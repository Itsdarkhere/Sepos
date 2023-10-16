import ProjectPage from "@/components/ProjectPage/ProjectPage";
import { ProjectArray } from "@/utils/Array";
import Head from "next/head";

export const metadata = {
    title: 'Hangon Läntinen Laituri | Kiinteistökehitys',
    description: `Kuningatarvuorelle, Itäsatamaan, merenrantaan ja Hangon palvelujen ääreen rakennetaan noin 80 – 100 asuntoa, vapaa-ajan ja ympärivuotiseen asumiseen.`,
}

export default function Turku() {
    const projectArray = ProjectArray();
    return (
        <div>
            <ProjectPage arrayObject={projectArray[5]} projectIndex={5} />
        </div>
    )
}