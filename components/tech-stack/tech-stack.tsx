import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const TechStack = () => {
    const languages = [
        { name: "c++", path: "c-plusplus" },
        { name: "javascript", path: "javascript" },
        { name: "typescript", path: "typescript" },
    ];

    const frameworks = [
        { name: "reactjs", path: "react" },
        { name: "nextjs", path: "nextjs" },
        { name: "nodejs", path: "nodejs" },
        { name: "expressjs", path: "expressjs" },
        { name: "json-schema", path: "json-schema" },
        { name: "tanstack", path: "tanstack" },
        { name: "zod", path: "zod" },
        { name: "reactrouter", path: "reactrouter" },
        { name: "motion", path: "motion" },
        { name: "shadcn-ui", path: "shadcn-ui" },
        { name: "radix-ui", path: "radix-ui" },
        { name: "magicui", path: "magicui" },
    ];

    const tools = [
        { name: "mongodb", path: "mongodb" },
        { name: "redis", path: "redis" },
        { name: "dotenv", path: "dotenv" },
        { name: "npm", path: "npm" },
        { name: "vscode", path: "vscode" },
        { name: "prettier-icon", path: "prettier-icon" },
    ];

    const services = [
        { name: "github", path: "github" },
        { name: "vercel", path: "vercel" },
        { name: "vitejs", path: "vitejs" },
        { name: "linux", path: "linux" },
        { name: "authjs", path: "authjs" },
        { name: "copilot", path: "copilot" },
        { name: "discord", path: "discord" },
        { name: "shopify", path: "shopify" },
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
                                            src={`/technologies/${item.path}${item.name === "zustand" ? ".png" : ".svg"}`}
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