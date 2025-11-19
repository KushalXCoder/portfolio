import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const TechStack = () => {
    const languages = [
        { name: "javascript", path: "javascript" },
    ];

    const frameworks = [
        { name: "jquery", path: "jquery" },
        { name: "json-schema", path: "json-schema" },
        { name: "motion", path: "motion" },
        { name: "reactrouter", path: "reactrouter" },
        { name: "shadcn-ui", path: "shadcn-ui" },
        { name: "radix-ui", path: "radix-ui" },
        { name: "tanstack", path: "tanstack" },
        { name: "zod", path: "zod" },
        { name: "magicui", path: "magicui" },
    ];

    const tools = [
        { name: "npm", path: "npm" },
        { name: "prettier-icon", path: "prettier-icon" },
        { name: "vscode", path: "vscode" },
        { name: "dotenv", path: "dotenv" },
        { name: "redis", path: "redis" },
    ];

    const services = [
        { name: "authjs", path: "authjs" },
        { name: "vercel", path: "vercel" },
        { name: "shopify", path: "shopify" },
        { name: "linux", path: "linux" },
        { name: "github", path: "github" },
        { name: "copilot", path: "copilot" },
        { name: "discord", path: "discord" },
        { name: "vitejs", path: "vitejs" },
    ];

    const stack = [
        { name: "languages", items: languages},
        { name: "frameworks", items: frameworks},
        { name: "tools", items: tools},
        { name: "services", items: services}
    ];
  
  return (
    <div id="stack" className="mt-5">
        <h3 className="text-gray-500">Featured</h3>
        <h1 className="text-2xl font-bold">My Stack</h1>    
        <div className="flex flex-col gap-2 mt-5">
            {stack.map((tech,index) => (
                <div key={index}>
                    <h1 className="capitalize mb-1">{tech.name}</h1>
                    <div className="flex flex-wrap items-center gap-3">
                        {tech.items.map((item,index) => (
                            <div key={index}>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Image
                                            src={`/${item.path}${item.name === "zustand" ? ".png" : ".svg"}`}
                                            alt={item.name}
                                            height={1000}
                                            width={1000}
                                            priority
                                            draggable={false}
                                            className="h-14 w-14 border border-dashed p-2 rounded-lg opacity-80 hover:opacity-100 hover:border-primary transition-all"
                                        />
                                    </TooltipTrigger>
                                    <TooltipContent className="font-poppins">
                                        <p>{item.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TechStack