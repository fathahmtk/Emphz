import React from 'react';
import { WHY_GRP_DATA } from '../constants';
import { Feature } from './ui';

const WhyGRP = () => {
  return (
    <section id="why-grp" className="border-t border-slate-200 bg-white" role="region" aria-label="Why GRP">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900">{WHY_GRP_DATA.title}</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {WHY_GRP_DATA.features.map((f) => (
            <Feature key={f.h} {...f} />
          ))}
        </div>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[720px] border-separate border-spacing-y-2">
            <thead>
              <tr className="text-left text-sm text-slate-500">
                {WHY_GRP_DATA.table.headers.map(header => <th key={header} className="px-4 py-2 font-medium">{header}</th>)}
              </tr>
            </thead>
            <tbody>
              {WHY_GRP_DATA.table.rows.map((row) => (
                <tr key={row[0]} className="rounded-xl bg-slate-50">
                  {row.map((cell, i) => (
                    <td key={i} className={`px-4 py-3 text-sm text-slate-700 ${i === 0 ? 'font-semibold text-slate-800' : ''}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default WhyGRP;