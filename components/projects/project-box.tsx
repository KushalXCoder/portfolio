"use client";

import { ArrowUpRightFromCircle, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import StatusButton from "../status-button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface ProjectBoxProps {
    data: {
        name: string;
        image: string;
        description: string;
        tools: {
            name: string;
            url: string;
        }[];
        website: string;
        github: string;
        status: string;
    };
};

const ProjectBox = ({ data } : ProjectBoxProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.3 } }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="col-span-1 flex flex-col border border-dashed hover:border-black/50 transition-colors rounded-lg inner-shadow font-poppins"
        >
            <Image
                src={data.image}
                alt={`${data.name} Image`}
                height={1000}
                width={1000}
                priority
                draggable={false}
                className="h-50 object-cover rounded-t-lg"
            />
            <div className="h-full flex flex-col justify-between px-4 py-3 max-sm:text-sm">
                <div>
                    <div className="flex justify-between items-center">
                        <h1 className="text-lg">{data.name}</h1>
                        <div className="flex items-center gap-2 *:text-gray-500 *:hover:text-gray-700 *:transition-colors">
                            <Link href={data.website} target="_blank">
                                <ArrowUpRightFromCircle className="h-5 w-5" />
                            </Link>
                            <Link href={data.github} target="_blank">
                                <Github className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                    <p className="text-gray-500 mt-2 text-md">{data.description}</p>
                    <div className="mt-3 text-md">
                        <h1 className="font-semibold">Tools</h1>
                        <div className="flex items-center gap-2 mt-1">
                            {data.tools.map((tool) => (
                                <Tooltip key={tool.name}>
                                    <TooltipTrigger>
                                        <Image
                                            key={tool.name}
                                            src={tool.url}
                                            alt={tool.name}
                                            height={1000}
                                            width={1000}
                                            priority
                                            draggable={false}
                                            className="size-6 md:size-8"
                                        />
                                    </TooltipTrigger>
                                    <TooltipContent className="text-sm font-poppins">
                                        <p>{tool.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-5">
                    <StatusButton status={data.status} />
                    <Link href="/" className="text-gray-500 hover:underline">
                        Read More
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectBox;