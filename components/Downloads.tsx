import React from 'react';
import { DOWNLOADS_DATA } from '../constants';

const Downloads = () => {
    return (
        <section id="downloads" className="border-t border-zinc-800 bg-zinc-900/40" role="region" aria-label="Downloads">
            <div className="mx-auto max-w-7xl px-4 py-16">
            <h2 className="text-3xl font-bold">{DOWNLOADS_DATA.title}</h2>
            <ul className="mt-6 space-y-3 text-sm text-teal-400">
                {DOWNLOADS_DATA.links.map(link => <li key={link.text}><a href={link.href} className="hover:underline">{link.text}</a></li>)}
            </ul>
            </div>
        </section>
    );
};

export default Downloads;
