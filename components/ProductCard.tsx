
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
    product: Product;
    isSelectedForCompare: boolean;
    onToggleCompare: (productId: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, isSelectedForCompare, onToggleCompare }) => {
    const handleCheckboxClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();
        onToggleCompare(product.id);
    };

    return (
        <div className="group [perspective:1000px] h-full">
            <div className="relative bg-background-default dark:bg-primary rounded-lg flex flex-col transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(5deg)] h-full shadow-md hover:shadow-2xl">
                <NavLink to={`/products/${product.slug}`} className="absolute inset-0 z-10" aria-label={`View details for ${product.name}`}/>
                <div className="relative">
                    <img src={product.imageUrls[0].url} alt={product.name} className="w-full h-60 object-cover rounded-t-lg" />
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full z-20">{product.categoryName}</div>
                    <div 
                        className="absolute top-4 right-4 z-20 bg-background-default/80 dark:bg-primary/[.80] backdrop-blur-sm p-2 rounded-lg flex items-center cursor-pointer transition-colors hover:bg-background-light dark:hover:bg-primary-dark"
                        onClick={handleCheckboxClick}
                    >
                        <input
                            type="checkbox"
                            readOnly
                            checked={isSelectedForCompare}
                            className="h-4 w-4 rounded border-border-default dark:border-border-dark text-accent focus:ring-accent cursor-pointer bg-transparent dark:bg-primary"
                            aria-label={`Compare ${product.name}`}
                        />
                        <label className="ml-2 text-xs font-semibold text-text-DEFAULT dark:text-text-DEFAULT select-none cursor-pointer">Compare</label>
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold font-heading text-text-DEFAULT mb-2">{product.name}</h3>
                    <p className="text-text-secondary text-sm mb-4 flex-grow">{product.summary}</p>
                    
                    <div className="mb-4 border-t border-border-default dark:border-border-dark pt-4">
                        <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Key Specs</h4>
                        <dl className="text-sm grid grid-cols-2 gap-x-4 gap-y-1">
                            {Object.entries(product.specs).slice(0, 2).map(([key, value]) => (
                                <React.Fragment key={key}>
                                    <dt className="font-semibold text-text-secondary truncate">{key}</dt>
                                    <dd className="text-text-DEFAULT font-medium truncate">{value}</dd>
                                </React.Fragment>
                            ))}
                        </dl>
                    </div>
                    
                    <NavLink to={`/products/${product.slug}`} className="mt-auto bg-accent text-white text-center font-semibold py-3 px-4 rounded-lg hover:bg-accent-hover transition-colors duration-300 z-20 relative">
                        View Details
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
