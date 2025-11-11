
import React from 'react';
import { HERO_DATA } from '../constants';
import { Stat } from './ui';

const Hero = () => {
  return (
    <section id="home" className="relative bg-zinc-900" role="banner" aria-label="Hero">
      <div className="absolute inset-0">
        <img src={HERO_DATA.image} alt="Industrial GRP manufacturing facility" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="block text-teal-400">{HERO_DATA.title}</span>
          <span className="block text-zinc-100">{HERO_DATA.subtitle}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-300">
          {HERO_DATA.description}
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#solutions" className="rounded-xl bg-teal-500 px-6 py-3 text-lg font-semibold text-zinc-950 hover:bg-teal-400">
            {HERO_DATA.ctaPrimary}
          </a>
          <a href="#projects" className="rounded-xl border border-zinc-700 bg-zinc-950/40 px-6 py-3 text-lg font-semibold hover:bg-zinc-800">
            {HERO_DATA.ctaSecondary}
          </a>
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 pb-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {HERO_DATA.stats.map(stat => <Stat key={stat.label} {...stat} />)}
        </div>
        <p className="mt-4 text-center text-xs text-zinc-500">{HERO_DATA.statsNote}</p>
      </div>
    </section>
  );
};

export default Hero;