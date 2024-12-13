import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
// Helpers
import {
  setColors,
  setSizes,
  setWeights,
} from "@/shared/helpers/handleClasses";

interface AlanTitleProps {
  children: React.ReactNode;
  className?: string;
  type: string;
  color: "white" | "black" | "gray" | "blue" | "default";
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

function AlanTitle({
  children,
  className,
  type,
  color,
  size,
  weight,
}: AlanTitleProps) {
  const [typeTitle, setTypeTitle] = useState("title");

  useEffect(() => {
    if (type) {
      setTypeTitle(type);
    }
  }, []);

  return (
    <>
      {typeTitle === "title" ? (
        <h1
          className={twMerge(
            "w-fit font-montserrat",
            setSizes(size || "default"),
            setColors(color),
            setWeights(weight || "default"),
            className,
          )}
        >
          {children}
        </h1>
      ) : null}
    </>
  );
}

export default AlanTitle;
