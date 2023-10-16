import ProjectPage from "@/components/ProjectPage/ProjectPage";
import { ProjectArray } from "@/utils/Array";
import Head from "next/head";

export const metadata = {
    title: 'Inkoonranta | Elämänlaatua meren äärellä.',
    description: `Inkoonranta on elämänlaatua meren äärellä. Se on omaa rauhaa ja naapurihenkeä, sulassa sovussa. Iloinen Inkoonranta on valinta, ilman luopumista.`,
}

export default function Turku() {
    const projectArray = ProjectArray();
    return (
        <div>
            <ProjectPage arrayObject={projectArray[4]} projectIndex={4} />
        </div>
    )
}