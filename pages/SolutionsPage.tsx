import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Solution } from '../types';
import { getSolutions } from '../services/mockApi';
import { ArrowRight, Check } from 'lucide-react';

const SolutionsPage: React.FC = () => {
    const [solutions, setSolutions] = useState<Solution[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "Industry Solutions | EMPHZ Private Limited";
        const setMetaTag = (name: string, content: string) => {
            let element = document.querySelector(`meta[name="${name}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute('name', name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };
        setMetaTag('description', "Discover industry-specific GRP solutions from EMPHZ Private Limited. We engineer high-performance composite systems for Electrical, Utilities, Renewable Energy, and Infrastructure sectors.");
        setMetaTag('keywords', "Industry solutions, GRP for utilities, GRP for renewable energy, electrical infrastructure, composite solutions, EMPHZ Private Limited");

        const fetchSolutions = async () => {
            setLoading(true);
            const data = await getSolutions();
            setSolutions(data);
            setLoading(false);
        };
        fetchSolutions();
    }, []);

    return (
        <div className="bg-background-light min-h-screen">
            <div className="container mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold font-heading text-primary mb-2">Industry-Specific Solutions</h1>
                    <p className="text-lg text-text-secondary max-w-3xl mx-auto">We engineer GRP systems to solve challenges in the world's most demanding sectors.</p>
                </div>
                
                <div className="space-y-12">
                {loading ? (
                    Array.from({ length: 2 }).map((_, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-lg animate-pulse h-64"></div>
                    ))
                ) : (
                    solutions.map(solution => (
                        <div key={solution.slug} className="bg-white p-8 rounded-lg shadow-lg border border-border">
                            <h2 className="text-3xl font-bold font-heading text-primary mb-4">{solution.name}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-semibold font-heading text-lg text-text-DEFAULT mb-2">The Challenge</h4>
                                    <p className="text-text-secondary">{solution.problem}</p>
                                    <h4 className="font-semibold font-heading text-lg text-text-DEFAULT mt-6 mb-2">The EMPHZ Approach</h4>
                                    <p className="text-text-secondary">{solution.approach}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold font-heading text-lg text-text-DEFAULT mb-2">Key Outcomes</h4>
                                    <ul className="space-y-2 mb-6">
                                        {solution.outcomes.map(outcome => (
                                            <li key={outcome} className="flex items-start">
                                                <Check className="text-accent mr-2 mt-1 flex-shrink-0" size={20}/>
                                                <span className="text-text-secondary">{outcome}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <NavLink to={`/products?category=${solution.name}`} className="font-semibold text-accent hover:text-accent-hover flex items-center">
                                        View Recommended Products <ArrowRight size={18} className="ml-1"/>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))
                )}
                </div>
            </div>
        </div>
    );
};

export default SolutionsPage;