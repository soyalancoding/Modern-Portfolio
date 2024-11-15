// Components
import AlanBentoCard from "./AlanBentoCard";
// Interfaces
import type { ProjectsResponse } from "@/shared/interfaces/Projects.interface";

interface AlanBentoGridProps {
  cardsProps: ProjectsResponse[];
}

function AlanBentoGrid({ cardsProps }: AlanBentoGridProps) {
  return (
    <>
      <div className="grid w-full auto-rows-[9rem] grid-cols-2 gap-4 lg:auto-rows-[20rem] lg:grid-cols-4">
        {cardsProps.map((card, index) => {
          return (
            <AlanBentoCard
              key={index}
              className={card.className}
              description={card.description}
              image={card.image}
              name={card.name}
              url={card.url}
            />
          );
        })}
      </div>
    </>
  );
}

export default AlanBentoGrid;
