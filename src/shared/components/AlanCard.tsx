import { twMerge } from "tailwind-merge";
// Components
import AlanLazyLoad from "./AlanLazyLoad";
import AlanText from "./AlanText";

interface AlanCardProps {
  img: string;
  name: string;
  web: string;
  body: string;
}

function AlanCard({ img, name, web, body }: AlanCardProps) {
  return (
    <>
      <figure
        className={twMerge(
          "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          "border-sky-400/[.6] bg-sky-400/[.01] duration-100 hover:scale-110 hover:bg-sky-400/[.1]",
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <AlanLazyLoad
            src={img}
            alt="Alan Coding"
            className="w-8 rounded-full"
          />

          <div className="flex flex-col">
            <figcaption>
              <AlanText type="text" color="black" weight="bold" size="small">
                {name}
              </AlanText>
            </figcaption>

            <AlanText type="text" color="black" weight="default" size="xsmall">
              {web}
            </AlanText>
          </div>
        </div>

        <blockquote className="mt-2">
          <AlanText type="text" color="black" weight="default" size="small">
            {body}
          </AlanText>
        </blockquote>
      </figure>
    </>
  );
}

export default AlanCard;
