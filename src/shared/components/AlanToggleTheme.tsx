import { useContext } from "react";
import { twMerge } from "tailwind-merge";
// Icons
import { FaMoon, FaSun } from "react-icons/fa";
// Context
import { ThemeContext } from "@/shared/contexts/ThemeContext";

interface AlanToggleThemeProps {
  className?: string;
}

function AlanToggleTheme({ className }: AlanToggleThemeProps) {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("AlanToggleTheme must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <>
      <div className={twMerge("flex items-center justify-center", className)}>
        <button
          onClick={() => toggleTheme()}
          className="group rounded-md p-2 transition-colors duration-200 ease-in-out hover:bg-sky-600/[0.1] dark:hover:bg-yellow-400/[0.1]"
        >
          {theme === "light" ? (
            <FaMoon className="h-5 w-5 text-black dark:text-white" />
          ) : (
            <FaSun className="h-5 w-5 text-black dark:text-white" />
          )}
        </button>
      </div>
    </>
  );
}

export default AlanToggleTheme;
