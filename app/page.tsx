"use client";

import AboutMe from "@/components/about-me/about-me";
import Experience from "@/components/experience/experience";
import Footer from "@/components/footer/footer";
import GitHubCalendarComp from "@/components/github-calender";
import Hobbies from "@/components/hobbies/hobbies";
import ProfileSection from "@/components/profile/profile";
import Social from "@/components/socials/social";
import TechStack from "@/components/tech-stack/tech-stack";
import { useEffect, useState } from "react";
import { ReactLenis } from 'lenis/react';
import Projects from "@/components/projects/projects";
import UserCommandBox from "@/components/command-box";

export default function Home() {
  const gradient = "bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.1)_0,rgba(0,0,0,0.04)_2px,transparent_2px,transparent_6px)] dark:bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.2)_0,rgba(255,255,255,0.04)_2px,transparent_2px,transparent_6px)]";
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 800); 

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen backdrop-blur-2xl">
        <div className="animate-spin rounded-full h-14 w-14 border-t-2 border-gray-200 border-b-2" />
      </div>
    );
  }

  return (
    <>
      <ReactLenis root />
      <UserCommandBox />
      <div className="w-screen lg:container lg:mx-auto lg:max-w-4xl min-h-[calc(100vh-80px)] px-5 lg:px-8 my-5 md:my-10 font-poppins z-10">
        <ProfileSection />
        {/* <div className={`w-full h-12 my-4 ${gradient}`}></div> */}
        <AboutMe />
        <Social />
        <div className={`w-full h-12 my-4 ${gradient}`}></div>
        <Experience />
        <div className={`w-full h-12 my-4 ${gradient}`}></div>
        <Projects />
        <div className={`w-full h-12 my-4 ${gradient}`}></div>
        <GitHubCalendarComp />
        <div className={`w-full h-12 my-4 ${gradient}`}></div>
        <TechStack />
        <div className={`w-full h-12 my-4 ${gradient}`}></div>
        <Hobbies />
        <div className={`w-full h-12 my-4 ${gradient}`}></div>
        <Footer />
      </div>
    </>
  );
}
