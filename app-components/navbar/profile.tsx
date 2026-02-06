"use client";

import { motion } from "motion/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { cn } from "@/lib/utils";

type ProfileProps = {
  className?: string;
};

const Profile = ({ className } : ProfileProps) => {
  return (
    <Tooltip>
        <TooltipTrigger className="block">
            <motion.img
              initial={{ borderRadius: "100%" }}
              whileHover={{ borderRadius: "10%", transition: { duration: 0.5, ease: "easeInOut" } }}
              src="/profile.jpg"
              alt="Profile"
              height={1000}
              width={1000}
              draggable={false}
              className={cn(className)}
            />
        </TooltipTrigger>
        <TooltipContent className="font-poppins">
            Dali Mask
        </TooltipContent>
    </Tooltip>
  )
}

export default Profile