import React from 'react';
import Button from './Button';
import { INDUSTRIES } from '../constants';
import IndustryCard from './IndustryCard';

const IndustryGrid: React.FC = () => {
  return (
    <section className="py-24 bg-[var(--color-background)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-16">Across Sectors. Across Continents.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((industry) => (
            <IndustryCard key={industry.slug} industry={industry} />
          ))}
        </div>
        <div className="mt-16">
          <Button variant="primary" href="/industries">Explore All Industries</Button>
        </div>
      </div>
    </section>
  );
};

export default IndustryGrid;
