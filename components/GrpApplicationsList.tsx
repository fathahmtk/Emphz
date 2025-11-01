import React from 'react';
import { GRP_APPLICATIONS_CONTENT } from '../constants';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';

const GrpApplicationsList: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold">Comprehensive Guide to GRP Applications</h2>
          <p className="text-lg text-[var(--color-text-secondary)] mt-4">
            Explore an extensive list of products and applications made possible by the versatility of GRP composites, from construction to consumer goods.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full bg-[var(--color-surface-primary)] backdrop-blur-lg rounded-[var(--radius)] shadow-lg border border-[var(--color-border)] p-4 sm:p-6">
                {GRP_APPLICATIONS_CONTENT.map((category, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="text-left text-xl font-semibold hover:no-underline">
                           {category.name}
                        </AccordionTrigger>
                        <AccordionContent className="pt-4 space-y-6">
                            {category.subcategories.map(subcategory => (
                                <div key={subcategory.name}>
                                    <h4 className="font-semibold text-[var(--color-text-primary)] mb-2">{subcategory.name}</h4>
                                    <ul className="list-disc list-inside space-y-1 text-[var(--color-text-secondary)] text-sm pl-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                                        {subcategory.items.map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </div>
    </section>
  );
};

export default GrpApplicationsList;
