import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

interface AlanAnchorProps {
  children: React.ReactNode;
  type: string;
  color: string;
  href: string;
}

function AlanAnchor({ children, type, color, href }: AlanAnchorProps) {
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
              "font-roboto font-normal hover:cursor-pointer hover:text-sky-400 md:text-base lg:text-lg",
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
          </a>
        </div>
      ) : null}
    </>
  );
}

export default AlanAnchor;
