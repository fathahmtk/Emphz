
import React, { useState, useEffect } from 'react';
import { User, Role } from '../types';
import { X } from 'lucide-react';

interface UserFormProps {
    user: Omit<User, 'id' | 'createdAt' | 'updatedAt'> | User | null;
    onSave: (user: Omit<User, 'id' | 'createdAt' | 'updatedAt'> | User) => void;
    onCancel: () => void;
}

const userRoles = Object.values(Role);

const getInitialFormData = () => ({
    name: '',
    email: '',
    role: Role.VIEWER,
});

export const UserForm: React.FC<UserFormProps> = ({ user, onSave, onCancel }) => {
    const isEditing = user && 'id' in user;
    const [formData, setFormData] = useState(getInitialFormData());

    useEffect(() => {
        if (isEditing) {
            setFormData({
                name: user.name || '',
                email: user.email,
                role: user.role,
            });
        } else {
             setFormData(getInitialFormData());
        }
    }, [user, isEditing]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const saveData = isEditing ? { ...user, ...formData } : formData;
        onSave(saveData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start pt-20">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-lg m-4">
                <div className="p-6 border-b flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-800">{isEditing ? 'Edit User' : 'Add New User'}</h2>
                    <button onClick={onCancel} className="text-gray-500 hover:text-gray-800"><X size={24} /></button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"/>
                    </div>
                     <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"/>
                    </div>
                     <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                        <select name="role" id="role" value={formData.role} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent">
                           {userRoles.map(role => <option key={role} value={role}>{role}</option>)}
                        </select>
                    </div>
                    <div className="pt-4 border-t flex justify-end gap-3">
                        <button type="button" onClick={onCancel} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors">Cancel</button>
                        <button type="submit" className="bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent-hover transition-colors">Save User</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
