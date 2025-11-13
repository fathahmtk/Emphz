import React from 'react';
import { PRODUCTS_DATA } from './constants.tsx';

const Products = () => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [selectedCategory, setSelectedCategory] = React.useState('All Categories');
    const [sortOption, setSortOption] = React.useState('name-asc');

    const categories = ['All Categories', ...new Set(PRODUCTS_DATA.items.map(p => p.cat))];

    const processedProducts = React.useMemo(() => {
        let products = PRODUCTS_DATA.items.filter(product => {
            const matchesCategory = selectedCategory === 'All Categories' || product.cat === selectedCategory;
            const matchesSearch = 
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.sku.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        products.sort((a, b) => {
            switch (sortOption) {
                case 'name-asc':
                    return a.name.localeCompare(b.name);
                case 'name-desc':
                    return b.name.localeCompare(a.name);
                case 'sku-asc':
                    return a.sku.localeCompare(b.sku);
                case 'sku-desc':
                    return b.sku.localeCompare(a.sku);
                default:
                    return 0;
            }
        });

        return products;
    }, [searchTerm, selectedCategory, sortOption]);


    return (
        <section id="products" className="border-t border-slate-200 bg-slate-50" role="region" aria-label="Products">
            <div className="mx-auto max-w-7xl px-4 py-16">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                <h2 className="text-3xl font-bold">{PRODUCTS_DATA.title}</h2>
                <p className="mt-2 max-w-2xl text-slate-600">{PRODUCTS_DATA.description}</p>
                </div>
                <div className="flex w-full flex-wrap gap-2 sm:w-auto">
                    <div className="flex-grow sm:flex-grow-0">
                        <label htmlFor="category-select" className="sr-only">Filter by category</label>
                        <select 
                            id="category-select"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        >
                            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                        </select>
                    </div>
                    <div className="flex-grow sm:flex-grow-0">
                        <label htmlFor="sort-select" className="sr-only">Sort by</label>
                        <select
                            id="sort-select"
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        >
                            <option value="name-asc">Sort by Name (A-Z)</option>
                            <option value="name-desc">Sort by Name (Z-A)</option>
                            <option value="sku-asc">Sort by SKU (Asc)</option>
                            <option value="sku-desc">Sort by SKU (Desc)</option>
                        </select>
                    </div>
                    <div className="flex-grow sm:flex-grow-0">
                        <label htmlFor="search-input" className="sr-only">Search products</label>
                        <input 
                            id="search-input"
                            type="search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
                            placeholder="Search by name or SKU…" 
                        />
                    </div>
                </div>
            </div>

            <div className="grid min-h-[400px] grid-cols-1 content-start gap-6 md:grid-cols-3">
                {processedProducts.length > 0 ? (
                    processedProducts.map((p) => (
                    <div key={p.sku} className="rounded-2xl border border-slate-200 bg-white p-5 transition-[transform,box-shadow] duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg hover:shadow-blue-500/20">
                        <div className="aspect-[4/3] rounded-lg bg-slate-200" />
                        <div className="mt-3 text-sm text-slate-500">{p.sku}</div>
                        <div className="text-lg font-semibold text-slate-800">{p.name}</div>
                        <div className="text-xs text-slate-400">{p.cat}</div>
                        <button className="mt-3 rounded-lg bg-blue-100 px-3 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-200">Add to RFQ</button>
                    </div>
                    ))
                ) : (
                    <div className="md:col-span-3 text-center py-10 text-slate-500">
                        <h3 className="text-lg font-semibold">No products found</h3>
                        <p className="mt-1">Try adjusting your filters or search term.</p>
                    </div>
                )}
            </div>
            </div>
        </section>
    );
};

export default Products;