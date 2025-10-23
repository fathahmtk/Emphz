import React, { useState, useEffect, useMemo } from 'react';
import { Product } from '../types';
import { getProducts } from '../services/mockApi';
import { ProductCard } from '../components/ProductCard';

const ProductsPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('All');

    useEffect(() => {
        document.title = "Our GRP Products | EMPHZ Private Limited";
        const setMetaTag = (name: string, content: string) => {
            let element = document.querySelector(`meta[name="${name}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute('name', name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };
        setMetaTag('description', "Explore our comprehensive catalog of engineered GRP solutions, including enclosures, kiosks, feeder pillars, and more. Find the perfect high-performance composite product for your project.");
        setMetaTag('keywords', "GRP products, GRP enclosures, feeder pillars, GRP kiosks, GRP solutions, composite products, EMPHZ Private Limited");
        
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
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.summary.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = categoryFilter === 'All' || product.categoryName === categoryFilter;
            return matchesSearch && matchesCategory;
        });
    }, [products, searchTerm, categoryFilter]);

    return (
        <div className="bg-background-light min-h-screen">
            <div className="container mx-auto px-6 py-16">
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl font-bold font-heading text-primary mb-3 tracking-tight">Engineered GRP Systems</h1>
                    <p className="text-lg text-text-secondary">Explore our comprehensive catalog. Filter by rating, size, mounting, and environment to find the perfect solution for your project.</p>
                </div>

                <div className="bg-background p-6 rounded-lg shadow-sm border border-border mb-10 flex flex-col md:flex-row gap-4 items-center">
                    <input
                        type="text"
                        placeholder="Search products by name or feature..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="w-full md:flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <select
                        value={categoryFilter}
                        onChange={e => setCategoryFilter(e.target.value)}
                         className="w-full md:w-auto px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                    >
                        {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
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
                            <ProductCard key={product.id} product={product} />
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
        </div>
    );
};

export default ProductsPage;