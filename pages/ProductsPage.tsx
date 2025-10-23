import React, { useState, useEffect, useMemo } from 'react';
import { Product } from '../types';
import { getProducts } from '../services/mockApi';
import { ProductCard } from '../components/ProductCard';
import Breadcrumbs from '../components/Breadcrumbs';
import { ComparisonModal } from '../components/ComparisonModal';
import { SectionDivider } from '../components/SectionDivider';
import { usePageMetadata } from '../hooks/usePageMetadata';

const ProductsPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('All');
    const [comparisonList, setComparisonList] = useState<number[]>([]);
    const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

    usePageMetadata(
        "EMPHZ GRP Product Catalog | Enclosures, Kiosks & Cabins",
        "Explore the complete catalog of EMPHZ GRP solutions. Our high-performance GRP enclosures, modular cabins, and feeder pillars are engineered to be the industry benchmark.",
        "EMPHZ GRP products, GRP product catalog, EMPHZ enclosures, EMPHZ kiosks, GRP cabins, composite solutions, EMPHZ Global"
    );

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const data = await getProducts();
            setProducts(data);
            setLoading(false);
        };
        fetchProducts();
    }, []);

    const categories = useMemo(() => ['All', ...new Set(products.map(p => p.categoryName))], [products]);

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const lowercasedTerm = searchTerm.toLowerCase();
            const matchesSearch =
                product.name.toLowerCase().includes(lowercasedTerm) ||
                product.summary.toLowerCase().includes(lowercasedTerm) ||
                product.tags.some(tag => tag.toLowerCase().includes(lowercasedTerm));
            
            const matchesCategory = categoryFilter === 'All' || product.categoryName === categoryFilter;
            
            return matchesSearch && matchesCategory;
        });
    }, [products, searchTerm, categoryFilter]);

    const handleToggleCompare = (productId: number) => {
        setComparisonList(prev =>
            prev.includes(productId)
                ? prev.filter(id => id !== productId)
                : [...prev, productId]
        );
    };
    
    const breadcrumbLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products' }
    ];

    const productsToCompare = products.filter(p => comparisonList.includes(p.id));

    return (
        <div className="bg-background-light min-h-screen">
            {isCompareModalOpen && (
                <ComparisonModal
                    products={productsToCompare}
                    onClose={() => setIsCompareModalOpen(false)}
                />
            )}
            <div className="bg-background relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?q=80&w=1920&auto=format&fit=crop" alt="Abstract background texture" className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 bg-white/95"></div>
                </div>
                <div className="relative">
                    <Breadcrumbs links={breadcrumbLinks} />
                    <div className="container mx-auto px-6 py-12 text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold font-heading text-primary mb-3 tracking-tight">EMPHZ GRP Product Catalog</h1>
                        <p className="text-lg text-text-secondary max-w-3xl mx-auto">Explore our complete range of high-performance GRP enclosures, kiosks, and composite solutions. When it's GRP, it's EMPHZ.</p>
                    </div>
                </div>
            </div>
            
            <SectionDivider />

            <div className="container mx-auto px-6 py-12">
                <div className="bg-background p-4 sm:p-6 rounded-lg shadow-sm border border-border mb-8 sticky top-[80px] z-30">
                     <input
                        type="text"
                        placeholder="Search by name, summary, or tag..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent mb-4"
                    />
                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setCategoryFilter(cat)}
                                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${categoryFilter === cat ? 'bg-primary text-white shadow-md' : 'bg-white text-text-secondary border border-border hover:bg-background-light hover:border-gray-300'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
                
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {Array.from({ length: 6 }).map((_, index) => (
                           <div key={index} className="bg-white rounded-lg border border-border animate-pulse h-[450px]"></div>
                       ))}
                   </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map(product => (
                            <ProductCard 
                                key={product.id} 
                                product={product} 
                                isSelectedForCompare={comparisonList.includes(product.id)}
                                onToggleCompare={handleToggleCompare}
                            />
                        ))}
                    </div>
                )}
                 {filteredProducts.length === 0 && !loading && (
                    <div className="text-center py-20">
                        <h3 className="text-2xl font-semibold font-heading text-text-DEFAULT">No products found</h3>
                        <p className="text-text-secondary mt-2">Try adjusting your search or filter criteria.</p>
                    </div>
                )}
            </div>

            {comparisonList.length > 0 && (
                <div className="fixed bottom-6 right-6 z-50">
                    <button
                        onClick={() => setIsCompareModalOpen(true)}
                        disabled={comparisonList.length < 2}
                        className="bg-accent text-white px-6 py-4 rounded-lg font-semibold hover:bg-accent-hover shadow-lg transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100"
                    >
                        Compare ({comparisonList.length}) Items
                        {comparisonList.length < 2 && <span className="text-xs block font-normal">Select another item</span>}
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProductsPage;