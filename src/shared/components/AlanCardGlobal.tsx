import { twMerge } from "tailwind-merge";

interface AlanCardGlobalProps {
  children: React.ReactNode;
  className?: string;
}

function AlanCardGlobal({ children, className }: AlanCardGlobalProps) {
  return (
    <>
      <figure
        className={twMerge(
          "relative overflow-hidden rounded-lg border border-sky-600/[.6] bg-sky-600/[.01] p-3 dark:border-yellow-400/[.6] dark:bg-yellow-400/[.01]",
          className,
        )}
      >
        {children}
      </figure>
    </>
  );
}

export default AlanCardGlobal;
