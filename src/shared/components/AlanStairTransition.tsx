// Framer Motion
import { AnimatePresence, motion } from "framer-motion";
// Components
import AlanStairs from "./AlanStairs";

function AlanStairTransition() {
  return (
    <>
      <AnimatePresence mode="wait">
        <div className="pointer-events-none fixed left-0 right-0 top-0 z-50 flex h-screen w-screen">
          <AlanStairs />
        </div>

        <motion.div
          initial={{ opacity: 0.6 }}
          animate={{
            opacity: 0,
            transition: { delay: 1.1, duration: 0.3, ease: "easeInOut" },
          }}
          className="pointer-events-none fixed top-0 z-40 h-screen w-screen bg-gradient-to-r from-sky-400 to-amber-500"
        />
      </AnimatePresence>
    </>
  );
}

export default AlanStairTransition;
