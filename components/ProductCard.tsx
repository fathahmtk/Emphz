
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transition-transform duration-300 hover:scale-105">
            <div className="relative">
                <img src={product.imageUrls[0]} alt={product.name} className="w-full h-56 object-cover" />
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-semibold px-3 py-1 m-2 rounded-full">{product.categoryName}</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{product.summary}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="bg-neutral-dark text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                    ))}
                </div>
                <NavLink to={`/products/${product.slug}`} className="mt-auto bg-primary text-white text-center font-semibold py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300">
                    View Details
                </NavLink>
            </div>
        </div>
    );
}
