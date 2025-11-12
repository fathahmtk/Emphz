import React from 'react';
import { INDUSTRIES_DATA } from '../constants';

const IndustriesSection = () => {
    return (
        <section id="industries" className="border-t border-slate-200 bg-white" role="region" aria-label="Industries Served">
            <div className="mx-auto max-w-7xl px-4 py-16">
                <h2 className="text-3xl font-bold">{INDUSTRIES_DATA.title}</h2>
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {INDUSTRIES_DATA.items.map(item => (
                        <div key={item.h} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                            <div className="mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-blue-600">{item.h}</h3>
                            <p className="mt-2 text-slate-600">{item.p}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;