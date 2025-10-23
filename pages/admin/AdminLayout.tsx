import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Package, Mail, LogOut, User as UserIcon, FileText, DownloadCloud, ClipboardList, Menu, X, Users } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

const adminNavLinks = [
  { name: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard size={20} /> },
  { name: 'Products', path: '/admin/products', icon: <Package size={20} /> },
  { name: 'Enquiries', path: '/admin/enquiries', icon: <Mail size={20} /> },
  { name: 'Quotations', path: '/admin/quotations', icon: <ClipboardList size={20} /> },
  { name: 'Customers', path: '/admin/customers', icon: <Users size={20} /> },
  { name: 'Insights', path: '/admin/insights', icon: <FileText size={20} /> },
  { name: 'Downloads', path: '/admin/downloads', icon: <DownloadCloud size={20} /> },
];

const AdminSidebar: React.FC<{onLinkClick: () => void}> = ({ onLinkClick }) => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    return (
         <div className="w-64 bg-primary text-gray-200 flex flex-col min-h-screen">
            <div className="px-6 py-5 border-b border-primary-medium">
                <NavLink to="/admin"><img src="/assets/logo-light.png" alt="EMPHZ Admin Logo" className="h-9" /></NavLink>
            </div>
            <nav className="flex-grow p-4">
                {adminNavLinks.map(link => (
                    <NavLink
                        key={link.name}
                        to={link.path}
                        onClick={onLinkClick}
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2.5 mt-2 rounded-lg hover:bg-primary-dark hover:text-white transition-colors duration-200 ${isActive ? 'bg-accent text-white' : 'text-gray-300'}`
                        }
                    >
                        {link.icon}
                        <span className="ml-3 font-medium">{link.name}</span>
                    </NavLink>
                ))}
            </nav>
            <div className="p-4 border-t border-primary-medium">
                <div className="flex items-center mb-4 p-2 rounded-lg bg-primary-dark">
                     <UserIcon className="mr-3 text-gray-300"/>
                     <div>
                        <p className="font-semibold text-white">{user?.name}</p>
                        <p className="text-xs text-gray-300">{user?.role}</p>
                     </div>
                </div>
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
                >
                    <LogOut size={16} className="mr-2" />
                    Logout
                </button>
            </div>
        </div>
    );
};

const AdminHeader: React.FC<{ onMenuClick: () => void }> = ({ onMenuClick }) => (
    <header className="md:hidden bg-background border-b border-border p-4 flex items-center">
        <button onClick={onMenuClick} className="text-text-DEFAULT mr-4">
            <Menu size={24} />
        </button>
        <img src="/assets/logo-dark.png" alt="EMPHZ Admin Logo" className="h-8" />
    </header>
);

const AdminLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex bg-background-light min-h-screen">
        {/* Mobile Sidebar */}
        <div className={`fixed inset-0 z-50 transform md:hidden ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
            <AdminSidebar onLinkClick={() => setIsSidebarOpen(false)} />
        </div>
        {isSidebarOpen && <div className="fixed inset-0 bg-black opacity-50 z-40 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>}

        {/* Desktop Sidebar */}
        <div className="hidden md:flex md:flex-shrink-0">
             <AdminSidebar onLinkClick={() => {}} />
        </div>
        
        <div className="flex flex-col flex-1 w-full">
            <AdminHeader onMenuClick={() => setIsSidebarOpen(true)} />
            <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    </div>
  );
};

export default AdminLayout;