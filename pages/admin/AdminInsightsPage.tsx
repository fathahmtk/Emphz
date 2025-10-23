import React, { useState, useEffect } from 'react';
import { BlogPost } from '../../types';
import { getBlogPosts, addBlogPost, updateBlogPost, deleteBlogPost } from '../../services/mockApi';
import { Plus, Edit, Trash } from 'lucide-react';
import { InsightForm } from '../../components/InsightForm';

const AdminInsightsPage: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

    const fetchPostsData = async () => {
        setLoading(true);
        const data = await getBlogPosts();
        setPosts(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchPostsData();
    }, []);

    const handleAddNew = () => {
        setEditingPost(null);
        setIsModalOpen(true);
    };

    const handleEdit = (post: BlogPost) => {
        setEditingPost(post);
        setIsModalOpen(true);
    };

    const handleDelete = async (postId: number, postTitle: string) => {
        if (window.confirm(`Are you sure you want to delete "${postTitle}"?`)) {
            try {
                await deleteBlogPost(postId);
                await fetchPostsData();
            } catch (error) {
                alert(`Error deleting post: ${(error as Error).message}`);
            }
        }
    };

    const handleSave = async (postData: Omit<BlogPost, 'id' | 'createdAt'> | BlogPost) => {
        try {
            if ('id' in postData) {
                await updateBlogPost(postData as BlogPost);
            } else {
                await addBlogPost(postData);
            }
            setIsModalOpen(false);
            setEditingPost(null);
            await fetchPostsData();
        } catch (error) {
            alert(`Error saving post: ${(error as Error).message}`);
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setEditingPost(null);
    };

    return (
        <div>
            {isModalOpen && <InsightForm post={editingPost} onSave={handleSave} onCancel={handleCancel} />}

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-text-DEFAULT">Manage Insights (Blog)</h1>
                <button 
                    onClick={handleAddNew}
                    className="bg-accent text-white px-4 py-2 rounded-md font-semibold hover:bg-accent-hover transition duration-300 flex items-center self-end sm:self-auto">
                    <Plus size={18} className="mr-2"/> Add New Post
                </button>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-border">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-text-secondary">
                        <thead className="text-xs text-text-secondary uppercase bg-background-light">
                            <tr>
                                <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">Title</th>
                                <th scope="col" className="px-6 py-3 font-semibold">Author</th>
                                <th scope="col" className="px-6 py-3 font-semibold">Status</th>
                                <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">Created At</th>
                                <th scope="col" className="px-6 py-3 font-semibold">Actions</th>
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
                                    <tr key={post.id} className="bg-white border-b border-border hover:bg-background-light">
                                        <td className="px-6 py-4 font-medium text-text-DEFAULT whitespace-nowrap">{post.title}</td>
                                        <td className="px-6 py-4">{post.author}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${post.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                {post.published ? 'Published' : 'Draft'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">{new Date(post.createdAt).toLocaleDateString()}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex space-x-4">
                                                <button onClick={() => handleEdit(post)} className="text-blue-600 hover:text-blue-800"><Edit size={18}/></button>
                                                <button onClick={() => handleDelete(post.id, post.title)} className="text-red-600 hover:text-red-800"><Trash size={18}/></button>
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