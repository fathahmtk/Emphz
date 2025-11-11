import React from 'react';
import { PROJECTS_DATA } from '../constants';
import { Pill } from './ui';

const Projects = () => {
    return (
        <section id="projects" className="border-t border-zinc-800 bg-zinc-900/40" role="region" aria-label="Projects">
            <div className="mx-auto max-w-7xl px-4 py-16">
            <div className="flex items-end justify-between">
                <h2 className="text-3xl font-bold">{PROJECTS_DATA.title}</h2>
                <Pill>{PROJECTS_DATA.tag}</Pill>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                {PROJECTS_DATA.items.map((g) => (
                <figure key={g.src} className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
                    <img src={g.src} alt={g.cap} className="aspect-[4/3] w-full rounded-xl object-cover" loading="lazy" />
                    <figcaption className="mt-3 text-sm text-zinc-300">{g.cap}</figcaption>
                </figure>
                ))}
            </div>
            </div>
        </section>
    );
};

export default Projects;
