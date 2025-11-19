"use client";

import AboutMe from "@/components/about-me/about-me";
import Footer from "@/components/footer/footer";
import GitHubCalendarComp from "@/components/github-calender";
import ProfileSection from "@/components/profile/profile";
import Social from "@/components/socials/social";

export default function Home() {
  const gradient = "bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.1)_0,rgba(0,0,0,0.04)_2px,transparent_2px,transparent_6px)]";

  return (
    <div className="container mx-auto max-w-4xl min-h-[calc(100vh-80px)] px-8 my-10 font-poppins z-10">
      <ProfileSection />
      <div className={`w-full h-20 my-4 ${gradient}`}></div>
      <AboutMe />
      <Social />
      <div className={`w-full h-20 my-4 ${gradient}`}></div>
      <GitHubCalendarComp />
      {/* My Stack */}
      <div className="mt-5">
        <h3 className="text-gray-500">Featured</h3>
        <h1 className="text-2xl font-bold">My Stack</h1>
      </div>
      <Footer />
    </div>
  );
}
