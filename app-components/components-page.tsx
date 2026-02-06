import LineDivider from "@/app-components/line-divider";
import { LinkIcon } from "lucide-react";
import Link from "next/link";

type ComponentsData = {
    name: string,
    link: string,
};

const Components = () => {
    const componentsData: ComponentsData[] = [
        { name: "Debouced Input", link: "/components/debounced-input" },
        { name: "Copy Button", link: "/components/copy-button" },
        { name: "Auth Buttons", link: "/components/auth-buttons" },
    ];
    return (
        <div className='container mx-auto h-[calc(100vh-80px)] max-w-4xl font-poppins px-8'>
            <div className="h-full flex flex-col pt-5">
                <h1 className='text-3xl text-primary font-bold'>Components</h1>
                <p className='text-gray-500 mt-1'>Below, are some of the components created by me. I create components, which every developers use and not found elsewhere.</p>
                <div className="inner-shadow px-5 py-3 w-full rounded-lg my-3">
                    <p className="text-blue-500 text-sm">You will see the installation of components included{" "}
                        <span className="bg-gray-200 px-2 rounded-lg">flowui</span>{" "}.
                        So, no need to worry, flowui, is a UI lib created by me under which all these components are created
                        and maintained {" "}.
                    </p>
                </div>
                <LineDivider />
                <div className="grid grid-cols-2 font-poppins">
                    {componentsData.map((comp: ComponentsData, idx: number) => (
                        <div
                            key={idx}
                            className={`flex justify-between items-center
                            border-r border-b border-dashed border-gray-400 
                          hover:border-gray-600 px-4 py-2 hover:bg-accent group`}
                        >
                            <h1>{comp.name}</h1>
                            <Link href={comp.link}>
                                <LinkIcon className="size-4 hidden group-hover:block" />
                            </Link>
                        </div>
                    ))}
                </div>
                <p className="text-gray-500 text-sm mt-5">Coming Soon...</p>
            </div>
        </div>
    )
}

export default Components