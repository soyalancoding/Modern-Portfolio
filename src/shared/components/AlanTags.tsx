import { twMerge } from "tailwind-merge";
// Components
import AlanText from "@/shared/components/AlanText";

interface AlanTagsProps {
  className?: string;
  tags: string[];
}

function AlanTags({ className, tags }: AlanTagsProps) {
  return (
    <>
      <div className={twMerge(className, "flex flex-wrap")}>
        {tags.map((tag, index) => (
          <span
            key={index}
            className="mb-2 mr-2 rounded-xl bg-sky-500 px-2 py-2 lg:px-4"
          >
            <AlanText type="text" color="white" weight="bold" size="xsmall">
              {tag}
            </AlanText>
          </span>
        ))}
      </div>
    </>
  );
}

export default AlanTags;
