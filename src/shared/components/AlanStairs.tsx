// Framer motion
import { motion } from "framer-motion";

function AlanStairs() {
  // Variants
  const stairAnimation = {
    initial: { top: "100%" },
    animate: {
      top: ["100%", "0%", "100%"],
    },
    exit: {
      top: ["0%", "100%"],
    },
  };

  function reverseIndex(index: number) {
    const totalSteps = 8;
    return totalSteps - index;
  }

  return (
    <>
      {[...Array(8)].map((_, index) => {
        return (
          <motion.div
            key={index}
            className="relative h-full w-full bg-gradient-to-br from-sky-400 to-amber-500"
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
          />
        );
      })}
    </>
  );
}

export default AlanStairs;
