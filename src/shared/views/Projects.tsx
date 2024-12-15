// Components
import ProjectsMain from "@/modules/projects/ProjectsMain";
import ProjectsCards from "@/modules/projects/ProjectsCards";

function Projects() {
  return (
    <>
      <div className="grid grid-cols-1 gap-0 px-[30px] py-[30px] xl:grid-cols-6 xl:gap-8 xl:px-[220px]">
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
