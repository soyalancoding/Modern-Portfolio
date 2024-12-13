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
          "relative overflow-hidden rounded-lg border border-sky-400/[.6] bg-sky-400/[.01] p-3",
          className,
        )}
      >
        {children}
      </figure>
    </>
  );
}

export default AlanCardGlobal;
