import { twMerge } from "tailwind-merge";
// Components
import AlanTitle from "@/shared/components/AlanTitle";
import AlanText from "@/shared/components/AlanText";
import AlanTags from "@/shared/components/AlanTags";
import AlanLazyLoad from "@/shared/components/AlanLazyLoad";

interface AlanBentoItemsProps {
  description: string;
  image: string;
  name: string;
  technologies: string[];
  type: string;
  url: string;
}

interface AlanBentoGridProps {
  itemsProjects: AlanBentoItemsProps[];
  cols: number;
  height: number;
}

function AlanBentoGrid({ itemsProjects, cols, height }: AlanBentoGridProps) {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 lg:gap-6">
        {itemsProjects.map((item, index) => (
          <div
            key={index}
            className={twMerge(
              "relative h-full w-full cursor-pointer overflow-hidden rounded-lg border border-sky-600/[.6] bg-sky-600/[.01] duration-100 hover:scale-105 hover:bg-sky-600/[.1] dark:border-yellow-400/[.6] dark:bg-yellow-400/[.01] dark:hover:bg-yellow-400/[.1]",
              `col-span-${cols}`,
            )}
          >
            <a href={item.url} target="_blank">
              <AlanLazyLoad
                src={`images/projects/${item.image}`}
                alt={item.name}
                className={twMerge(
                  "w-full rounded-xl object-cover",
                  `lg:h-[${height}px]`,
                )}
              />

              <div className="my-2 p-4">
                <AlanTitle type="title" color="gray" weight="bold" size="small">
                  {item.type}
                </AlanTitle>

                <AlanTitle
                  type="title"
                  color="blue"
                  weight="bold"
                  size="xlarge"
                >
                  {item.name}
                </AlanTitle>

                <AlanText
                  className="mt-2"
                  type="text"
                  color="black"
                  weight="default"
                  size="small"
                >
                  {item.description}
                </AlanText>

                <AlanTags className="mt-4" tags={item.technologies} />
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default AlanBentoGrid;
