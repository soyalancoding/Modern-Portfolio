import { twMerge } from "tailwind-merge";
// Components
import AlanLazyLoad from "./AlanLazyLoad";

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
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <AlanLazyLoad
            src={img}
            alt="Alan Coding"
            className="w-8 rounded-full"
          />

          <div className="flex flex-col">
            <figcaption className="font-roboto text-sm font-medium">
              {name}
            </figcaption>

            <p className="font-roboto text-xs font-medium">{web}</p>
          </div>
        </div>

        <blockquote className="mt-2 font-roboto text-sm">{body}</blockquote>
      </figure>
    </>
  );
}

export default AlanCard;
