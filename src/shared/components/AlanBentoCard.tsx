import { twMerge } from "tailwind-merge";
// Components
import AlanLazyLoad from "./AlanLazyLoad";
import AlanTitle from "./AlanTitle";

interface AlanBentoCardProps {
  className: string;
  description?: string;
  image: string;
  name?: string;
  url?: string;
}

function AlanBentoCard({
  className,
  description = "",
  image,
  name = "",
  url,
}: AlanBentoCardProps) {
  console.log("AlanBentoCardProps", className, description, image, name, url);

  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={twMerge(
          "group flex cursor-pointer flex-col overflow-hidden rounded-xl border",
          "border-sky-400/[.6] bg-sky-400/[.01] duration-100 hover:scale-105 hover:bg-sky-400/[.1]",
          className,
        )}
      >
        <div className="flex h-full w-full items-center justify-center">
          <AlanLazyLoad
            src={`images/projects/${image}`}
            alt={name}
            className={twMerge(
              "rounded-xl object-cover",
              name === "" ? "h-full" : "lg:h-[18rem]",
            )}
          />
        </div>

        {name !== "" ? (
          <div className="mt-4">
            <AlanTitle type="title" color="black" size="small" weight="bold">
              {name}
            </AlanTitle>
          </div>
        ) : null}
      </a>
    </>
  );
}

export default AlanBentoCard;
