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

const inputClasses = "mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent bg-white dark:bg-slate-700 dark:text-white";

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
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl w-full max-w-lg m-4">
                <div className="p-6 border-b dark:border-slate-700 flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-slate-200">{isEditing ? 'Edit Download' : 'Add New Download'}</h2>
                    <button onClick={onCancel} className="text-gray-500 hover:text-gray-800 dark:text-slate-400 dark:hover:text-slate-200"><X size={24} /></button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-slate-300">Title</label>
                        <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} required className={inputClasses}/>
                    </div>
                     <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-slate-300">Category</label>
                        <select name="category" id="category" value={formData.category} onChange={handleChange} className={inputClasses}>
                           {downloadCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                        </select>
                    </div>
                     <div>
                        <label htmlFor="fileUrl" className="block text-sm font-medium text-gray-700 dark:text-slate-300">File URL</label>
                        <input type="text" name="fileUrl" id="fileUrl" value={formData.fileUrl} onChange={handleChange} required className={inputClasses}/>
                    </div>
                    <div className="pt-4 border-t dark:border-slate-700 flex justify-end gap-3">
                        <button type="button" onClick={onCancel} className="bg-gray-200 dark:bg-slate-600 text-gray-800 dark:text-slate-200 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-slate-500 transition-colors">Cancel</button>
                        <button type="submit" className="bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent-hover transition-colors">Save Download</button>
                    </div>
                </form>
            </div>
        </div>
    );
};