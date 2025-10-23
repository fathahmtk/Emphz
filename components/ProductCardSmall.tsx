import React from 'react';
import { NavLink } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardSmallProps {
    product: Product;
}

export const ProductCardSmall: React.FC<ProductCardSmallProps> = ({ product }) => {
    return (
        <NavLink 
            to={`/products/${product.slug}`} 
            className="bg-background dark:bg-slate-800 rounded-lg border border-border dark:border-slate-700 overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 block"
            aria-label={`View details for ${product.name}`}
        >
            <div className="relative">
                <img src={product.imageUrls[0]?.url} alt={product.name} className="w-full h-32 object-cover" />
            </div>
            <div className="p-3">
                <h4 className="font-bold font-heading text-sm text-text-DEFAULT dark:text-slate-200 truncate" title={product.name}>{product.name}</h4>
            </div>
        </NavLink>
    );
}