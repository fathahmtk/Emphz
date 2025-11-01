import React from 'react';
import { useUIState } from '../UIStateContext';
import ProductCard from './ProductCard';
import Button from './Button';
import { Product } from '../types';
import { useProductCatalog } from '../hooks/useProductCatalog';

const FeaturedProducts: React.FC = () => {
    const { openQuickView } = useUIState();
    const productCatalog = useProductCatalog();

    // Helper to find a product by code from the reactive catalog
    const findProduct = (code: string): { product: Product, categoryName: string } | null => {
        for (const category of productCatalog) {
            const product = category.products.find(p => p.code === code);
            if (product) {
                return { product, categoryName: category.name };
            }
        }
        return null;
    }

    const featuredProductCodes = ['E-101', 'M-203', 'A-701', 'S-601'];
    const featuredProducts = featuredProductCodes.map(code => findProduct(code)).filter(Boolean);

    return (
        <section className="py-24 bg-transparent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold">Featured Products</h2>
                    <p className="text-lg text-[var(--color-text-secondary)] mt-4 max-w-2xl mx-auto">
                        Explore a selection of our innovative GRP composite solutions engineered for performance and durability.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredProducts.map(data => {
                        if (!data) return null;
                        const { product, categoryName } = data;
                        return (
                            <ProductCard
                                key={product.code}
                                product={product}
                                onQuickViewClick={openQuickView}
                                categoryName={categoryName}
                            />
                        );
                    })}
                </div>
                <div className="mt-16 text-center">
                    <Button href="/products" variant="primary">
                        Explore All Products
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
