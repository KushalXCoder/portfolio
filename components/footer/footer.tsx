"use client";

import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {
  const [name] = useState(() =>
    Math.round(Math.random()) % 2 === 0 ? "TheCodster" : "Kushal Rathod"
  );

  return (
    <footer className='w-full flex flex-col justify-center mt-10'>
        <span className={`pointer-events-none bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10`}>
            {name}
        </span>
        <div className="flex flex-col items-center text-gray-500">
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
    </footer>
  )
}

export default Footer