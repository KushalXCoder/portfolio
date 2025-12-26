"use client";

import { useEffect, useState } from "react";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command";
import { Box, Code, Github, Linkedin, Settings, Timer } from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import { useUserStore } from "@/store/user.store";

const suggestions = [
    { icon: <Timer />, title: "Go to Experience", description: "Navigate to the Experience section.", hash: "#experience" },
    { icon: <Box />, title: "Go to Projects", description: "Navigate to the Projects section.", hash: "#projects" },
    { icon: <Code />, title: "Go to Skills", description: "Navigate to the My Stack section.", hash: "#stack" },
];

const otherItems = [
    { icon: <Github />, title: "Go to Code", description: "Navigate to the source code.", link: "https://github.com/KushalXCoder/portfolio" },
    { icon: <Linkedin />, title: "Go to LinkedIn", description: "Navigate to my LinkedIn profile.", link: "https://www.linkedin.com/in/kushalrathod" },
    { icon: <Settings />, title: "Open Settings", description: "Open the settings dialog.", link: "" },
];

const UserCommandBox = () => {
    const router = useRouter();
    const { open, setOpen, setOpenSettings } = useUserStore();
    let hashName : string;

    if (typeof window !== 'undefined') {
        hashName = window.location.hash;
    }

    useEffect(() => {
        if (open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "none";
    }, [open]);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if(open) return;

            if(e.key === "s" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen(true);
            }
        }

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);
    return (
        <CommandDialog open={open} onOpenChange={setOpen} className="font-poppins">
            <CommandInput placeholder="Type a command to search..." />
            <CommandList>
                <CommandEmpty className="px-4 py-2">No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    {suggestions.map((suggestion) => (    
                        <CommandItem
                            onSelect={() => {
                                setOpen(false);
                                if(hashName === suggestion.hash) return;
                                router.push(suggestion.hash);
                            }}
                            className="flex items-center gap-3"
                        >
                            {suggestion.icon}
                            <div>
                                <h1 className="font-semibold">{suggestion.title}</h1>
                                <p className="text-sm text-gray-500">{suggestion.description}</p>
                            </div>
                        </CommandItem>
                    ))}
                </CommandGroup>
                <CommandGroup heading="Other Items">
                    {otherItems.map((item) => (
                        <CommandItem
                            onSelect={() => {
                                setOpen(false);
                                if(item.title === "Open Settings") {
                                    console.log("Opening Settings");
                                    setOpenSettings(true);
                                } else {
                                    router.push(item.link as string);
                                }
                            }}
                            className="flex items-center gap-3"
                        >
                            {item.icon}
                            <div>
                                <h1 className="font-semibold">{item.title}</h1>
                                <p className="text-sm text-gray-500">{item.description}</p>
                            </div>
                        </CommandItem>
                    ))}
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    )
}

export default UserCommandBox;