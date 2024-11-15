// Framer Motion
import { AnimatePresence, motion } from "framer-motion";

interface AlanPageTransitionProps {
  children: React.ReactNode;
}

function AlanPageTransition({ children }: AlanPageTransitionProps) {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 1 }}
          key={children?.valueOf().toString()}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.3, ease: "easeInOut" },
          }}
          className="pointer-events-none fixed top-0 z-40 h-screen w-screen bg-black"
        />
        {children}
      </AnimatePresence>
    </>
  );
}

export default AlanPageTransition;
