"use client";

import { motion } from "motion/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";

const socials = [
    { name: "GitHub", icon: "github", link: "https://github.com/KushalXCoder"},
    { name: "LinkedIn", icon: "linkedin", link: "https://www.linkedin.com/in/kushalrathod/" },
    { name: "Gmail", icon: "gmail", link: "mailto:kushalrathod@gmail.com" },
]

const Socials = () => {
  return (
    <div className="flex items-center gap-3 mt-8">
        {socials.map((social,index) => (    
            <Tooltip key={index}>
                <TooltipTrigger>
                    <Link href={social.link} target="_blank">
                        <motion.img
                            src={`./${social.icon}.svg`}
                            alt={social.icon}
                            draggable={false}
                            initial={{ opacity: 0.6 }}
                            whileHover={{ opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }}
                            className="h-9 w-9 opacity-60 hover:opacity-100"
                        />
                    </Link>
                </TooltipTrigger>
                <TooltipContent>
                    <p className="text-sm font-poppins">{social.name}</p>
                </TooltipContent>
            </Tooltip>
        ))}
    </div>
  )
}

export default Socials