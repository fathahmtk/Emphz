import React from 'react';
import { LOGISTICS_DATA } from '../constants';

const Logistics = () => {
    return (
        <section id="logistics" className="border-t border-zinc-800 bg-zinc-950" role="region" aria-label="Logistics & Export">
            <div className="mx-auto max-w-7xl px-4 py-16">
            <h2 className="text-3xl font-bold">{LOGISTICS_DATA.title}</h2>
            <p className="mt-2 max-w-3xl text-zinc-300">{LOGISTICS_DATA.description}</p>
            <ul className="mt-4 list-inside list-disc text-zinc-300">
                {LOGISTICS_DATA.points.map(point => <li key={point}>{point}</li>)}
            </ul>
            </div>
        </section>
    );
};

export default Logistics;
