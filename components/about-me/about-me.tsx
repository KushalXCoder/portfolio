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
        <p className="flex flex-wrap whitespace-pre-wrap items-center text-zinc-600 mt-5">
            <span>
                I build <span className="font-bold">scalable</span> and <span className="font-bold">efficient</span> web apps (which are also appealing : ) using
            </span>
            <LanguageBox data={links} />
            <span>
                <Link href="#stack">
                , more...
                </Link>
            </span>
            <span>
                With more interest towards <span className="font-bold">frontend</span> and it&apos;s scalability, I love to explore new tech and building components.
            </span>
        </p>
        <p className='italic mt-3 flex flex-col items-end'>
            - building frontend that is efficient and scalable. As, design levitates but performance stays.
            <p className='font-bold'>me</p>
        </p>
    </div>
  )
}

export default AboutMe