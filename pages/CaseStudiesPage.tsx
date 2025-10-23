

import React, { useState, useEffect } from 'react';
import { CaseStudy } from '../types';
import { getCaseStudies } from '../services/mockApi';

const CaseStudyCard: React.FC<{ study: CaseStudy }> = ({ study }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={study.imageUrl} alt={study.title} className="w-full h-56 object-cover"/>
        <div className="p-6">
            <p className="text-sm font-semibold text-primary mb-1">{study.industry}</p>
            <h3 className="text-xl font-bold text-text-DEFAULT mb-2">{study.client}</h3>
            <p className="text-text-secondary mb-4">{study.challenge}</p>
            <div className="bg-accent-light border-l-4 border-accent p-4 rounded-r-lg">
                <p className="font-semibold text-accent-hover">Result: {study.result}</p>
            </div>
        </div>
    </div>
);


const CaseStudiesPage: React.FC = () => {
    const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStudies = async () => {
            setLoading(true);
            const data = await getCaseStudies();
            setCaseStudies(data);
            setLoading(false);
        };
        fetchStudies();
    }, []);

    return (
        <div className="bg-background-light min-h-screen">
            <div className="container mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-primary mb-2">Proven Performance in the Field</h1>
                    <p className="text-lg text-text-secondary">See how our GRP solutions deliver tangible results for industry leaders.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {loading ? (
                        Array.from({ length: 3 }).map((_, index) => (
                           <div key={index} className="bg-white rounded-lg shadow-md animate-pulse h-96"></div>
                        ))
                    ) : (
                        caseStudies.map(study => (
                           <CaseStudyCard key={study.id} study={study} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default CaseStudiesPage;