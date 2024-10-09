import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
// Helpers
import {
  setColors,
  setSizes,
  setWeights,
  setHovers,
} from "../helpers/setClasses";

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
}

function AlanAnchor({
  children,
  type,
  color,
  size,
  weight,
  hover,
  href,
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
