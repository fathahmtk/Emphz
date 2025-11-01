import React from 'react';
import MetaTags from '../components/MetaTags';
import { SEO_DATA, INDUSTRIES } from '../constants';
import IndustryCard from '../components/IndustryCard';

const IndustriesPage: React.FC = () => {
  return (
    <>
      <MetaTags
        title={SEO_DATA.industries.title}
        description={SEO_DATA.industries.description}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Industries We Empower
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            From power grids to public infrastructure, EMPHZ provides robust composite solutions engineered for the unique challenges of each sector. Explore our industry-specific applications to see how we deliver value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((industry) => (
            <IndustryCard key={industry.slug} industry={industry} />
          ))}
        </div>
      </div>
    </>
  );
};

export default IndustriesPage;
