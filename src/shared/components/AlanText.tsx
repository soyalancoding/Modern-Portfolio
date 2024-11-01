import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
// Helpers
import {
  setColors,
  setSizes,
  setWeights,
} from "@/shared/helpers/handleClasses";

interface AlanTextProps {
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
}

function AlanText({ children, type, color, size, weight }: AlanTextProps) {
  const [typeTitle, setTypeTitle] = useState("text");

  useEffect(() => {
    if (type) {
      setTypeTitle(type);
    }
  }, []);

  return (
    <>
      {typeTitle === "text" ? (
        <p
          className={twMerge(
            "w-fit font-roboto",
            setSizes(size || "default"),
            setColors(color),
            setWeights(weight || "default"),
          )}
        >
          {children}
        </p>
      ) : null}
    </>
  );
}

export default AlanText;
