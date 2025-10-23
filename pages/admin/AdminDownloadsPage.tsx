import React, { useState, useEffect } from 'react';
import { Download } from '../../types';
import { getDownloads } from '../../services/mockApi';
import { Plus, Edit, Trash } from 'lucide-react';

const AdminDownloadsPage: React.FC = () => {
    const [downloads, setDownloads] = useState<Download[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDownloads = async () => {
            setLoading(true);
            const data = await getDownloads();
            setDownloads(data);
            setLoading(false);
        };
        fetchDownloads();
    }, []);

    const handleActionClick = (action: string, fileName: string) => {
        alert(`${action} clicked for "${fileName}". This is a UI demonstration; no data will be changed.`);
    };

    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Manage Downloads</h1>
                <button 
                    onClick={() => alert("Add new download form would appear here.")}
                    className="bg-primary text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-800 transition duration-300 flex items-center self-end sm:self-auto">
                    <Plus size={18} className="mr-2"/> Add New Download
                </button>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">Title</th>
                                <th scope="col" className="px-6 py-3">Category</th>
                                <th scope="col" className="px-6 py-3">Views</th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">Created At</th>
                                <th scope="col" className="px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                Array.from({ length: 5 }).map((_, index) => (
                                    <tr key={index} className="bg-white border-b">
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded animate-pulse w-48"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded animate-pulse w-12"></div></td>
                                    </tr>
                                ))
                            ) : (
                                downloads.map(download => (
                                    <tr key={download.id} className="bg-white border-b hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{download.title}</td>
                                        <td className="px-6 py-4">{download.category}</td>
                                        <td className="px-6 py-4">{download.views}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{new Date(download.createdAt).toLocaleDateString()}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex space-x-2">
                                                <button onClick={() => handleActionClick('Edit', download.title)} className="text-blue-600 hover:text-blue-800"><Edit size={18}/></button>
                                                <button onClick={() => handleActionClick('Delete', download.title)} className="text-red-600 hover:text-red-800"><Trash size={18}/></button>
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