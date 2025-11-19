"use client";

import { motion } from "motion/react";
import Image from "next/image";

type LanguageBoxProps = {
    name: keyof typeof links,
};

const links = {
  "React": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/480/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
  "NextJS": "https://img.icons8.com/color/480/nextjs.png",
  "TailwindCSS": "https://img.icons8.com/color/480/tailwindcss.png",
  "TypeScript": "https://img.icons8.com/color/480/typescript.png",
  "NodeJS": "https://img.icons8.com/fluency/96/node-js.png",
}

const LanguageBox = ({ name } : LanguageBoxProps) => {
  return (
    <motion.div
        className="flex items-center gap-2 w-fit border border-dashed inner-shadow mx-2 px-4 py-1 rounded-lg"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02, transition: { duration: 0.5, ease: "easeInOut" } }}
    >
        <Image height={1000} width={1000} src={links[name]} alt={name} draggable={false} className="h-6 w-6" />
        <p className="text-primary">
            {name}
        </p>
    </motion.div>
  )
}

export default LanguageBox