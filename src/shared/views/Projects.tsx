import { useEffect } from "react";
// Components
import ProjectsMain from "@/modules/projects/ProjectsMain";
import ProjectsCards from "@/modules/projects/ProjectsCards";

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-0 bg-white px-[30px] py-[30px] xl:grid-cols-6 xl:gap-8 xl:px-[220px] dark:bg-neutral-950">
        <div className="col-span-2">
          <ProjectsMain />
        </div>

        <div className="col-span-4 mb-6">
          <ProjectsCards />
        </div>
      </div>
    </>
  );
}

export default Projects;
