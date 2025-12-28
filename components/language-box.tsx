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
    <>
        {data.map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-2 w-fit border border-dashed inner-shadow px-4 py-1 rounded-lg hover:bg-secondary hover:border-primary transition-all dark:bg-secondary/80 dark:border-zinc-500 mr-1.5 mb-1.5 mt-0.5 md:mt-0"
          >
            <Image
              height={1000}
              width={1000}
              src={item.url}
              alt={item.name}
              draggable={false}
              className="h-5 w-5"
            />
            <span className="text-sm text-primary cursor-default">
              {item.name}
            </span>
          </span>
        ))}
    </>
  )
}

export default LanguageBox