import LanguageBox from '../language-box';
import Link from 'next/link';

type Name = "React" | "NextJS" | "TailwindCSS" | "TypeScript" | "NodeJS";

const AboutMe = () => {
  const tech = ["React", "NextJS", "TailwindCSS", "TypeScript", "NodeJS"];  
  return (
    <div>
        <p className="flex flex-wrap whitespace-pre-wrap items-center text-zinc-600 mt-5 text-lg">
            <span>
                I build <span className="font-bold">scalable</span> and <span className="font-bold">efficient</span> web apps (which are also appealing : ) using
            </span>
            {tech.map((item, index) => {
                return (
                <>
                    <LanguageBox key={index} name={item as Name} />
                    {index !== tech.length - 1 && <span>,</span>}
                </>
                )
            }
            )}
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