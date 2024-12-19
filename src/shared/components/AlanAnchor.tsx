import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
// Components
import AlanText from "@/shared/components/AlanText";
// Helpers
import {
  setColors,
  setSizes,
  setWeights,
  setHovers,
} from "@/shared/helpers/handleClasses";

interface AlanAnchorProps {
  children: React.ReactNode;
  type: string;
  color: "white" | "black" | "gray" | "default";
  size?:
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge"
    | "xxxlarge"
    | "xxxxlarge"
    | "default";
  weight?: "bold" | "default";
  hover?: "white" | "black" | "gray" | "default";
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

function AlanAnchor({
  children,
  type,
  color,
  size,
  weight,
  hover,
  href,
  target,
}: AlanAnchorProps) {
  const [typeTitle, setTypeTitle] = useState("anchor");

  useEffect(() => {
    if (type) {
      setTypeTitle(type);
    }
  }, []);

  return (
    <>
      {typeTitle === "anchor" ? (
        <div className="max-w-fit">
          <a
            href={href}
            target={target || ""}
            className={twMerge(
              "font-roboto",
              setSizes(size || "large"),
              setColors(color),
              setHovers(hover || "default"),
              setWeights(weight || "default"),
            )}
          >
            {children}
          </a>
        </div>
      ) : null}
    </>
  );
}

export default AlanAnchor;
