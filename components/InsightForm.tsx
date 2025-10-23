import React, { useState, useEffect } from 'react';
import { BlogPost } from '../types';
import { X } from 'lucide-react';

interface InsightFormProps {
    post: Omit<BlogPost, 'id' | 'createdAt'> | BlogPost | null;
    onSave: (post: Omit<BlogPost, 'id' | 'createdAt'> | BlogPost) => void;
    onCancel: () => void;
}

const getInitialFormData = () => ({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    author: 'Admin',
    coverUrl: '',
    published: false,
    publishedAt: undefined,
});

const inputClasses = "mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent bg-white dark:bg-slate-700 dark:text-white";

export const InsightForm: React.FC<InsightFormProps> = ({ post, onSave, onCancel }) => {
    const isEditing = post && 'id' in post;
    const [formData, setFormData] = useState(getInitialFormData());

    useEffect(() => {
        if (isEditing) {
            setFormData({
                title: post.title,
                slug: post.slug,
                excerpt: post.excerpt,
                content: post.content,
                author: post.author,
                coverUrl: post.coverUrl || '',
                published: post.published,
                publishedAt: post.publishedAt
            });
        } else {
             setFormData(getInitialFormData());
        }
    }, [post, isEditing]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const { checked } = e.target as HTMLInputElement;
            setFormData(prev => ({ 
                ...prev, 
                [name]: checked,
                publishedAt: checked ? new Date() : undefined
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const saveData = isEditing ? { ...post, ...formData } : formData;
        onSave(saveData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start pt-10 pb-10 overflow-y-auto">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl w-full max-w-3xl m-4">
                <div className="p-6 border-b dark:border-slate-700 flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-slate-200">{isEditing ? 'Edit Post' : 'Add New Post'}</h2>
                    <button onClick={onCancel} className="text-gray-500 hover:text-gray-800 dark:text-slate-400 dark:hover:text-slate-200"><X size={24} /></button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-slate-300">Title</label>
                        <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} required className={inputClasses}/>
                    </div>
                     <div>
                        <label htmlFor="slug" className="block text-sm font-medium text-gray-700 dark:text-slate-300">Slug</label>
                        <input type="text" name="slug" id="slug" value={formData.slug} onChange={handleChange} required className={inputClasses}/>
                    </div>
                    <div>
                        <label htmlFor="author" className="block text-sm font-medium text-gray-700 dark:text-slate-300">Author</label>
                        <input type="text" name="author" id="author" value={formData.author} onChange={handleChange} required className={inputClasses}/>
                    </div>
                     <div>
                        <label htmlFor="coverUrl" className="block text-sm font-medium text-gray-700 dark:text-slate-300">Cover Image URL</label>
                        <input type="text" name="coverUrl" id="coverUrl" value={formData.coverUrl} onChange={handleChange} className={inputClasses}/>
                    </div>
                     <div>
                        <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 dark:text-slate-300">Excerpt</label>
                        <textarea name="excerpt" id="excerpt" rows={3} value={formData.excerpt} onChange={handleChange} required className={inputClasses}></textarea>
                    </div>
                    <div>
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-slate-300">Content</label>
                        <textarea name="content" id="content" rows={8} value={formData.content} onChange={handleChange} required className={inputClasses}></textarea>
                    </div>
                    <div className="flex items-center">
                         <input type="checkbox" name="published" id="published" checked={formData.published} onChange={handleChange} className="h-4 w-4 text-accent border-gray-300 rounded focus:ring-accent"/>
                         <label htmlFor="published" className="ml-2 block text-sm font-medium text-gray-900 dark:text-slate-300">Publish Post</label>
                    </div>
                    <div className="pt-4 border-t dark:border-slate-700 flex justify-end gap-3">
                        <button type="button" onClick={onCancel} className="bg-gray-200 dark:bg-slate-600 text-gray-800 dark:text-slate-200 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-slate-500 transition-colors">Cancel</button>
                        <button type="submit" className="bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent-hover transition-colors">Save Post</button>
                    </div>
                </form>
            </div>
        </div>
    );
};