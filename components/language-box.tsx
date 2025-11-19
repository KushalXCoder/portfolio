"use client";

import { motion } from "motion/react";

type LanguageBoxProps = {
    name: string;
};

const LanguageBox = ({ name } : LanguageBoxProps) => {
  return (
    <motion.div
        className="inline-flex items-center gap-2 w-fit border border-dashed inner-shadow mx-2 px-4 rounded-lg"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02, transition: { duration: 0.5, ease: "easeInOut" } }}
    >
        <p className="text-primary">
            {name}
        </p>
    </motion.div>
  )
}

export default LanguageBox