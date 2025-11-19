"use client";

import Active from "@/components/active";
import ChangingName from "@/components/changing-name";
import GitHubCalendarComp from "@/components/github-calender";
import LanguageBox from "@/components/language-box";
import Profile from "@/components/navbar/profile";
import Setting from "@/components/settings";
import Socials from "@/components/socials";
import Speaker from "@/components/speaker";
import TextDisplay from "@/components/text-display";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Settings } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const tech = ["React", "NextJS", "TailwindCSS", "TypeScript", "NodeJS"];
  const gradient = "bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.1)_0,rgba(0,0,0,0.04)_2px,transparent_2px,transparent_6px)]";

  return (
    <div className="container mx-auto max-w-4xl min-h-[calc(100vh-80px)] px-8 my-10 font-poppins z-10">
      <div className="flex w-full h-38 items-end">
        <div className="relative border min-w-38">
          <Profile height={150} width={150} className={`rounded-full border p-0.5 leading-none ${gradient}`} />
          <Active />
        </div>
        <div className="flex flex-col justify-end h-full w-full">
          <div className={`w-full h-full ${gradient}`}></div>
          <div className="flex w-full h-35 justify-between items-center px-4 border border-b-0 border-l-0">
            <div className="flex w-full items-center gap-2 overflow-y-hidden">
              <ChangingName />
              <BadgeCheck className="fill-blue-500 h-6 w-6 " />
              <Speaker name="Kushal Rathod" />
            </div>
            <Setting />
          </div>
          <TextDisplay />
        </div>
      </div>
      <div className={`w-full h-20 my-4 ${gradient}`}></div>
      {/* About Me */}
      <p className="flex flex-wrap whitespace-pre-wrap items-center text-zinc-600 mt-5 text-lg">
        <span>
          I build <span className="font-bold">scalable</span> and <span className="font-bold">efficient</span> web apps (which are also appealing : ) using
        </span>
        {tech.map((item, index) => {
          return (
            <>
              <LanguageBox key={index} name={item} />
              {index !== tech.length - 1 && <span>,</span>}
            </>
          )
        }
        )}
        <span>
          <Link href="/">
            , more...
          </Link>
        </span>
        <span>
          With more interest towards <span className="font-bold">frontend</span> and it&apos;s scalability, I love to explore new tech and building components.
        </span>
      </p>
      {/* Socials & Resume */}
      <Socials />
      <div className="flex items-center mb-8">
        <Button variant="ghost" className="h-10 inner-shadow border px-5 mt-5 cursor-pointer">Resume/CV</Button>
      </div>
      <div className={`w-full h-20 my-4 ${gradient}`}></div>
      {/* GitHub Calendar */}
      <div>
        <div className="mb-5">
          <h3 className="text-gray-500">Featured</h3>
          <h1 className="text-2xl font-bold">GitHub Calendar</h1>
        </div>
        <GitHubCalendarComp />
      </div>
      {/* My Stack */}
      <div className="mt-5">
        <h3 className="text-gray-500">Featured</h3>
        <h1 className="text-2xl font-bold">My Stack</h1>
      </div>
      <div className="w-full flex flex-col items-center text-gray-500 mt-20">
        <p>Developed by <span className="text-primary">Kushal Rathod</span></p>
        <p>Design Inspirations - 
          <span>
            <Link href="https://chanhdai.com/" className="hover:text-primary">
              {" "}Chanh Dai
            </Link>
          </span>
          {" "}&{" "}
          <span>
            <Link href="https://ramx.in/" className="hover:text-primary">
              Ramxcodes
            </Link>
          </span>
        </p>
        <p>© 2025. All rights reserved.</p>
      </div>
    </div>
  );
}
