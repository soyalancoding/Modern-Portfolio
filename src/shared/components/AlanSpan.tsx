import { twMerge } from "tailwind-merge";
// Helpers
import {
  setColors,
  setSizes,
  setWeights,
} from "@/shared/helpers/handleClasses";

interface AlanSpanProps {
  children: React.ReactNode;
  className?: string;
  color: "white" | "black" | "grayDark" | "gray" | "blue" | "default";
  size?:
    | "xsmall"
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge"
    | "xxxlarge"
    | "xxxxlarge"
    | "default";
  weight?: "bold" | "default";
}

function AlanSpan({ children, className, color, size, weight }: AlanSpanProps) {
  return (
    <>
      <span
        className={twMerge(
          setColors(color),
          setSizes(size || "default"),
          setWeights(weight || "default"),
          className,
        )}
      >
        {children}
      </span>
    </>
  );
}

export default AlanSpan;
