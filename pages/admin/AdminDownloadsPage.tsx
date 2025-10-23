import React, { useState, useEffect } from 'react';
import { Download } from '../../types';
import { getDownloads, addDownload, updateDownload, deleteDownload } from '../../services/mockApi';
import { Plus, Edit, Trash } from 'lucide-react';
import { DownloadForm } from '../../components/DownloadForm';
import { useToast } from '../../hooks/useToast';
import { useI18n } from '../../hooks/useI18n';

const AdminDownloadsPage: React.FC = () => {
    const [downloads, setDownloads] = useState<Download[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingDownload, setEditingDownload] = useState<Download | null>(null);
    const { addToast } = useToast();
    const { t } = useI18n();

    const fetchDownloadsData = async () => {
        setLoading(true);
        const data = await getDownloads();
        setDownloads(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchDownloadsData();
    }, []);

    const handleAddNew = () => {
        setEditingDownload(null);
        setIsModalOpen(true);
    };

    const handleEdit = (download: Download) => {
        setEditingDownload(download);
        setIsModalOpen(true);
    };

    const handleDelete = async (downloadId: number, downloadTitle: string) => {
        if (window.confirm(`Are you sure you want to delete "${downloadTitle}"?`)) {
            try {
                await deleteDownload(downloadId);
                addToast(t('toasts.deleteSuccess').replace('{name}', downloadTitle), 'success');
                await fetchDownloadsData();
            } catch (error) {
                const err = error as Error;
                addToast(t('toasts.deleteError').replace('{error}', err.message), 'error');
            }
        }
    };

    const handleSave = async (downloadData: Omit<Download, 'id' | 'createdAt' | 'views'> | Download) => {
        try {
            if ('id' in downloadData) {
                await updateDownload(downloadData as Download);
            } else {
                await addDownload(downloadData);
            }
            addToast(t('toasts.saveSuccess'), 'success');
            setIsModalOpen(false);
            setEditingDownload(null);
            await fetchDownloadsData();
        } catch (error) {
            const err = error as Error;
            addToast(t('toasts.saveError').replace('{error}', err.message), 'error');
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setEditingDownload(null);
    };

    return (
        <div>
            {isModalOpen && <DownloadForm download={editingDownload} onSave={handleSave} onCancel={handleCancel} />}

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-text-DEFAULT dark:text-slate-200">Manage Downloads</h1>
                <button 
                    onClick={handleAddNew}
                    className="bg-accent text-white px-4 py-2 rounded-md font-semibold hover:bg-accent-hover transition duration-300 flex items-center self-end sm:self-auto">
                    <Plus size={18} className="mr-2"/> Add New Download
                </button>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-lg shadow-sm border border-border dark:border-slate-700">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-text-secondary dark:text-slate-400">
                        <thead className="text-xs text-text-secondary dark:text-slate-400 uppercase bg-background-light dark:bg-slate-700">
                            <tr>
                                <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">Title</th>
                                <th scope="col" className="px-6 py-3 font-semibold">Category</th>
                                <th scope="col" className="px-6 py-3 font-semibold">Views</th>
                                <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">Created At</th>
                                <th scope="col" className="px-6 py-3 font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                Array.from({ length: 5 }).map((_, index) => (
                                    <tr key={index} className="bg-white dark:bg-slate-800 border-b dark:border-slate-700">
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 dark:bg-slate-700 rounded animate-pulse w-48"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 dark:bg-slate-700 rounded animate-pulse w-24"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 dark:bg-slate-700 rounded animate-pulse w-16"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 dark:bg-slate-700 rounded animate-pulse w-20"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 dark:bg-slate-700 rounded animate-pulse w-12"></div></td>
                                    </tr>
                                ))
                            ) : (
                                downloads.map(download => (
                                    <tr key={download.id} className="bg-white dark:bg-slate-800 border-b dark:border-slate-700 hover:bg-background-light dark:hover:bg-slate-700/50">
                                        <td className="px-6 py-4 font-medium text-text-DEFAULT dark:text-slate-200 whitespace-nowrap">{download.title}</td>
                                        <td className="px-6 py-4">{download.category}</td>
                                        <td className="px-6 py-4">{download.views}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{new Date(download.createdAt).toLocaleDateString()}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex space-x-4">
                                                <button onClick={() => handleEdit(download)} className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"><Edit size={18}/></button>
                                                <button onClick={() => handleDelete(download.id, download.title)} className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"><Trash size={18}/></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDownloadsPage;