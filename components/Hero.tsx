import React from 'react';
import { HERO_DATA } from '../constants';
import { Stat } from './ui';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center bg-slate-900 text-white" role="banner" aria-label="Hero">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          className="absolute left-1/2 top-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover" 
          autoPlay 
          loop 
          muted 
          playsInline
          poster="https://images.unsplash.com/photo-1581092580497-c9a421b4a919?q=80&w=2070&auto-format&fit=crop"
        >
          <source src="https://videos.pexels.com/video-files/8249821/8249821-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>
      
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {HERO_DATA.title}
            <span className="mt-2 block text-blue-400">{HERO_DATA.subtitle}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            {HERO_DATA.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/solutions.html" className="rounded-xl bg-blue-600 px-6 py-3 text-lg font-semibold text-white hover:bg-blue-500 transition-colors">
              {HERO_DATA.ctaPrimary}
            </a>
            <a href="/projects.html" className="rounded-xl border border-slate-500 bg-white/10 px-6 py-3 text-lg font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors">
              {HERO_DATA.ctaSecondary}
            </a>
          </div>
          <div className="mt-12 grid max-w-xl grid-cols-1 gap-8 text-left sm:grid-cols-3">
            {HERO_DATA.stats.map(stat => <Stat key={stat.label} {...stat} valueColor="text-white" labelColor="text-slate-300" />)}
          </div>
           <p className="mt-4 text-left text-xs text-slate-400">{HERO_DATA.statsNote}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;