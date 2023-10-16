import ProjectPage from "@/components/ProjectPage/ProjectPage";
import { ProjectArray } from "@/utils/Array";

export default function Turku() {
    const projectArray = ProjectArray();
    return (
        <ProjectPage arrayObject={projectArray[3]} projectIndex={3} />
    )
}