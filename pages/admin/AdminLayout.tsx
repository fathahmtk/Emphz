import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Package, Mail, LogOut, User as UserIcon, FileText } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

const adminNavLinks = [
  { name: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard size={20} /> },
  { name: 'Products', path: '/admin/products', icon: <Package size={20} /> },
  { name: 'Enquiries', path: '/admin/enquiries', icon: <Mail size={20} /> },
  { name: 'Insights', path: '/admin/insights', icon: <FileText size={20} /> },
];

const AdminSidebar: React.FC = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    return (
         <div className="w-64 bg-gray-800 text-white flex flex-col min-h-screen">
            <div className="px-6 py-4 border-b border-gray-700">
                <h2 className="text-2xl font-bold">EMPHZ Admin</h2>
            </div>
            <nav className="flex-grow p-4">
                {adminNavLinks.map(link => (
                    <NavLink
                        key={link.name}
                        to={link.path}
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 mt-2 text-gray-300 rounded-md hover:bg-gray-700 hover:text-white transition-colors duration-200 ${isActive ? 'bg-primary' : ''}`
                        }
                    >
                        {link.icon}
                        <span className="ml-3">{link.name}</span>
                    </NavLink>
                ))}
            </nav>
            <div className="p-4 border-t border-gray-700">
                <div className="flex items-center mb-4">
                     <UserIcon className="mr-2"/>
                     <div>
                        <p className="font-semibold">{user?.name}</p>
                        <p className="text-xs text-gray-400">{user?.role}</p>
                     </div>
                </div>
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
                >
                    <LogOut size={16} className="mr-2" />
                    Logout
                </button>
            </div>
        </div>
    );
};

const AdminLayout: React.FC = () => {
  return (
    <div className="flex bg-gray-100">
        <AdminSidebar />
        <main className="flex-1 p-8 overflow-y-auto h-screen">
            <Outlet />
        </main>
    </div>
  );
};

export default AdminLayout;