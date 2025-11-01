import React from 'react';
import { KEY_VALUE_PROPOSITIONS } from '../constants';
import Icon from './Icon';

const ValueProposition: React.FC = () => {
  return (
    <section className="py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-16">Why EMPHZ? Our Core Advantages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {KEY_VALUE_PROPOSITIONS.map((prop, index) => (
            <div key={index} className="bg-[var(--color-surface-primary)] backdrop-blur-lg p-8 rounded-[var(--radius)] shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 border border-[var(--color-border)] flex flex-col items-center transform hover:-translate-y-2">
              <div className="p-4 bg-[var(--color-brand)]/10 rounded-full mb-6">
                 <Icon name={prop.icon} className="h-10 w-10 text-[var(--color-brand)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">{prop.coreValue}</h3>
              <p className="text-[var(--color-text-secondary)]">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;