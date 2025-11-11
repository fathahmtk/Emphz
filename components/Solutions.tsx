
import React from 'react';
import { SOLUTIONS_DATA } from '../constants';
import { Pill, Card } from './ui';

const Solutions = () => {
  return (
    <section id="solutions" className="border-t border-zinc-800 bg-zinc-950" role="region" aria-label="Solutions Portfolio">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold">{SOLUTIONS_DATA.title}</h2>
            <p className="mt-2 max-w-2xl text-zinc-300">{SOLUTIONS_DATA.description}</p>
          </div>
          <div className="hidden gap-2 md:flex">
            {SOLUTIONS_DATA.pills.map(pill => <Pill key={pill}>{pill}</Pill>)}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS_DATA.cards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;