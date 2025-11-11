import React from 'react';
import { HERO_DATA } from '../constants';
import { Stat } from './ui';

const Hero = () => {
  return (
    <section id="home" className="bg-white" role="banner" aria-label="Hero">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-20 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {HERO_DATA.title}
            <span className="mt-2 block text-blue-600">{HERO_DATA.subtitle}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            {HERO_DATA.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#solutions" className="rounded-xl bg-blue-600 px-6 py-3 text-lg font-semibold text-white hover:bg-blue-500 transition-colors">
              {HERO_DATA.ctaPrimary}
            </a>
            <a href="#projects" className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-lg font-semibold text-slate-700 hover:bg-slate-100 transition-colors">
              {HERO_DATA.ctaSecondary}
            </a>
          </div>
          <div className="mt-12 grid max-w-xl grid-cols-1 gap-8 text-left sm:grid-cols-3">
            {HERO_DATA.stats.map(stat => <Stat key={stat.label} {...stat} />)}
          </div>
           <p className="mt-4 text-left text-xs text-slate-500">{HERO_DATA.statsNote}</p>
        </div>
        <div className="lg:col-span-5">
           <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 p-2 shadow-lg">
              <img src={HERO_DATA.image} alt="High-quality GRP electrical enclosure" className="h-full w-full rounded-xl object-cover" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;