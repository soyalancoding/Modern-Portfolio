// Framer Motion
import { AnimatePresence, motion } from "framer-motion";
// Components
import AlanStairs from "@/shared/components/AlanStairs";

function AlanStairTransition() {
  return (
    <>
      <AnimatePresence>
        <div className="pointer-events-none fixed top-0 right-0 left-0 z-50 flex h-screen w-screen">
          <AlanStairs />
        </div>

        <motion.div
          initial={{ opacity: 1 }}
          key={1}
          animate={{
            opacity: 0,
            transition: { delay: 1.1, duration: 0.3, ease: "easeInOut" },
          }}
          className="pointer-events-none fixed top-0 z-40 h-screen w-screen bg-black"
        />
      </AnimatePresence>
    </>
  );
}

export default AlanStairTransition;
