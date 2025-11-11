import React from 'react';

export const Stat = ({ value, label, valueColor = 'text-slate-900', labelColor = 'text-slate-600' }: { value?: React.ReactNode; label?: React.ReactNode; valueColor?: string; labelColor?: string }) => {
  const safeValue = value ?? "—";
  const safeLabel = label ?? "";
  return (
    <div className="text-left sm:text-center">
      <div className={`text-3xl font-extrabold ${valueColor}`}>{safeValue}</div>
      <div className={`mt-1 text-sm ${labelColor}`}>{safeLabel}</div>
    </div>
  );
};

export const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-blue-700">{children}</span>
);

export const Feature = ({ h, p }: { h: string; p: string }) => (
  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
    <div className="text-lg font-semibold text-blue-600">{h}</div>
    <p className="mt-2 text-slate-600">{p}</p>
  </div>
);

export const Card = ({ title, copy, bullets }: { title: string; copy: string; bullets: string[] }) => (
  <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
    <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
    <p className="mt-3 text-slate-600">{copy}</p>
    <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-slate-600">
      {bullets.map((b) => (
        <li key={b}>{b}</li>
      ))}
    </ul>
  </article>
);