import React, { useState, useEffect } from 'react';
import { CaseStudy } from '../types';
import { X } from 'lucide-react';

interface CaseStudyFormProps {
    study: Omit<CaseStudy, 'id' | 'createdAt'> | CaseStudy | null;
    onSave: (study: Omit<CaseStudy, 'id' | 'createdAt'> | CaseStudy) => void;
    onCancel: () => void;
}

const getInitialFormData = () => ({
    client: '',
    title: '',
    industry: '',
    challenge: '',
    solution: '',
    result: '',
    logoUrl: '',
    imageUrl: '',
});


export const CaseStudyForm: React.FC<CaseStudyFormProps> = ({ study, onSave, onCancel }) => {
    const isEditing = study && 'id' in study;
    const [formData, setFormData] = useState(getInitialFormData());

    useEffect(() => {
        if (isEditing) {
            setFormData({
                client: study.client,
                title: study.title,
                industry: study.industry,
                challenge: study.challenge,
                solution: study.solution,
                result: study.result,
                logoUrl: study.logoUrl || '',
                imageUrl: study.imageUrl || '',
            });
        } else {
             setFormData(getInitialFormData());
        }
    }, [study, isEditing]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const saveData = isEditing ? { ...study, ...formData } : formData;
        onSave(saveData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start pt-10 pb-10 overflow-y-auto" role="dialog" aria-modal="true">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl m-4">
                <div className="p-6 border-b flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-800">{isEditing ? 'Edit Case Study' : 'Add New Case Study'}</h2>
                    <button onClick={onCancel} className="text-gray-500 hover:text-gray-800">
                        <X size={24} />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                        <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"/>
                    </div>
                    <div>
                        <label htmlFor="client" className="block text-sm font-medium text-gray-700">Client</label>
                        <input type="text" name="client" id="client" value={formData.client} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"/>
                    </div>
                     <div>
                        <label htmlFor="industry" className="block text-sm font-medium text-gray-700">Industry</label>
                        <input type="text" name="industry" id="industry" value={formData.industry} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"/>
                    </div>
                    <div>
                        <label htmlFor="challenge" className="block text-sm font-medium text-gray-700">Challenge</label>
                        <textarea name="challenge" id="challenge" rows={3} value={formData.challenge} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"></textarea>
                    </div>
                    <div>
                        <label htmlFor="solution" className="block text-sm font-medium text-gray-700">Solution</label>
                        <textarea name="solution" id="solution" rows={4} value={formData.solution} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"></textarea>
                    </div>
                    <div>
                        <label htmlFor="result" className="block text-sm font-medium text-gray-700">Result</label>
                        <textarea name="result" id="result" rows={2} value={formData.result} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"></textarea>
                    </div>
                    <div>
                        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL</label>
                        <input type="text" name="imageUrl" id="imageUrl" value={formData.imageUrl} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"/>
                    </div>
                    <div>
                        <label htmlFor="logoUrl" className="block text-sm font-medium text-gray-700">Client Logo URL</label>
                        <input type="text" name="logoUrl" id="logoUrl" value={formData.logoUrl} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"/>
                    </div>
                    
                    <div className="pt-4 border-t flex justify-end gap-3">
                        <button type="button" onClick={onCancel} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                            Cancel
                        </button>
                         <button type="submit" className="bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent-hover transition-colors">
                            Save Case Study
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
