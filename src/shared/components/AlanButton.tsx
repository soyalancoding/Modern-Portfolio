import React from "react";

interface AlanButtonProps {
  children: React.ReactNode;
  clickButton: () => void;
}

function AlanButton({ children, clickButton }: AlanButtonProps) {
  return (
    <>
      <div className="w-fit rounded-lg bg-gradient-to-r from-sky-400 to-amber-500">
        <button
          className="relative -left-[5px] -top-[5px] z-10 rounded-lg bg-black px-5 py-3 duration-200 ease-in-out hover:left-0 hover:top-0"
          onClick={() => clickButton()}
        >
          {children}
        </button>
      </div>
    </>
  );
}

export default AlanButton;
