import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { X } from 'lucide-react';

interface ProductFormProps {
    product: Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'categoryName'> | Product | null;
    onSave: (product: Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'categoryName'> | Product) => void;
    onCancel: () => void;
}

const productCategories = [
    { id: 1, name: 'Enclosures' },
    { id: 2, name: 'Kiosks' },
    { id: 3, name: 'Structural' },
    { id: 4, name: 'Housing' },
    { id: 5, name: 'Utilities' },
];

const getInitialFormData = () => ({
    name: '',
    slug: '',
    categoryId: 1,
    summary: '',
    description: '',
    tags: '', // comma-separated string
    specs: '', // key:value, one per line
    imageUrls: '', // comma-separated
    pdfUrls: '', // title:url, one per line
    isFeatured: false,
});


export const ProductForm: React.FC<ProductFormProps> = ({ product, onSave, onCancel }) => {
    const isEditing = product && 'id' in product;
    const [formData, setFormData] = useState(getInitialFormData());

    useEffect(() => {
        if (isEditing) {
            setFormData({
                name: product.name,
                slug: product.slug,
                categoryId: product.categoryId,
                summary: product.summary,
                description: product.description,
                tags: product.tags.join(', '),
                specs: Object.entries(product.specs).map(([k, v]) => `${k}:${v}`).join('\n'),
                imageUrls: product.imageUrls.join(', '),
                pdfUrls: product.pdfUrls.map(p => `${p.title}:${p.url}`).join('\n'),
                isFeatured: product.isFeatured,
            });
        } else {
             setFormData(getInitialFormData());
        }
    }, [product, isEditing]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const { checked } = e.target as HTMLInputElement;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Transform form data back into Product shape
        const transformedData = {
            ...formData,
            tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
            imageUrls: formData.imageUrls.split(',').map(t => t.trim()).filter(Boolean),
            specs: formData.specs.split('\n').reduce((acc, line) => {
                const [key, ...valParts] = line.split(':');
                if (key && valParts.length > 0) {
                    acc[key.trim()] = valParts.join(':').trim();
                }
                return acc;
            }, {} as Record<string, string>),
            pdfUrls: formData.pdfUrls.split('\n').reduce((acc, line) => {
                const [title, ...urlParts] = line.split(':');
                const url = urlParts.join(':').trim();
                if (title && url) {
                    acc.push({ title: title.trim(), url: url });
                }
                return acc;
            }, [] as { title: string; url: string }[]),
            categoryId: Number(formData.categoryId),
        };
        
        const saveData = isEditing ? { ...product, ...transformedData } : transformedData;
        onSave(saveData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start pt-10 pb-10 overflow-y-auto" role="dialog" aria-modal="true">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl m-4">
                <div className="p-6 border-b flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-800">{isEditing ? 'Edit Product' : 'Add New Product'}</h2>
                    <button onClick={onCancel} className="text-gray-500 hover:text-gray-800">
                        <X size={24} />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"/>
                    </div>
                     <div>
                        <label htmlFor="slug" className="block text-sm font-medium text-gray-700">Slug</label>
                        <input type="text" name="slug" id="slug" value={formData.slug} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"/>
                    </div>
                    <div>
                        <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700">Category</label>
                        <select name="categoryId" id="categoryId" value={formData.categoryId} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent">
                           {productCategories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
                        </select>
                    </div>
                     <div>
                        <label htmlFor="summary" className="block text-sm font-medium text-gray-700">Summary</label>
                        <textarea name="summary" id="summary" rows={2} value={formData.summary} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"></textarea>
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea name="description" id="description" rows={4} value={formData.description} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"></textarea>
                    </div>
                     <div>
                        <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Tags (comma-separated)</label>
                        <input type="text" name="tags" id="tags" value={formData.tags} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"/>
                    </div>
                    <div>
                        <label htmlFor="imageUrls" className="block text-sm font-medium text-gray-700">Image URLs (comma-separated)</label>
                        <input type="text" name="imageUrls" id="imageUrls" value={formData.imageUrls} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"/>
                    </div>
                    <div>
                        <label htmlFor="specs" className="block text-sm font-medium text-gray-700">Specifications (one per line, e.g., "Key:Value")</label>
                        <textarea name="specs" id="specs" rows={4} value={formData.specs} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent font-mono text-sm"></textarea>
                    </div>
                     <div>
                        <label htmlFor="pdfUrls" className="block text-sm font-medium text-gray-700">PDFs (one per line, e.g., "Title:URL")</label>
                        <textarea name="pdfUrls" id="pdfUrls" rows={2} value={formData.pdfUrls} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent font-mono text-sm"></textarea>
                    </div>
                    <div className="flex items-center">
                         <input type="checkbox" name="isFeatured" id="isFeatured" checked={formData.isFeatured} onChange={handleChange} className="h-4 w-4 text-accent border-gray-300 rounded focus:ring-accent"/>
                         <label htmlFor="isFeatured" className="ml-2 block text-sm font-medium text-gray-900">Featured Product</label>
                    </div>
                    
                    <div className="pt-4 border-t flex justify-end gap-3">
                        <button type="button" onClick={onCancel} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                            Cancel
                        </button>
                         <button type="submit" className="bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent-hover transition-colors">
                            Save Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
