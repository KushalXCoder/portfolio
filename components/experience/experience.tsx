import Image from "next/image"
import Link from "next/link"
import LanguageBox from "../language-box";
import { CircleArrowOutUpRight, Instagram } from "lucide-react";

const used_tech = [
  { name: 'NextJS', url: '/technologies/nextjs.svg' },
  { name: 'TypeScript', url: '/technologies/typescript.svg' },
  { name: 'TailwindCSS', url: '/technologies/tailwind.svg' },
  { name: 'Zustand', url: '/technologies/zustand.svg' },
  { name: 'Tanstack', url: '/technologies/tanstack.svg' },
  { name: 'Zod', url: '/technologies/zod.svg' },
  { name: 'ShadCN', url: '/technologies/shadcn-ui.svg' },
  { name: 'Axios', url: '/technologies/axios.svg' },
];

const Experience = () => {
  return (
    <div id="experience">
        <h3 className="text-sm text-gray-500">Featured</h3>
        <h1 className="text-2xl font-bold">Experience</h1>
        {/* Club Duelz */}
        <div className="flex flex-col gap-3 mt-5">
          <div className="flex justify-between items-end">
            <div className="flex items-end gap-3">
              <Link className="inline-block" href="https://www.clubduelz.in/" target="_blank">
                <Image src="/companies/clubduelz.jpg" alt="Club Duelz" width={1000} height={1000} priority draggable={false} className="rounded-lg h-15 w-15 p-1 border border-dashed hover:border-primary" />
              </Link>
              <div className="flex flex-col">
                <h1 className="text-lg font-bold">Club Duelz</h1>
                <p className="text-sm -mt-1 text-gray-500">Frontend Intern</p>
              </div>
            </div>
            <div className="flex flex-col items-end text-gray-500">
              <h1>Sep 2025 - Present</h1>
              <h1 className="-mt-1">India - Remote</h1>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <Link href="https://clubduelz.in" target="_blank">
                <CircleArrowOutUpRight className="h-5 w-5 opacity-50" />
              </Link>
              <Link href="https://www.instagram.com/club.duelz/" target="_blank">
                <Instagram className="h-6 w-6 opacity-50" />
              </Link>
            </div>
            <div className="border rounded-lg bg-green-100 border-green-500 inner-shadow flex items-center gap-2 px-4 py-1">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <p className="text-sm text-black">Working</p>
            </div>
          </div>
          <div>
            <h1 className="text-lg font-bold">Tools & Technologies used</h1>
            <div className="flex flex-wrap gap-y-2 mt-3">
              <LanguageBox data={used_tech} />
            </div>
          </div>
          <div className="*:mt-1 mt-2 px-5 text-lg text-gray-500">
            <li>Refactored all existing data-retrieval flows to use TanStack Query, significantly improving request deduplication, caching efficiency, and client-side performance.</li>
            <li>Built a BookMyShow-style dynamic interest-recommendation module, enabling personalized content surfacing based on real-time user preferences.</li>
            <li>Added a secure user profile creation workflow, including automated NSFW content detection to ensure platform integrity and compliance.</li>
            <li>Developed multiple new service layers using Axios with modular interceptors, improving API reliability, error handling, and scalability.</li>
          </div>
        </div>
        <div className="h-px w-full bg-gray-500/30 my-5"></div>
        {/* Bijoi */}
        <div className="flex flex-col gap-3 mt-5 border border-dashed p-3 rounded-lg">
          <div className="flex justify-between items-end">
            <div className="flex items-end gap-3">
              <Link className="inline-block" href="https://www.bijoi.in/" target="_blank">
                <Image src="/companies/bijoi.avif" alt="Bijoi" width={1000} height={1000} priority draggable={false} className="rounded-lg h-15 w-15 border border-dashed p-1 hover:border-primary" />
              </Link>
              <div className="flex flex-col">
                <h1 className="text-lg font-bold">Bijoi</h1>
                <p className="text-sm -mt-1 text-gray-500">Web Dev Intern</p>
              </div>
            </div>
            <div className="flex flex-col items-end text-gray-500">
              <h1>May 2025 - June 2025</h1>
              <h1 className="-mt-1">India - Onsite</h1>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <Link href="https://www.bijoi.in/" target="_blank">
                <CircleArrowOutUpRight className="h-5 w-5 opacity-50" />
              </Link>
              <Link href="https://www.instagram.com/_bijoi_/" target="_blank">
                <Instagram className="h-6 w-6 opacity-50" />
              </Link>
            </div>
            <div className="border rounded-lg bg-blue-100 border-blue-500 inner-shadow flex items-center gap-2 px-4 py-1">
              <div className="h-3 w-3 rounded-full bg-blue-500"></div>
              <p className="text-sm text-black">Completed</p>
            </div>
          </div>
          {/* <div>
            <h1 className="text-lg font-bold">Tools & Technologies used</h1>
            <div className="flex flex-wrap gap-y-2 mt-3">
              <LanguageBox data={used_tech} />
            </div>
          </div>
          <div className="*:mt-1 mt-2 px-5 text-lg text-gray-500">
            <li>Refactored all existing data-retrieval flows to use TanStack Query, significantly improving request deduplication, caching efficiency, and client-side performance.</li>
            <li>Built a BookMyShow-style dynamic interest-recommendation module, enabling personalized content surfacing based on real-time user preferences.</li>
            <li>Added a secure user profile creation workflow, including automated NSFW content detection to ensure platform integrity and compliance.</li>
            <li>Developed multiple new service layers using Axios with modular interceptors, improving API reliability, error handling, and scalability.</li>
          </div> */}
        </div>
    </div>
  )
}

export default Experience