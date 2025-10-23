import React, { useState, useEffect } from 'react';
import { Download } from '../types';
import { X } from 'lucide-react';

interface DownloadFormProps {
    download: Omit<Download, 'id' | 'createdAt' | 'views'> | Download | null;
    onSave: (download: Omit<Download, 'id' | 'createdAt' | 'views'> | Download) => void;
    onCancel: () => void;
}

const downloadCategories = ['Datasheet', 'Certificate', 'CAD', 'Guide', 'Company Profile'];

const getInitialFormData = () => ({
    title: '',
    category: 'Datasheet' as Download['category'],
    fileUrl: '#',
});

export const DownloadForm: React.FC<DownloadFormProps> = ({ download, onSave, onCancel }) => {
    const isEditing = download && 'id' in download;
    const [formData, setFormData] = useState(getInitialFormData());

    useEffect(() => {
        if (isEditing) {
            setFormData({
                title: download.title,
                category: download.category,
                fileUrl: download.fileUrl,
            });
        } else {
             setFormData(getInitialFormData());
        }
    }, [download, isEditing]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const saveData = isEditing ? { ...download, ...formData } : formData;
        onSave(saveData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start pt-20">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-lg m-4">
                <div className="p-6 border-b flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-800">{isEditing ? 'Edit Download' : 'Add New Download'}</h2>
                    <button onClick={onCancel} className="text-gray-500 hover:text-gray-800"><X size={24} /></button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                        <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"/>
                    </div>
                     <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                        <select name="category" id="category" value={formData.category} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent">
                           {downloadCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                        </select>
                    </div>
                     <div>
                        <label htmlFor="fileUrl" className="block text-sm font-medium text-gray-700">File URL</label>
                        <input type="text" name="fileUrl" id="fileUrl" value={formData.fileUrl} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"/>
                    </div>
                    <div className="pt-4 border-t flex justify-end gap-3">
                        <button type="button" onClick={onCancel} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors">Cancel</button>
                        <button type="submit" className="bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent-hover transition-colors">Save Download</button>
                    </div>
                </form>
            </div>
        </div>
    );
};