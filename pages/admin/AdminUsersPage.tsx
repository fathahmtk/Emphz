
import React, { useState, useEffect } from 'react';
import { User } from '../../types';
import { getUsers, addUser, updateUser, deleteUser } from '../../services/mockApi';
import { Plus, Edit, Trash } from 'lucide-react';
import { UserForm } from '../../components/UserForm';
import { useToast } from '../../hooks/useToast';
import { useI18n } from '../../hooks/useI18n';

const AdminUsersPage: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState<User | null>(null);
    const { addToast } = useToast();
    const { t } = useI18n();

    const fetchUsersData = async () => {
        setLoading(true);
        const data = await getUsers();
        setUsers(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchUsersData();
    }, []);

    const handleAddNew = () => {
        setEditingUser(null);
        setIsModalOpen(true);
    };

    const handleEdit = (user: User) => {
        setEditingUser(user);
        setIsModalOpen(true);
    };

    const handleDelete = async (userId: number, userName: string) => {
        if (userId === 1) { // Prevent deleting the main admin user
            addToast(t('toasts.deleteAdminProhibited'), 'error');
            return;
        }
        if (window.confirm(`Are you sure you want to delete user "${userName}"?`)) {
            try {
                await deleteUser(userId);
                addToast(t('toasts.deleteSuccess').replace('{name}', userName), 'success');
                await fetchUsersData();
            } catch (error) {
                const err = error as Error;
                addToast(t('toasts.deleteError').replace('{error}', err.message), 'error');
            }
        }
    };

    const handleSave = async (userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'> | User) => {
        try {
            if ('id' in userData) {
                await updateUser(userData as User);
            } else {
                await addUser(userData);
            }
            addToast(t('toasts.saveSuccess'), 'success');
            setIsModalOpen(false);
            setEditingUser(null);
            await fetchUsersData();
        } catch (error) {
            const err = error as Error;
            addToast(t('toasts.saveError').replace('{error}', err.message), 'error');
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setEditingUser(null);
    };

    return (
        <div>
            {isModalOpen && <UserForm user={editingUser} onSave={handleSave} onCancel={handleCancel} />}

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-text-DEFAULT dark:text-slate-200">Manage Users</h1>
                <button 
                    onClick={handleAddNew}
                    className="bg-accent text-white px-4 py-2 rounded-md font-semibold hover:bg-accent-hover transition duration-300 flex items-center self-end sm:self-auto">
                    <Plus size={18} className="mr-2"/> Add New User
                </button>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-lg shadow-sm border border-border dark:border-slate-700">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-text-secondary dark:text-slate-400">
                        <thead className="text-xs text-text-secondary dark:text-slate-400 uppercase bg-background-light dark:bg-slate-700">
                            <tr>
                                <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">Name</th>
                                <th scope="col" className="px-6 py-3 font-semibold">Email</th>
                                <th scope="col" className="px-6 py-3 font-semibold">Role</th>
                                <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">Created At</th>
                                <th scope="col" className="px-6 py-3 font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                Array.from({ length: 3 }).map((_, index) => (
                                    <tr key={index} className="bg-white dark:bg-slate-800 border-b dark:border-slate-700 animate-pulse">
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-32"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-48"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-16"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-24"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-16"></div></td>
                                    </tr>
                                ))
                            ) : (
                                users.map(user => (
                                    <tr key={user.id} className="bg-white dark:bg-slate-800 border-b dark:border-slate-700 hover:bg-background-light dark:hover:bg-slate-700/50">
                                        <td className="px-6 py-4 font-medium text-text-DEFAULT dark:text-slate-200 whitespace-nowrap">{user.name}</td>
                                        <td className="px-6 py-4">{user.email}</td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                                                {user.role}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">{new Date(user.createdAt).toLocaleDateString()}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex space-x-4">
                                                <button onClick={() => handleEdit(user)} className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"><Edit size={18}/></button>
                                                <button onClick={() => handleDelete(user.id, user.name || '')} disabled={user.id === 1} className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 disabled:text-gray-400 dark:disabled:text-slate-600 disabled:cursor-not-allowed"><Trash size={18}/></button>
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

export default AdminUsersPage;