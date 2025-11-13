
import React from 'react';
import { QA_DATA } from './constants.tsx';

const QA = () => {
    return (
        <section id="qa" className="border-t border-slate-200 bg-white" role="region" aria-label="QA & Compliance">
            <div className="mx-auto max-w-7xl px-4 py-16">
            <h2 className="text-3xl font-bold">{QA_DATA.title}</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                {QA_DATA.cards.map(card => (
                    <div key={card.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                        <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
                        <p className="mt-2 text-slate-600">{card.description}</p>
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
};

export default QA;