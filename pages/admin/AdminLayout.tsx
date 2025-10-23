import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Package, Mail, LogOut, User as UserIcon, FileText, DownloadCloud, ClipboardList, Menu, X, Users, BookOpen, Lightbulb, Users2 } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useI18n } from '../../hooks/useI18n';

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

    const handleLogout = () => {
        onLinkClick(); // Close sidebar on logout
        logout();
        navigate('/admin/login');
    };

    return (
         <div className="w-64 bg-primary text-gray-200 flex flex-col h-full">
            <div className="px-6 py-5 border-b border-primary-medium flex justify-between items-center">
                <NavLink to="/admin" onClick={onLinkClick}><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNzAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCAyNzAgNTAiPjxzdHlsZT4udGV4dC1lbXBoeiB7IGZvbnQ6IGJvbGQgMzZweCAnUG9wcGlucycsIHNhbnMtc2VyaWY7IGZpbGw6ICNmOGZhZmM7IH0gLnRleHQtZ2xvYmFsIHsgZm9udDogNTAwIDM2cHggJ1BvcHBpbnMnLCBzYW5zLXNlcmlmOyBmaWxsOiAjY2JkNWUxOyB9IC5kb3QgeyBmaWxsOiAjQzlBMjI3OyB9PC9zdHlsZT48dGV4dCB4PSIxMCIgeT0iMzgiIGNsYXNzPSJ0ZXh0LWVtcGh6Ij5FTVBIWjwvdGV4dD48dGV4dCB4PSIxNDgiIHk9IjM4IiBjbGFzcz0idGV4dC1nbG9iYWwiPkdsb2JhbDwvdGV4dD48Y2lyY2xlIGN4PSIyNTUiIGN5PSIzNSIgcj0iNSIgY2xhc3M9ImRvdCIvPjwvc3ZnPg==" alt="EMPHZ Global Admin Logo" className="h-9" /></NavLink>
                {onClose && (
                     <button onClick={onClose} className="text-gray-300 hover:text-white md:hidden" aria-label="Close menu">
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
                            `flex items-center px-4 py-2.5 mt-2 rounded-lg hover:bg-primary-dark hover:text-white transition-colors duration-200 ${isActive ? 'bg-accent text-white' : 'text-gray-300'}`
                        }
                    >
                        {link.icon}
                        <span className="ms-3 font-medium">{link.name}</span>
                    </NavLink>
                ))}
            </nav>
            <div className="p-4 border-t border-primary-medium">
                <div className="flex items-center mb-4 p-2 rounded-lg bg-primary-dark">
                     <UserIcon className="me-3 text-gray-300"/>
                     <div>
                        <p className="font-semibold text-white">{user?.name}</p>
                        <p className="text-xs text-gray-300">{user?.role}</p>
                     </div>
                </div>
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
                >
                    <LogOut size={16} className="me-2" />
                    Logout
                </button>
            </div>
        </div>
    );
};

const AdminHeader: React.FC<{ onMenuClick: () => void }> = ({ onMenuClick }) => (
    <header className="md:hidden bg-background border-b border-border p-4 flex items-center sticky top-0 z-30">
        <button onClick={onMenuClick} className="text-text-DEFAULT me-4" aria-label="Open menu">
            <Menu size={24} />
        </button>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNzAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCAyNzAgNTAiPjxzdHlsZT4udGV4dC1lbXBoeiB7IGZvbnQ6IGJvbGQgMzZweCAnUG9wcGlucycsIHNhbnMtc2VyaWY7IGZpbGw6ICMwQjNEOTE7IH0gLnRleHQtZ2xvYmFsIHsgZm9udDogNTAwIDM2cHggJ1BvcHBpbnMnLCBzYW5zLXNlcmlmOyBmaWxsOiAjNjQ3NDhiOyB9IC5kb3QgeyBmaWxsOiAjQzlBMjI3OyB9PC9zdHlsZT48dGV4dCB4PSIxMCIgeT0iMzgiIGNsYXNzPSJ0ZXh0LWVtcGh6Ij5FTVBIWjwvdGV4dD48dGV4dCB4PSIxNDgiIHk9IjM4IiBjbGFzcz0idGV4dC1nbG9iYWwiPkdsb2JhbDwvdGV4dD48Y2lyY2xlIGN4PSIyNTUiIGN5PSIzNSIgcj0iNSIgY2xhc3M9ImRvdCIvPjwvc3ZnPg==" alt="EMPHZ Global Admin Logo" className="h-8" />
    </header>
);

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
    <div className="flex bg-background-light min-h-screen">
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
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" 
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
                <Outlet />
            </main>
        </div>
    </div>
  );
};

export default AdminLayout;