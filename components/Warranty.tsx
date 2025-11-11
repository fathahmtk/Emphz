import React from 'react';
import { WARRANTY_DATA } from '../constants';

const Warranty = () => {
    return (
        <section id="warranty" className="border-t border-slate-200 bg-white" role="region" aria-label="Warranty & Service">
            <div className="mx-auto max-w-7xl px-4 py-16">
            <h2 className="text-3xl font-bold">{WARRANTY_DATA.title}</h2>
            <p className="mt-2 max-w-3xl text-slate-600">{WARRANTY_DATA.description}</p>
            </div>
        </section>
    );
};

export default Warranty;