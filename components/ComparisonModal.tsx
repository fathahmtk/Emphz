

import React, { useMemo } from 'react';
import { Product } from '../types';
import { X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface ComparisonModalProps {
    products: Product[];
    onClose: () => void;
}

export const ComparisonModal: React.FC<ComparisonModalProps> = ({ products, onClose }) => {
    const allSpecKeys = useMemo(() => {
        const keys = new Set<string>();
        products.forEach(p => {
            Object.keys(p.specs).forEach(key => keys.add(key));
        });
        return Array.from(keys).sort();
    }, [products]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4" onClick={onClose} role="dialog" aria-modal="true">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
                <div className="p-6 border-b dark:border-slate-700 flex justify-between items-center flex-shrink-0">
                    <h2 className="text-2xl font-bold text-primary dark:text-white font-heading">Product Comparison</h2>
                    <button onClick={onClose} className="text-gray-500 dark:text-slate-400 hover:text-gray-800 dark:hover:text-white transition-colors">
                        <X size={28} />
                    </button>
                </div>
                <div className="overflow-auto">
                    <table className="w-full text-sm text-left border-collapse">
                        <thead className="bg-background-light dark:bg-slate-700 sticky top-0">
                            <tr>
                                <th className="p-4 font-semibold text-text-DEFAULT dark:text-slate-200 border-b border-r border-border dark:border-slate-600 w-1/5">Feature</th>
                                {products.map(product => (
                                    <th key={product.id} className="p-4 font-semibold text-text-DEFAULT dark:text-slate-200 border-b border-r border-border dark:border-slate-600">
                                        <NavLink to={`/products/${product.slug}`} className="hover:underline text-primary dark:text-blue-400">{product.name}</NavLink>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border dark:divide-slate-700">
                            <tr className="bg-white dark:bg-slate-800">
                                <td className="p-4 font-semibold border-r border-border dark:border-slate-600 dark:text-slate-300">Image</td>
                                {products.map(product => (
                                    <td key={product.id} className="p-4 border-r border-border dark:border-slate-600 text-center">
                                        <img src={product.imageUrls[0].url} alt={product.name} className="w-32 h-32 object-contain mx-auto rounded-md"/>
                                    </td>
                                ))}
                            </tr>
                            <tr className="bg-background-light dark:bg-slate-700/50">
                                <td className="p-4 font-semibold border-r border-border dark:border-slate-600 dark:text-slate-300">Summary</td>
                                {products.map(product => (
                                    <td key={product.id} className="p-4 border-r border-border text-text-secondary dark:text-slate-400">{product.summary}</td>
                                ))}
                            </tr>
                            {allSpecKeys.map((key, index) => (
                                <tr key={key} className={index % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-background-light dark:bg-slate-700/50'}>
                                    <td className="p-4 font-semibold border-r border-border dark:border-slate-600 dark:text-slate-300">{key}</td>
                                    {products.map(product => (
                                        <td key={product.id} className="p-4 border-r border-border text-text-secondary dark:text-slate-400">{product.specs[key] || '—'}</td>
                                    ))}
                                </tr>
                            ))}
                             <tr className="bg-white dark:bg-slate-800">
                                <td className="p-4 font-semibold border-r border-border dark:border-slate-600"></td>
                                {products.map(product => (
                                    <td key={product.id} className="p-4 border-r border-border dark:border-slate-600 text-center">
                                         <NavLink to={`/products/${product.slug}`} className="bg-accent text-white text-center font-semibold py-2 px-4 rounded-lg hover:bg-accent-hover transition-all duration-300">
                                            View Details
                                        </NavLink>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};