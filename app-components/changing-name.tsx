"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

type ChangingNameProps = {
  name: string;
};

const ChangingName = ({ name } : ChangingNameProps) => {
  const [currName, setCurrName] = useState(name);

  return (
    <div
      onMouseEnter={() => setCurrName("TheCodster")}
      onMouseLeave={() => setCurrName(name)}
      className="inline-block"
    >
      <AnimatePresence mode="wait">
        <motion.h1
          key={currName}
          initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, x: 20, filter: "blur(4px)" }}
          transition={{ duration: 0.2 }}
          className="text-xl lg:text-4xl font-bold overflow-hidden"
        >
          {currName}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default ChangingName;