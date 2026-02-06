"use client";

import AboutMe from "@/app-components/about-me/about-me";
import Experience from "@/app-components/experience/experience";
import Footer from "@/app-components/footer/footer";
import GitHubCalendarComp from "@/app-components/github-calender";
import Hobbies from "@/app-components/hobbies/hobbies";
import ProfileSection from "@/app-components/profile/profile";
import Social from "@/app-components/socials/social";
import TechStack from "@/app-components/tech-stack/tech-stack";
import { useEffect, useState } from "react";
import { ReactLenis } from 'lenis/react';
import Projects from "@/app-components/projects/projects";
import UserCommandBox from "@/app-components/command-box";
import LineDivider from "@/app-components/line-divider";

export default function Home() {
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
        <AboutMe />
        <Social />
        <LineDivider />
        <Experience />
        <LineDivider />
        <Projects />
        <LineDivider />
        <GitHubCalendarComp />
        <LineDivider />
        <TechStack />
        <LineDivider />
        <Hobbies />
        <LineDivider />
        <Footer />
        <div className="pointer-events-none fixed bottom-0 left-0 right-0 h-24 
          backdrop-blur-3xl
          bg-white/30 dark:bg-black/30
          mask-[linear-gradient(to_top,black,transparent)]">
        </div>
      </div>
    </>
  );
}
