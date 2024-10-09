import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

interface AlanTextProps {
  children: React.ReactNode;
  type: string;
  color: string;
}

function AlanText({ children, type, color }: AlanTextProps) {
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
            "font-roboto w-fit font-normal md:text-base lg:text-lg",
            color === "white"
              ? "text-white"
              : color === "black"
                ? "text-black"
                : color === "gray"
                  ? "text-gray-400"
                  : "bg-gradient-to-r from-sky-400 to-amber-500 bg-clip-text text-transparent",
          )}
        >
          {children}
        </p>
      ) : null}
    </>
  );
}

export default AlanText;
