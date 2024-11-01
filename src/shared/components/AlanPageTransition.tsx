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
          initial={{ opacity: 0.9 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.3, ease: "easeInOut" },
          }}
          className="pointer-events-none fixed top-0 z-40 h-screen w-screen bg-gradient-to-r from-sky-400 to-amber-500"
        />
        {children}
      </AnimatePresence>
    </>
  );
}

export default AlanPageTransition;
