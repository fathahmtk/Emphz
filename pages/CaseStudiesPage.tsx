import React, { useState, useEffect } from 'react';
import { CaseStudy } from '../types';
import { getCaseStudies } from '../services/mockApi';
import Breadcrumbs from '../components/Breadcrumbs';
import { SectionDivider } from '../components/SectionDivider';
import { usePageMetadata } from '../hooks/usePageMetadata';

const CaseStudyCard: React.FC<{ study: CaseStudy }> = ({ study }) => (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-border dark:border-slate-700">
        <img src={study.imageUrl} alt={study.title} className="w-full h-56 object-cover"/>
        <div className="p-6">
            <p className="text-sm font-semibold text-accent mb-1">{study.industry}</p>
            <h3 className="text-xl font-bold font-heading text-text-DEFAULT dark:text-white mb-2">{study.title}</h3>
            <p className="text-text-secondary dark:text-slate-400 mb-4 line-clamp-3">{study.challenge}</p>
            <div className="bg-accent-light dark:bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
                <p className="font-semibold text-accent-hover dark:text-accent">{study.result}</p>
            </div>
        </div>
    </div>
);


const CaseStudiesPage: React.FC = () => {
    const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
    const [loading, setLoading] = useState(true);

    usePageMetadata(
        "EMPHZ GRP Success Stories | Proven Composite Solutions for Global Clients",
        "See EMPHZ GRP in action. Our case studies prove the performance of our GRP enclosures, kiosks, and cabins for global clients in demanding environments.",
        "EMPHZ GRP case studies, GRP success stories, composite solutions, GRP performance, EMPHZ projects, The GRP Company"
    );

    useEffect(() => {
        const fetchStudies = async () => {
            setLoading(true);
            const data = await getCaseStudies();
            setCaseStudies(data);
            setLoading(false);
        };
        fetchStudies();
    }, []);
    
    const breadcrumbLinks = [
        { name: 'Home', path: '/' },
        { name: 'Case Studies' }
    ];

    return (
        <div className="bg-background-light dark:bg-slate-900 min-h-screen">
            <div className="bg-background dark:bg-slate-800 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?q=80&w=1920&auto=format&fit=crop" alt="Abstract background texture" className="w-full h-full object-cover opacity-50 dark:opacity-10" />
                    <div className="absolute inset-0 bg-white/95 dark:bg-slate-800/95"></div>
                </div>
                <div className="relative">
                    <Breadcrumbs links={breadcrumbLinks} />
                    <div className="container mx-auto px-6 py-16 text-center">
                        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-primary dark:text-white mb-3 tracking-tight">EMPHZ GRP Success Stories</h1>
                        <p className="text-lg text-text-secondary dark:text-slate-400 max-w-3xl mx-auto">Proven Composite Solutions for Global Clients. See how our GRP solutions deliver tangible results for industry leaders.</p>
                    </div>
                </div>
            </div>
            
            <SectionDivider />

            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {loading ? (
                        Array.from({ length: 3 }).map((_, index) => (
                           <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-md animate-pulse h-96"></div>
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