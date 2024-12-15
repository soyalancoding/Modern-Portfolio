import { useState } from "react";
// Components
import AlanTitle from "@/shared/components/AlanTitle";
import AlanBentoGrid from "@/shared/components/AlanBentoGrid";
// Json
import projectsJson from "@/config/projects.json";

function ProjectsCards() {
  const [projects] = useState(projectsJson);

  return (
    <>
      <div className="mt-6 xl:mt-0">
        <AlanTitle type="title" color="black" size="xxxlarge" weight="bold">
          Proyectos
        </AlanTitle>

        <div className="mt-6">
          <AlanBentoGrid itemsProjects={projects} cols={1} height={350} />
        </div>
      </div>
    </>
  );
}

export default ProjectsCards;
