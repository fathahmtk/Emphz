import React, { useState, useEffect } from 'react';
import { BlogPost } from '../../types';
import { getBlogPosts } from '../../services/mockApi';
import { Plus, Edit, Trash } from 'lucide-react';

const AdminInsightsPage: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const data = await getBlogPosts();
            setPosts(data);
            setLoading(false);
        };
        fetchPosts();
    }, []);

    const handleActionClick = (action: string, postTitle: string) => {
        alert(`${action} clicked for "${postTitle}". This is a UI demonstration; no data will be changed.`);
    };

    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Manage Insights (Blog)</h1>
                <button 
                    onClick={() => alert("Add new post form would appear here.")}
                    className="bg-accent text-white px-4 py-2 rounded-md font-semibold hover:bg-accent-hover transition duration-300 flex items-center self-end sm:self-auto">
                    <Plus size={18} className="mr-2"/> Add New Post
                </button>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">Title</th>
                                <th scope="col" className="px-6 py-3">Author</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">Created At</th>
                                <th scope="col" className="px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                Array.from({ length: 3 }).map((_, index) => (
                                    <tr key={index} className="bg-white border-b">
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded animate-pulse w-48"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded animate-pulse w-12"></div></td>
                                    </tr>
                                ))
                            ) : (
                                posts.map(post => (
                                    <tr key={post.id} className="bg-white border-b hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{post.title}</td>
                                        <td className="px-6 py-4">{post.author}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${post.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                {post.published ? 'Published' : 'Draft'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">{new Date(post.createdAt).toLocaleDateString()}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex space-x-2">
                                                <button onClick={() => handleActionClick('Edit', post.title)} className="text-blue-600 hover:text-blue-800"><Edit size={18}/></button>
                                                <button onClick={() => handleActionClick('Delete', post.title)} className="text-red-600 hover:text-red-800"><Trash size={18}/></button>
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

export default AdminInsightsPage;