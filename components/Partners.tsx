import React from 'react';
import { PARTNERS_DATA } from '../constants';

const Partners = () => {
    return (
        <section id="partners" className="border-t border-zinc-800 bg-zinc-950" role="region" aria-label="Partners & Distributors">
            <div className="mx-auto max-w-7xl px-4 py-16">
            <h2 className="text-3xl font-bold">{PARTNERS_DATA.title}</h2>
            <p className="mt-2 max-w-3xl text-zinc-300">{PARTNERS_DATA.description}</p>
            <ul className="mt-6 space-y-2 text-zinc-300">
                {PARTNERS_DATA.points.map(point => <li key={point}>{point}</li>)}
            </ul>
            </div>
        </section>
    );
};

export default Partners;
