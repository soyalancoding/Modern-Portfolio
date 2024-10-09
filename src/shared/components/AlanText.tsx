import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
// Helpers
import { setColors, setSizes, setWeights } from "../helpers/setClasses";

interface AlanTextProps {
  children: React.ReactNode;
  type: string;
  color: "white" | "black" | "gray" | "default";
  weight?: "bold" | "default";
}

function AlanText({ children, type, color, weight }: AlanTextProps) {
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
            "font-roboto w-fit",
            setSizes("large"),
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
