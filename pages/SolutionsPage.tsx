import React, { useState, useEffect } from 'react';
import { Solution, Product } from '../types';
import { getSolutions, getProductsBySlugs } from '../services/mockApi';
import { Check } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { ProductCardSmall } from '../components/ProductCardSmall';
import { SectionDivider } from '../components/SectionDivider';
import { usePageMetadata } from '../hooks/usePageMetadata';

interface SolutionWithProducts extends Solution {
    productDetails: Product[] | null; // null for loading state, Product[] once loaded
}

const SolutionsPage: React.FC = () => {
    const [solutions, setSolutions] = useState<SolutionWithProducts[]>([]);
    const [loading, setLoading] = useState(true);

    usePageMetadata(
        "GRP Applications by EMPHZ | Power, Energy, Telecom & Infrastructure",
        "Discover how EMPHZ GRP solutions are engineered for critical applications in Power, Energy, Telecom, and Infrastructure. When it's GRP, it's EMPHZ.",
        "EMPHZ GRP applications, GRP for utilities, GRP for energy, GRP for telecom, EMPHZ infrastructure solutions, The GRP Company"
    );

    useEffect(() => {
        const fetchSolutionsData = async () => {
            setLoading(true);
            const baseSolutions = await getSolutions();
            // Initially set productDetails to null for loading state
            const solutionsWithNullProducts: SolutionWithProducts[] = baseSolutions.map(s => ({...s, productDetails: null}));
            setSolutions(solutionsWithNullProducts);
            setLoading(false);

            // Asynchronously fetch products for each solution
            solutionsWithNullProducts.forEach(async (solution, index) => {
                if (solution.products.length > 0) {
                    const products = await getProductsBySlugs(solution.products);
                    setSolutions(currentSolutions => {
                        // Create a new array to ensure React state update triggers re-render
                        const newSolutions = [...currentSolutions];
                        if (newSolutions[index]) {
                            newSolutions[index].productDetails = products;
                        }
                        return newSolutions;
                    });
                } else {
                    // If no products, set to empty array
                     setSolutions(currentSolutions => {
                        const newSolutions = [...currentSolutions];
                        if (newSolutions[index]) {
                            newSolutions[index].productDetails = [];
                        }
                        return newSolutions;
                    });
                }
            });
        };
        fetchSolutionsData();
    }, []);

    const breadcrumbLinks = [
        { name: 'Home', path: '/' },
        { name: 'Solutions' }
    ];

    return (
        <div className="bg-background-light min-h-screen">
            <div className="bg-background relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?q=80&w=1920&auto=format&fit=crop" alt="Abstract background texture" className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 bg-white/95"></div>
                </div>
                <div className="relative">
                    <Breadcrumbs links={breadcrumbLinks} />
                    <div className="container mx-auto px-6 py-12 text-center">
                        <h1 className="text-4xl font-bold font-heading text-primary mb-2">GRP Applications by EMPHZ</h1>
                        <p className="text-lg text-text-secondary max-w-3xl mx-auto">Power, Energy, Telecom & Infrastructure. We engineer GRP solutions for the world's most demanding industries.</p>
                    </div>
                </div>
            </div>

            <SectionDivider />
            
            <div className="container mx-auto px-6 py-12">
                <div className="space-y-12">
                {loading ? (
                    Array.from({ length: 2 }).map((_, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-lg animate-pulse h-80"></div>
                    ))
                ) : (
                    solutions.map(solution => (
                        <div key={solution.slug} className="bg-white p-8 rounded-lg shadow-lg border border-border">
                            <h2 className="text-3xl font-bold font-heading text-primary mb-4">{solution.name}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
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
                                    <h4 className="font-semibold font-heading text-lg text-text-DEFAULT mt-6 mb-3">Recommended Products</h4>
                                    {solution.productDetails ? (
                                        solution.productDetails.length > 0 ? (
                                            <div className="grid grid-cols-2 gap-4">
                                                {solution.productDetails.map(product => (
                                                    <ProductCardSmall key={product.id} product={product} />
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="text-sm text-text-secondary">No specific products recommended for this solution.</p>
                                        )
                                    ) : (
                                        <div className="grid grid-cols-2 gap-4 animate-pulse">
                                            <div className="h-40 bg-gray-200 rounded-lg"></div>
                                            <div className="h-40 bg-gray-200 rounded-lg"></div>
                                        </div>
                                    )}
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