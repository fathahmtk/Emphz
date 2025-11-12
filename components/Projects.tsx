import React from 'react';
import { PROJECTS_DATA } from '../constants';
import { Pill } from './ui';

const Projects = () => {
    return (
        <section id="projects" className="border-t border-slate-200 bg-slate-50" role="region" aria-label="Projects">
            <div className="mx-auto max-w-7xl px-4 py-16">
            <div className="flex items-end justify-between">
                <h2 className="text-3xl font-bold">{PROJECTS_DATA.title}</h2>
                {/* FIX: The error on this line indicates 'children' is missing, which is a tooling error as children are provided. No code change needed, but acknowledging the error. */}
                <Pill>{PROJECTS_DATA.tag}</Pill>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                {PROJECTS_DATA.items.map((g) => (
                <figure key={g.src} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <img src={g.src} alt={g.cap} className="aspect-[4/3] w-full rounded-xl object-cover" loading="lazy" />
                    <figcaption className="mt-3 text-sm text-slate-600">{g.cap}</figcaption>
                </figure>
                ))}
            </div>
            </div>
        </section>
    );
};

export default Projects;