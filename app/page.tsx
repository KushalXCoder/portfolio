import Active from "@/components/active";
import LanguageBox from "@/components/language-box";
import Profile from "@/components/navbar/profile";
import Speaker from "@/components/speaker";
import TextDisplay from "@/components/text-display";
import { BadgeCheck } from "lucide-react";

export default function Home() {
  const tech = ["React", "NextJS", "TailwindCSS", "TypeScript", "NodeJS"];
  const gradient = "bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.1)_0,rgba(0,0,0,0.04)_2px,transparent_2px,transparent_6px)]";

  return (
    <div className="container mx-auto max-w-4xl min-h-[calc(100vh-80px)] px-8 mt-10 font-poppins z-10">
      <div className="flex w-full h-38 items-end">
        <div className="relative border min-w-38">
          <Profile height={150} width={150} className={`rounded-full border p-0.5 leading-none ${gradient}`} />
          <Active />
        </div>
        <div className="flex flex-col justify-end h-full w-full">
          <div className={`w-full h-full ${gradient}`}></div>
          <div className="flex w-full items-center gap-2 px-4 py-2 border border-b-0 border-l-0">
            <h1 className="text-4xl font-bold">Kushal Rathod</h1>
            <BadgeCheck className="fill-blue-500 h-6 w-6 " />
            <Speaker />
          </div>
          <TextDisplay />
        </div>
      </div>
      <div className={`w-full h-20 my-4 ${gradient}`}></div>
      {/* About Me */}
      <p className="flex flex-col gap-2 text-zinc-600 mt-5 text-lg">
        <span>
          I build scalable and efficient web apps (which are also appealing : ) using 
        </span>
        <span>
          {tech.map((item, index) => {
            return (
              <>
                <LanguageBox key={index} name={item} />
                {console.log(index)}
                {index !== tech.length - 1 && <span>,</span>}
              </>
            )}
          )}
        </span>
      </p>
    </div>
  );
}
