import LanguageBox from '../language-box';
import Link from 'next/link';

const links = [
  { name: "React", url: "/technologies/react.svg" },
  { name: "NextJS", url: "/technologies/nextjs.svg" },
  { name: "TailwindCSS", url: "/technologies/tailwind.svg" },
  { name: "TypeScript", url: "/technologies/typescript.svg" },
  { name: "NodeJS", url: "/technologies/nodejs.svg" },
];

const AboutMe = () => {
  return (
    <div>
        <div className="text-gray-500 mt-5">
          <span className='mb-1'>
              I build <span className="font-bold">scalable</span> and{" "}
              <span className="font-bold">efficient</span> web apps (which are also appealing :){" "}
              using{" "}
          </span>
          <LanguageBox data={links} />
          {" "}and{" "}
          <Link href="#stack">more...</Link>
        </div>
        <p className='text-gray-500 mt-1'>
          With more interest towards <span className="font-bold">frontend</span> and it&apos;s scalability, I love to explore new tech and building components.
        </p>
        <p className='italic mt-3 max-sm:text-sm flex flex-col items-end text-gray-500'>
            - building frontend that is efficient and scalable. As, design levitates but performance stays.
            <span className='font-bold'>me</span>
        </p>
    </div>
  )
}

export default AboutMe