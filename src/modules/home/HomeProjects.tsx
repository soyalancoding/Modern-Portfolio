// Components
import AlanTitle from "@/shared/components/AlanTitle";
import AlanBentoGrid from "@/shared/components/AlanBentoGrid";
// Json
import { cardsProjectsHome } from "@/config/cardsProjectsHome.json";

function HomeProjects() {
  return (
    <>
      <div className="flex flex-col gap-3 px-[30px] py-[30px] xl:px-[220px]">
        <div className="mb-2 grid justify-items-center">
          <AlanTitle type="title" color="black" size="xxlarge" weight="bold">
            Proyectos.
          </AlanTitle>
        </div>

        <AlanBentoGrid cardsProps={cardsProjectsHome} />
      </div>
    </>
  );
}

export default HomeProjects;
