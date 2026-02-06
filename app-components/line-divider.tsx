import { cn } from "@/lib/utils";

const LineDivider = ({ className } : { className?: string }) => {
    const gradient = "bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.1)_0,rgba(0,0,0,0.04)_2px,transparent_2px,transparent_6px)] dark:bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.2)_0,rgba(255,255,255,0.04)_2px,transparent_2px,transparent_6px)]";
    return (
        <div className={cn(`my-4 h-12 w-full ${gradient}`, className)}></div>
    )
}

export default LineDivider;