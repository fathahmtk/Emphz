import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Package, Mail, LogOut, User as UserIcon, FileText, DownloadCloud, ClipboardList, Menu, X, Users, BookOpen, Lightbulb, Users2 } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useI18n } from '../../hooks/useI18n';
import { ToastContainer } from '../../components/Toast';

const AdminSidebar: React.FC<{onLinkClick: () => void; onClose?: () => void;}> = ({ onLinkClick, onClose }) => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const { t } = useI18n();

    const adminNavLinks = [
      { name: t('admin.sidebar.dashboard'), path: '/admin/dashboard', icon: <LayoutDashboard size={20} /> },
      { name: t('admin.sidebar.products'), path: '/admin/products', icon: <Package size={20} /> },
      { name: t('admin.sidebar.enquiries'), path: '/admin/enquiries', icon: <Mail size={20} /> },
      { name: t('admin.sidebar.quotations'), path: '/admin/quotations', icon: <ClipboardList size={20} /> },
      { name: t('admin.sidebar.customers'), path: '/admin/customers', icon: <Users size={20} /> },
      { name: t('admin.sidebar.caseStudies'), path: '/admin/case-studies', icon: <BookOpen size={20} /> },
      { name: t('admin.sidebar.solutions'), path: '/admin/solutions', icon: <Lightbulb size={20} /> },
      { name: t('admin.sidebar.insights'), path: '/admin/insights', icon: <FileText size={20} /> },
      { name: t('admin.sidebar.downloads'), path: '/admin/downloads', icon: <DownloadCloud size={20} /> },
      { name: t('admin.sidebar.users'), path: '/admin/users', icon: <Users2 size={20} /> },
    ];

    const logoSvg = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTgwIDMwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNSAwTDI5IDhWMjJMMTUgMzBMMSAyMlY4TDE1IDBaIiBmaWxsPSIjMDA5NzlGIi8+PHRleHQgeD0iMzUiIHk9IjIyIiBmb250LWZhbWlseT0iT3JiaXRyb24sIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9InZhcigtLWNvbG9yLXRleHQtZGVmYXVsdCkiPkVNUFoiL3RleHQ+PHRleHQgeD0iMTAwIiB5PSIyMiIgZm9udC1mYW1pbHk9IlBvcHBpbnMsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9InZhcigtLWNvbG9yLXRleHQtZGVmYXVsdCkiPkdsb2JhbDwvdGV4dD48L3N2Zz4=`;

    const handleLogout = () => {
        onLinkClick(); // Close sidebar on logout
        logout();
        navigate('/admin/login');
    };

    return (
         <div className="w-64 bg-background-default dark:bg-primary-dark text-text-DEFAULT flex flex-col h-full border-e border-border-default dark:border-border-dark">
            <div className="px-6 py-5 border-b border-border-default dark:border-border-dark flex justify-between items-center">
                <NavLink to="/admin" onClick={onLinkClick}><img src={logoSvg} alt="EMPHZ Global Admin Logo" className="h-9" /></NavLink>
                {onClose && (
                     <button onClick={onClose} className="text-gray-500 hover:text-text-DEFAULT md:hidden" aria-label="Close menu">
                        <X size={24} />
                    </button>
                )}
            </div>
            <nav className="flex-grow p-4 overflow-y-auto">
                {adminNavLinks.map(link => (
                    <NavLink
                        key={link.name}
                        to={link.path}
                        onClick={onLinkClick}
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2.5 mt-2 rounded-lg transition-colors duration-200 ${isActive ? 'bg-accent text-white font-semibold' : 'text-text-secondary hover:bg-background-light dark:hover:bg-primary hover:text-text-DEFAULT'}`
                        }
                    >
                        {link.icon}
                        <span className="ms-3 font-medium">{link.name}</span>
                    </NavLink>
                ))}
            </nav>
            <div className="p-4 border-t border-border-default dark:border-border-dark">
                <div className="flex items-center p-2 rounded-lg bg-background-light dark:bg-primary mb-4">
                     <UserIcon className="me-3 text-text-secondary"/>
                     <div>
                        <p className="font-semibold text-text-DEFAULT">{user?.name}</p>
                        <p className="text-xs text-text-secondary">{user?.role}</p>
                     </div>
                </div>
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-danger rounded-md hover:opacity-90 transition-opacity"
                >
                    <LogOut size={16} className="me-2" />
                    Logout
                </button>
            </div>
        </div>
    );
};

const AdminHeader: React.FC<{ onMenuClick: () => void }> = ({ onMenuClick }) => {
    const logoSvg = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTgwIDMwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNSAwTDI5IDhWMjJMMTUgMzBMMSAyMlY4TDE1IDBaIiBmaWxsPSIjMDA5NzlGIi8+PHRleHQgeD0iMzUiIHk9IjIyIiBmb250LWZhbWlseT0iT3JiaXRyb24sIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9InZhcigtLWNvbG9yLXRleHQtZGVmYXVsdCkiPkVNUFoiL3RleHQ+PHRleHQgeD0iMTAwIiB5PSIyMiIgZm9udC1mYW1pbHk9IlBvcHBpbnMsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9InZhcigtLWNvbG9yLXRleHQtZGVmYXVsdCkiPkdsb2JhbDwvdGV4dD48L3N2Zz4=`;
    return (
        <header className="md:hidden bg-background-default dark:bg-primary-dark border-b border-border-default dark:border-border-dark p-4 flex items-center sticky top-0 z-30">
            <button onClick={onMenuClick} className="text-text-DEFAULT me-4" aria-label="Open menu">
                <Menu size={24} />
            </button>
            <img src={logoSvg} alt="EMPHZ Global Admin Logo" className="h-8" />
        </header>
    );
};

const AdminLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  return (
    <div className="flex bg-background-light dark:bg-primary min-h-screen">
        {/* Mobile Sidebar */}
        <div 
          className={`fixed inset-y-0 left-0 z-50 transform md:hidden ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="sidebar-title"
        >
            <AdminSidebar onLinkClick={() => setIsSidebarOpen(false)} onClose={() => setIsSidebarOpen(false)} />
        </div>
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-primary/[.50] z-40 md:hidden" 
            onClick={() => setIsSidebarOpen(false)}
            aria-hidden="true"
          ></div>
        )}

        {/* Desktop Sidebar */}
        <div className="hidden md:flex md:flex-shrink-0">
             <div className="w-64 fixed h-full">
                <AdminSidebar onLinkClick={() => {}} />
             </div>
             <div className="w-64"></div> {/* Spacer */}
        </div>
        
        <div className="flex flex-col flex-1 w-full min-w-0">
            <AdminHeader onMenuClick={() => setIsSidebarOpen(true)} />
            <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
                <ToastContainer />
                <Outlet />
            </main>
        </div>
    </div>
  );
};

export default AdminLayout;