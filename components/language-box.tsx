"use client";

import { motion } from "motion/react";
import Image from "next/image";

type LanguageBoxProps = {
    data: {
      name: string;
      url: string;
    }[];
};

const LanguageBox = ({ data } : LanguageBoxProps) => {
  return (
    data.map((item,index) => (
      <motion.div
          key={index}
          className="flex items-center gap-2 w-fit border border-dashed inner-shadow mx-2 px-4 py-1 rounded-lg hover:bg-secondary hover:border-primary transition-all dark:border-zinc-500"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.01, transition: { duration: 0.1, ease: "easeInOut" } }}
      >
          <Image height={1000} width={1000} src={item.url} alt={item.name} draggable={false} className="h-5 w-5" />
          <p className="text-primary cursor-default">
              {item.name}
          </p>
      </motion.div>
    ))
  )
}

export default LanguageBox