import React, { useState, useEffect } from 'react';
import { Solution } from '../types';
import { X } from 'lucide-react';

interface SolutionFormProps {
    solution: Solution | null;
    onSave: (solution: Solution, originalSlug?: string) => void;
    onCancel: () => void;
}

const getInitialFormData = () => ({
    slug: '',
    name: '',
    problem: '',
    approach: '',
    outcomes: '', // comma-separated
    products: '', // comma-separated slugs
    caseStudies: '', // comma-separated titles
});


export const SolutionForm: React.FC<SolutionFormProps> = ({ solution, onSave, onCancel }) => {
    const isEditing = !!solution;
    const [originalSlug, setOriginalSlug] = useState<string | undefined>(undefined);
    const [formData, setFormData] = useState(getInitialFormData());

    useEffect(() => {
        if (isEditing) {
            setFormData({
                slug: solution.slug,
                name: solution.name,
                problem: solution.problem,
                approach: solution.approach,
                outcomes: solution.outcomes.join(', '),
                products: solution.products.join(', '),
                caseStudies: solution.caseStudies.join(', '),
            });
            setOriginalSlug(solution.slug);
        } else {
             setFormData(getInitialFormData());
             setOriginalSlug(undefined);
        }
    }, [solution, isEditing]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const transformedData: Solution = {
            slug: formData.slug.trim(),
            name: formData.name.trim(),
            problem: formData.problem.trim(),
            approach: formData.approach.trim(),
            outcomes: formData.outcomes.split(',').map(s => s.trim()).filter(Boolean),
            products: formData.products.split(',').map(s => s.trim()).filter(Boolean),
            caseStudies: formData.caseStudies.split(',').map(s => s.trim()).filter(Boolean),
        };
        
        onSave(transformedData, originalSlug);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start pt-10 pb-10 overflow-y-auto" role="dialog" aria-modal="true">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl m-4">
                <div className="p-6 border-b flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-800">{isEditing ? 'Edit Solution' : 'Add New Solution'}</h2>
                    <button onClick={onCancel} className="text-gray-500 hover:text-gray-800">
                        <X size={24} />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"/>
                    </div>
                    <div>
                        <label htmlFor="slug" className="block text-sm font-medium text-gray-700">Slug (unique identifier)</label>
                        <input type="text" name="slug" id="slug" value={formData.slug} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"/>
                    </div>
                    <div>
                        <label htmlFor="problem" className="block text-sm font-medium text-gray-700">The Problem/Challenge</label>
                        <textarea name="problem" id="problem" rows={3} value={formData.problem} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"></textarea>
                    </div>
                    <div>
                        <label htmlFor="approach" className="block text-sm font-medium text-gray-700">Our Approach</label>
                        <textarea name="approach" id="approach" rows={4} value={formData.approach} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"></textarea>
                    </div>
                    <div>
                        <label htmlFor="outcomes" className="block text-sm font-medium text-gray-700">Outcomes (comma-separated)</label>
                        <input type="text" name="outcomes" id="outcomes" value={formData.outcomes} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"/>
                    </div>
                    <div>
                        <label htmlFor="products" className="block text-sm font-medium text-gray-700">Product Slugs (comma-separated)</label>
                        <input type="text" name="products" id="products" value={formData.products} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"/>
                    </div>
                    <div>
                        <label htmlFor="caseStudies" className="block text-sm font-medium text-gray-700">Case Study Titles (comma-separated)</label>
                        <input type="text" name="caseStudies" id="caseStudies" value={formData.caseStudies} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"/>
                    </div>
                    
                    <div className="pt-4 border-t flex justify-end gap-3">
                        <button type="button" onClick={onCancel} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                            Cancel
                        </button>
                         <button type="submit" className="bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent-hover transition-colors">
                            Save Solution
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
