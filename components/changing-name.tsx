"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const ChangingName = () => {
  const [name, setName] = useState("Kushal Rathod");

  return (
    <div
      onMouseEnter={() => setName("TheCodster")}
      onMouseLeave={() => setName("Kushal Rathod")}
      className="inline-block"
    >
      <AnimatePresence mode="wait">
        <motion.h1
          key={name}
          initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, x: 20, filter: "blur(4px)" }}
          transition={{ duration: 0.2 }}
          className="text-4xl font-bold overflow-hidden"
        >
          {name}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default ChangingName;