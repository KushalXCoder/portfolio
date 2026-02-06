"use client";

import { AnimatePresence } from "motion/react";
import ProjectBox from "./project-box";
import { useState } from "react";

const Projects = () => {
    const totalProjects = 3;
    const [maxVisible, setMaxVisible] =  useState<number>(1);

    const projectsData = [
        {
            name: 'CodeCoach',
            image: '/projects/CodeCoach3.png',
            description: 'An open source learning platform to practice daily curated codeforces questions based on your selected topics and ratings.',
            tools: [
                { name: 'NextJS', url: '/technologies/nextjs.svg' },
                { name: 'TypeScript', url: '/technologies/typescript.svg' },
                { name: 'TailwindCSS', url: '/technologies/tailwind.svg' },
                { name: 'Zustand', url: '/technologies/zustand.svg' },
                { name: 'MongoDB', url: '/technologies/mongodb.svg' },
                { name: 'Redis', url: '/technologies/redis.svg' },
                { name: 'Mistral AI', url: '/technologies/mistral-ai.svg' },
            ],
            website: 'https://codecoach-io.vercel.app',
            github: 'https://github.com/KushalXCoder/codecoach',
            status: 'Working',
        },
        {
            name: 'InvoiceeAI',
            image: '/projects/invoicee-ai.png',
            description: 'An invoice generation and management app, making invoice generation easier, whether manually or using the AI.',
            tools: [
                { name: 'NextJS', url: '/technologies/nextjs.svg' },
                { name: 'TypeScript', url: '/technologies/typescript.svg' },
                { name: 'TailwindCSS', url: '/technologies/tailwind.svg' },
                { name: 'Zustand', url: '/technologies/zustand.svg' },
                { name: 'MongoDB', url: '/technologies/mongodb.svg' },
                { name: 'Gemini', url: '/technologies/gemini.svg' },
                { name: 'Vercel', url: '/technologies/vercel.svg' },
            ],
            website: 'https://invoicee-ai.vercel.app',
            github: 'https://github.com/KushalXCoder/invoiceeai',
            status: 'Completed',
        },
        {
            name: 'SecureSend',
            image: '/projects/securesend1.png',
            description: 'A website to securely send email in gmail, so that no AI can read your email.',
            tools: [
                { name: 'NextJS', url: '/technologies/nextjs.svg' },
                { name: 'TypeScript', url: '/technologies/typescript.svg' },
                { name: 'TailwindCSS', url: '/technologies/tailwind.svg' },
                { name: 'MongoDB', url: '/technologies/mongodb.svg' },
                { name: 'ShadCN', url: '/technologies/shadcn-ui.svg' },
                { name: 'Vercel', url: '/technologies/vercel.svg' },
            ],
            website: '/',
            github: 'https://github.com/KushalXCoder/securesend',
            status: 'Working',
        },
        {
            name: 'PClub Website',
            image: '/projects/pclubau.png',
            description: 'A Website for handling all the events and registrations of the Programming Club of my college.',
            tools: [
                { name: 'NextJS', url: '/technologies/nextjs.svg' },
                { name: 'JavaScript', url: '/technologies/javascript.svg' },
                { name: 'TailwindCSS', url: '/technologies/tailwind.svg' },
                { name: 'MongoDB', url: '/technologies/mongodb.svg' },
            ],
            website: 'https://pclub-au.vercel.app',
            github: 'https://github.com/PClub-Ahmedabad-University/The-Programming-Club',
            status: 'Completed',
        },
    ];

    const handleShow = () => {
        if (maxVisible === 1) {
            setMaxVisible(totalProjects);
        } else {
            setMaxVisible(1);
        }
    }
    return (
        <div id="projects">
            <h3 className="text-sm text-gray-500">Featured</h3>
            <div className="flex justify-between items-center">
                <h1 className="text-xl md:text-2xl font-bold">
                    Projects
                    <span className="text-gray-500 text-sm ms-1">({totalProjects+1})</span>
                </h1>
                <h1 className='border w-fit px-4 rounded-md inner-shadow'>Currently building: <span className="text-green-500 font-semibold">CodeCoach</span></h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                <AnimatePresence>
                    {projectsData.slice(0, maxVisible + 1).map((project) => (
                        <ProjectBox key={project.name} data={project} />
                    ))}
                </AnimatePresence>
            </div>
            <p
                className="inline-block text-gray-500 mt-3 md:mt-5 hover:underline cursor-pointer max-sm:text-sm"
                onClick={handleShow}
            >
                {maxVisible === 1 ? 'Show More' : 'Show Less'}
            </p>
        </div>
    )
}

export default Projects;