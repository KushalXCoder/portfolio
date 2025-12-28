"use client";

import { motion } from "motion/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
    { name: "GitHub", icon: Github, link: "https://github.com/KushalXCoder"},
    { name: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/in/kushalrathod/" },
    { name: "Gmail", icon: Mail, link: "mailto:kushalrathod@gmail.com" },
]

const Socials = () => {
  const { theme } = useTheme(); 
  return (
    <div className="flex items-center gap-2 md:gap-3 mt-5">
        {socials.map((social,index) => (    
            <Tooltip key={index}>
                <TooltipTrigger>
                    <Link href={social.link} target="_blank">
                        <social.icon
                            className="size-5 md:size-6"
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