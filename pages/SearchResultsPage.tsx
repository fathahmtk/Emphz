import React, { useState, useEffect } from 'react';
import { useSearchParams, NavLink } from 'react-router-dom';
import { Product, BlogPost, CaseStudy } from '../types';
import { searchAll } from '../services/mockApi';
import { Search as SearchIcon, Package, FileText, BookOpen } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { usePageMetadata } from '../hooks/usePageMetadata';

interface SearchResults {
    products: Product[];
    blogPosts: BlogPost[];
    caseStudies: CaseStudy[];
}

const SearchResultCard: React.FC<{
    type: 'Product' | 'Insight' | 'Case Study';
    title: string;
    description: string;
    link: string;
    imageUrl?: string;
}> = ({ type, title, description, link, imageUrl }) => {
    
    const Icon = {
        Product: <Package className="text-accent"/>,
        Insight: <FileText className="text-accent"/>,
        'Case Study': <BookOpen className="text-accent"/>,
    }[type];

    return (
        <NavLink to={link} className="block bg-white p-4 rounded-lg shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-start gap-4">
                {imageUrl && <img src={imageUrl} alt={title} className="w-24 h-24 object-cover rounded-md flex-shrink-0"/>}
                <div className="flex-grow">
                    <div className="flex items-center text-sm font-semibold mb-1">
                        {Icon}
                        <span className="ml-2 text-text-secondary">{type}</span>
                    </div>
                    <h3 className="text-lg font-bold font-heading text-primary">{title}</h3>
                    <p className="text-sm text-text-secondary mt-1 line-clamp-2">{description}</p>
                </div>
            </div>
        </NavLink>
    );
};

const SearchResultSkeletonCard: React.FC = () => (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-border animate-pulse">
        <div className="flex items-start gap-4">
            <div className="w-24 h-24 bg-gray-200 rounded-md flex-shrink-0"></div>
            <div className="flex-grow space-y-3">
                <div className="flex items-center text-sm font-semibold">
                    <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                    <div className="ml-2 h-4 w-20 bg-gray-200 rounded"></div>
                </div>
                <div className="h-5 w-3/4 bg-gray-200 rounded"></div>
                <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                </div>
            </div>
        </div>
    </div>
);


const SearchResultsPage: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');
    const [results, setResults] = useState<SearchResults | null>(null);
    const [loading, setLoading] = useState(false);

    const query = searchParams.get('q');

    usePageMetadata(
        query ? `EMPHZ GRP Search: "${query}"` : "Search EMPHZ GRP Solutions",
        query ? `Search results for "${query}" from EMPHZ, The GRP Company.` : "Search the official EMPHZ Global website for high-performance GRP solutions.",
        query ? `${query}, EMPHZ GRP search, search GRP, The GRP Company` : "search EMPHZ GRP, The GRP Company"
    );

    useEffect(() => {
        if (query) {
            const fetchResults = async () => {
                setLoading(true);
                setResults(null);
                const data = await searchAll(query);
                setResults(data);
                setLoading(false);
            };
            fetchResults();
        } else {
            setResults(null);
        }
    }, [query]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            setSearchParams({ q: searchTerm.trim() });
        }
    };
    
    const breadcrumbLinks = [
        { name: 'Home', path: '/' },
        { name: 'Search' }
    ];

    const totalResults = results ? results.products.length + results.blogPosts.length + results.caseStudies.length : 0;

    return (
        <div className="bg-background-light min-h-screen">
            <Breadcrumbs links={breadcrumbLinks} />
            <div className="container mx-auto px-6 py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold font-heading text-primary mb-4 text-center">Search EMPHZ GRP Solutions</h1>
                    <form onSubmit={handleSearch} className="flex gap-2 mb-10">
                        <input
                            type="search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search for products, insights, case studies..."
                            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                            aria-label="Search input"
                        />
                        <button type="submit" className="bg-accent text-white px-5 py-3 rounded-lg font-semibold hover:bg-accent-hover transition-colors flex items-center">
                            <SearchIcon size={20} />
                        </button>
                    </form>

                    {loading && (
                         <div>
                            <h2 className="text-2xl font-bold text-text-DEFAULT mb-6 border-b pb-2">
                                Searching for "{query}"...
                            </h2>
                            <div className="space-y-4">
                                {Array.from({ length: 3 }).map((_, index) => (
                                    <SearchResultSkeletonCard key={index} />
                                ))}
                            </div>
                        </div>
                    )}
                    
                    {query && !loading && (
                        <div>
                            <h2 className="text-2xl font-bold text-text-DEFAULT mb-6 border-b pb-2">
                                {totalResults} result{totalResults !== 1 ? 's' : ''} found for "{query}"
                            </h2>

                            {totalResults === 0 ? (
                                <div className="text-center bg-white p-8 rounded-lg border border-border">
                                    <p className="text-text-secondary">No results found. Try a different search term.</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {results?.products.map(p => (
                                        // FIX: Access the 'url' property from the image object to pass a string to imageUrl.
                                        <SearchResultCard key={`p-${p.id}`} type="Product" title={p.name} description={p.summary} link={`/products/${p.slug}`} imageUrl={p.imageUrls[0]?.url} />
                                    ))}
                                     {results?.caseStudies.map(c => (
                                        <SearchResultCard key={`c-${c.id}`} type="Case Study" title={c.title} description={c.challenge} link="/case-studies" imageUrl={c.imageUrl} />
                                    ))}
                                    {results?.blogPosts.map(b => (
                                        <SearchResultCard key={`b-${b.id}`} type="Insight" title={b.title} description={b.excerpt} link={`/insights/${b.slug}`} imageUrl={b.coverUrl} />
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchResultsPage;