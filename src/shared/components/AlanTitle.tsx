import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

interface AlanTitleProps {
  children: React.ReactNode;
  type: string;
  color: string;
}

function AlanTitle({ children, type, color }: AlanTitleProps) {
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
            "font-montserrat w-fit text-2xl font-bold md:text-3xl lg:text-4xl",
            color === "white"
              ? "text-white"
              : color === "black"
                ? "text-black"
                : "bg-gradient-to-r from-sky-400 to-amber-500 bg-clip-text text-transparent",
          )}
        >
          {children}
        </h1>
      ) : null}
    </>
  );
}

export default AlanTitle;
