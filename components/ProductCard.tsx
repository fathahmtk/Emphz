import React from 'react';
import { NavLink } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="bg-background rounded-lg border border-border overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="relative">
                <img src={product.imageUrls[0]} alt={product.name} className="w-full h-60 object-cover" />
                 <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full">{product.categoryName}</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-heading text-text-DEFAULT mb-2">{product.name}</h3>
                <p className="text-text-secondary text-sm mb-4 flex-grow">{product.summary}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {product.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="bg-background-light text-text-secondary text-xs font-semibold px-3 py-1 rounded-full border border-border">{tag}</span>
                    ))}
                </div>
                <NavLink to={`/products/${product.slug}`} className="mt-auto bg-accent text-white text-center font-semibold py-3 px-4 rounded-lg hover:bg-accent-hover transition-all duration-300">
                    View Details
                </NavLink>
            </div>
        </div>
    );
}