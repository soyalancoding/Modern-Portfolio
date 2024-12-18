import React from "react";
import { twMerge } from "tailwind-merge";

interface AlanButtonProps {
  children: React.ReactNode;
  fit?: boolean;
  clickButton: () => void;
}

function AlanButton({ children, fit = true, clickButton }: AlanButtonProps) {
  return (
    <>
      <div
        className={twMerge(
          "rounded-lg bg-gradient-to-r from-sky-400 to-amber-500",
          fit === true ? "w-fit" : "w-full",
        )}
      >
        <button
          className={twMerge(
            "relative -left-[5px] -top-[5px] z-10 flex items-center justify-center rounded-lg bg-black px-5 py-3 duration-200 ease-in-out hover:left-0 hover:top-0",
            fit === true ? "w-fit" : "w-full",
          )}
          onClick={() => clickButton()}
        >
          {children}
        </button>
      </div>
    </>
  );
}

export default AlanButton;
