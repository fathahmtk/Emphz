import React from 'react';
import InsightsKnowledge from '../components/InsightsKnowledge';
import MetaTags from '../components/MetaTags';
import { SEO_DATA } from '../constants';
import GrpApplicationsList from '../components/GrpApplicationsList';

const KnowledgePage: React.FC = () => {
  return (
    <>
      <MetaTags
        title={SEO_DATA.knowledge.title}
        description={SEO_DATA.knowledge.description}
      />
      <div className="bg-[var(--color-background)]">
        <InsightsKnowledge />
        <GrpApplicationsList />
      </div>
    </>
  );
};

export default KnowledgePage;
