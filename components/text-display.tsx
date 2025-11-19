"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const TextDisplay = () => {
  const text = [
    "Full Stack Developer",
    "Open Source Enthusiast",
    "Frontend Developer",
    "Optimization and SEO",
  ];

  const [currIdx, setCurrIdx] = useState<number>(0);

  useEffect(() => {
      const interval = setTimeout(() => {
        setCurrIdx((currIdx + 1) % text.length);
      }, 3000);
      return () => clearTimeout(interval);
  }, [currIdx, text.length]);


  return (
    <div className="relative h-8 overflow-hidden px-4 py-4 border border-l-0 flex items-center">
        <AnimatePresence>
            <motion.p
                key={currIdx}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.8, ease: "backInOut" }}
                className="absolute"
            >
                {text[currIdx]}
            </motion.p>
        </AnimatePresence>
    </div>
  )
}

export default TextDisplay