import React from 'react';

export const NavLink = ({ href, label }: { href: string; label: string }) => (
  <a href={href} className="px-3 py-2 text-sm font-medium hover:text-teal-400 transition-colors" aria-label={label}>{label}</a>
);

export const Stat = ({ value, label }: { value?: React.ReactNode; label?: React.ReactNode }) => {
  const safeValue = value ?? "—";
  const safeLabel = label ?? "";
  return (
    <div className="text-center">
      <div className="text-3xl font-extrabold">{safeValue}</div>
      <div className="text-sm text-zinc-400">{safeLabel}</div>
    </div>
  );
};

export const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs tracking-wide">{children}</span>
);

export const Feature = ({ h, p }: { h: string; p: string }) => (
  <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
    <div className="text-lg font-semibold text-teal-400">{h}</div>
    <p className="mt-2 text-zinc-300">{p}</p>
  </div>
);

export const Card = ({ title, copy, bullets }: { title: string; copy: string; bullets: string[] }) => (
  <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="mt-3 text-zinc-300">{copy}</p>
    <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-zinc-400">
      {bullets.map((b) => (
        <li key={b}>{b}</li>
      ))}
    </ul>
  </article>
);
