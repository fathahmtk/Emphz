import React from 'react';
import { COMPANY_DATA } from '../constants';

const Company = () => {
    return (
        <section id="company" className="border-t border-slate-200 bg-white" role="region" aria-label="Company">
            <div className="mx-auto max-w-7xl px-4 py-16">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                <div>
                <h2 className="text-3xl font-bold">{COMPANY_DATA.title}</h2>
                <p className="mt-4 text-slate-600">
                    {COMPANY_DATA.description}
                </p>
                <ul className="mt-6 space-y-2 text-slate-600">
                    {COMPANY_DATA.strengths.map(strength => <li key={strength}>{strength}</li>)}
                </ul>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-semibold">{COMPANY_DATA.standards.title}</h3>
                <p className="mt-2 text-slate-600">{COMPANY_DATA.standards.description}</p>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-slate-700">
                    {COMPANY_DATA.standards.tests.map(test => (
                        <div key={test} className="rounded-lg border border-slate-200 bg-white p-3">{test}</div>
                    ))}
                </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Company;