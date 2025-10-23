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

    const logoSvg = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzM0IiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMzM0IDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4KPHBhdGggZD0iTTI1LjMzMjEgMEw1MC42NjQyIDE0LjYyODlWNDMuODg2N0wyNS4zMzIxIDU4LjUxNTZMMC4wMDAwMyA0My44ODY3VjE0LjYyODlaIiBmaWxsPSIjMUExQzFGIi8+CjxwYXRoIGQ9Ik0yNS4zMzIxIDBMMTUuODgyMyA1LjQ0MDM3VjUyLjA3NTJMMjUuMzMyMSA1OC41MTU2IiBmaWxsPSIjMEE5NzlGIi8+CjxwYXRoIGQ9Ik0yNS4zMzIxIDBMMzQuNzgxOSA1LjQ0MDM3VjUyLjA3NTJMMjUuMzMyMSA1OC41MTU2IiBmaWxsPSIjMEE5NzlGIi8+CjxwYXRoIGQ9Ik0yNS4zMzIxIDBMMjAuNTU3MiAzLjI3MzA5VjU1LjI0MjVMMjUuMzMyMSA1OC41MTU2IiBmaWxsPSIjMEE5NzlGIi8+CjxwYXRoIGQ9Ik0yNS4zMzIxIDBMMjUuMzMyMSAwTDUwLjY2NDIgMTQuNjI4OVY0My44ODY3TDI1LjMzMjEgNTguNTE1NkwyNS4zMzIxIDU4LjUxNTYiIGZpbGw9IiMwMDk3OUYiLz4KPHBhdGggZD0iTTMwLjExMDcgMjEuOTA1MUwyNS4zMzU4IDI0Ljc4MDFMMjAuNTYwOCAyMS45MDUxVjE2LjEyNTFMMjUuMzM1OCAxMy4yNDUxTDMwLjExMDcgMTYuMTI1MVYyMS45MDUxWiIgZmlsbD0iI0JDRTVCMiIvPgo8cGF0aCBkPSJNMjUuMzM1OCAyNC43ODAxTDIwLjU2MDggMjEuOTA1MVYxNi4xMjUxTDI1LjMzNTggMTMuMjQ1MUwyNS4zMzU4IDI0Ljc4MDFaIiBmaWxsPSIjNDg2QTY5Ii8+CjxwYXRoIGQ9Ik0zMC4xMTA3IDM2LjYxMDFMMjUuMzM1OCAzOS40OTAxTDIwLjU2MDggMzYuNjEwMVYzMC44MzAxbDIuMzg3NSAxLjM4VjM1LjIzMDFsMi4zODc1IDEuMzhsMi4zODc1LTEuMzhWMzIuMjEwMWwyLjM4NzUtMS4zOFYzNi42MTAxWiIgZmlsbD0iI0JDRTVCMiIvPgo8cGF0aCBkPSJNMjUuMzM1OCAzOS40OTAxTDIwLjU2MDggMzYuNjEwMVYzMC44MzAxTDIyLjk0ODMgMzIuMjEwMVYzNS4yMzAxTDI1LjMzNTggMzYuNjEwMUwyNS4zMzU4IDM5LjQ5MDFaIiBmaWxsPSIjNDg2QTY5Ii8+CjwvZz4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAxKSI+CjxwYXRoIGQ9Ik03MC4yNjU2IDM0LjQzNzVINDguODI4MVYyMy4wNjI1SDcwLjI2NTZWNTEuNDM3NUg4MC4xNDA2VjIzLjA2MjVIOTMuMTU2MlYxMy41OTM4SDgwLjE0MDZWMGg2My43MDNWMTMuNTkzOEg5Ni41OTM4VjIzLjA2MjVIMTEyLjcxOVY1My41OTM4SDk2LjU5MzhWNDEuOTM3NUg4MC4xNDA2VjYzLjQ2ODhIMTIxLjc2NlY1MS40Mzc1SDEyNy4xNDFWMTMuNTkzOEgxMzUuMjY2VjBINzAuMjY1NlYzNC40Mzc1Wk0xMjEuNzY2IDIuODI4MTJWMTAuNzY1Nkg4My4wNTA4VjIuODI4MTJIMTIxLjc2NlpNOTMuNjQwNiA0MS45Mzc1SDkzLjE1NjJWMzIuNTYyNUg4MC4xNDA2VjM0LjQzNzVIMTEyLjcxOVYyMy4wNjI1SDEyNy4xNDFWNDEuOTM3NUg5My42NDA2WiIgZmlsbD0iIzFBMUMxRiIvPgo8cGF0aCBkPSJNMTQyLjI2NiAyMy4wNjI1SDIxNC4zVjEzLjU5MzhIMTMyLjI5N1Y2My40Njg4SDI0My4xMjVWNTMuOTA2MkgxNDIuMjY2VjQ0LjQzNzVIMjA1LjMyOFYzNC45MDYySDE0Mi4yNjZWMjMuMDYyNVoiIGZpbGw9IiMxQTFDMUYiLz4KPHBhdGggZD0iTTI3NC43MDMgNTMuOTA2MkgzMTIuNDIyVjQ0LjQzNzVIMjg0LjQ4NFYwSDI3NC43MDNWNTMuOTA2MloiIGZpbGw9IiMxQTFDMUYiLz4KPHBhdGggZD0iTTIyMy40MjIgNjMuNDY4OEgyMzUuMTg4VjBINDIuOTM3NVYxMy41OTM4SDIzOC4wMTZWMzQuOTA2MkgzMjUuMjAzVjQ0LjQzNzVIMjM4LjAxNlY2My40Njg4SDIyMy40MjJaIiBmaWxsPSIjMUExQzFGIi8+CjxwYXRoIGQ9Ik0yNDkuNTE2IDIuODI4MTJDMjQ4LjQxMyAyLjgyODEyIDI0Ny40NDYgMy4xNTI4OCAyNDYuNjE1IDMuODAyNDdDMjQ1Ljc4NCA0LjQ1MjA1IDI0NS4wNTggNS4yOTYyNiAyNDQuNDM4IDYuMzM1MTlDMjQzLjgxNyA3LjM3NDA2IDI0My4zNTIgOC41NzQ3NCAyNDMuMDQyIDkuOTM3MjRDMTY4LjQzOCAxMi40Mzc1IDEzMy4yMDMgMTMuNTkzOCAxMzIuMjk3IDEzLjU5MzhWMjMuMDYyNUgxNDIuMjY2VjM0LjkwNjJIMjA1LjMyOFY0NC40Mzc1SDE0Mi4yNjZWMzQuOTA2MkgxMzIuMjk3VjQ0LjQzNzVIMTQyLjI2NlY1M04OTA2MkgxMzIuMjk3VjYzLjQ2ODhIMjQzLjEyNVY1My45MDYySDI3NC43MDNWNDQuNDM3NUgyODQuNDg0VjM0LjkwNjJIMjc0LjcwM1YyMy4wNjI1SDI4NC40ODRWMTMuNTkzOEgyNzQuNzAzVjBIMjg0LjQ4NFYzNC45MDYySDMyNS4yMDNWMjMuMDYyNUgzMTIuNDIyVjEzLjU5MzhIMzEyLjYwOVYzNC45MDYySDMzMy41VjBINDAuNDUzMVYxMy41OTM4SDM3LjAyMzRWMEgyMjMuNDIyVjEzLjU5MzhIMjM1LjE4OFYwSDIzOC4wMTZWMTMuNTkzOEgyMjMuNDIyVjIzLjA2MjVIMjE0LjNWMTMuNTkzOEgyMTMuOTg0VjIzLjA2MjVIMjE0LjNDMTk5LjQ2OSAyMy4wNjI1IDE3OS45MjIgMjEuNTE1NiAxNjMuOTA2IDE4LjYyNUgxNjUuOTY5QzE2NC43NDQgMTguNTQxNSAxNjMuNjI2IDE4LjQ4OTUgMTYyLjYxNSAxOC40Njg4QzE2MS42MDQgMTguNDQ4IDE2MC42MzYgMTguNDM3NSAxNTkuNzAzIDE4LjQzNzVDMTQ0LjEzMSAxOC40Mzc1IDEyOS45MTMgMTkuMDQxMSAxMTcuMDQ3IDIwLjI1QzE2Ni43MDMgMjIuMDYyNSAyMDYuMTQxIDI0LjA2MjUgMjE3LjQzOCAyNC45Mzc1SDIyMi4zNzVWMTYuMjgxMkgxMzUuMjY2VjBINzAuMjY1NlYzNC40Mzc1SDQ4LjgyODFWMjMuMDYyNUg3MC4yNjU2VjUxLjQzNzVINDguODI4MVY2My40Njg4SDcwLjI2NTZWNTEuNDM3NUg4MC4xNDA2VjIzLjA2MjVIOTMuMTU2MlYxMy41OTM4SDgwLjE0MDZWMEg4My4wNTA4VjEzLjU5MzhIODAuMTQwNlYyMy4wNjI1SDk2LjU5MzhWMzIuNTYyNUg5My4xNTYyVjQxLjkzNzVIMTI3LjE0MVYyMy4wNjI1SDEzNS4yNjZWMTMuNTkzOEgxMjcuMTQxVjUxLjQzNzVIMTIxLjc2NlY2My40Njg4SDgwLjE0MDZWNDEuOTM3NUg5Ni41OTM4VjUzLjU5MzhIMTEyLjcxOVYyMy4wNjI1SDEwMC4wNDdWMzIuNTYyNUg5Ni41OTM4VjQxLjkzNzVIOzMuNTE1NlYyMy4wNjI1SDk2LjU5MzhWMTMuNTkzOEg5My4xNTYyVjIzLjA2MjVIODAuMTQwNlYzNC40Mzc1SDkzLjE1NjJWMzIuNTYyNUgxMDIuNTYyVjQxLjkzNzVIMTIxLjc2NlY1MS40Mzc1SDExMi43MTlWMzQuNDM3NUg5My42NDA2VjQxLjkzNzVIMTIxLjc2NlYxMy41OTM4SDEyNS44MjdWMEgxMzUuMjY2VjEzLjU5MzhIMTI3LjE0MVYyMy4wNjI1SDExMi43MTlWMTEuODc1SDEyMS43NjZWMEgxMjUuODI3QzEyOC4xODEgMi4zNTg4NiAxMjkuNjg4IDQuNTkzNzUgMTMwLjQ1MyA2LjY4NzVDMTMxLjIxOSA4Ljc4MTI1IDEzMS41OTQgMTAuODU5NCAxMzEuNTk0IDEyLjkyMThWMjAuODQzOEgxMzAuMDQ3VjE4Ljg3NUgxMjguNVYxNi45MDYySDEyNi45NTNWMTQuOTM3NUgxMjUuNDIyVjEyLjk2ODhIMTIzLjg5MVYxMS4wNjI1SDEyMi4zNDRWOS4xNTYyNUgxMjAuNzk3VjcuMjVIMTE5LjI1VjUuMzQzNzVIMTE3LjcwM1YzLjQzNzVIMTE2LjE1NlYxLjUyMDgzQzEwNy40MDMgMS4zMTI1IDk4LjEzOTIgMS4yNSA4OC41NDY5IDEuMjVWMEg0Mi45Mzc1VjEzLjU5MzhINDIuOTM3NVYwSDI0OS41MTZaIiBmaWxsPSIjMUExQzFGIi8+CjwvZz4KPC9zdmc+Cg==`;

    const handleLogout = () => {
        onLinkClick(); // Close sidebar on logout
        logout();
        navigate('/admin/login');
    };

    return (
         <div className="w-64 bg-white text-graphite flex flex-col h-full border-e border-border">
            <div className="px-6 py-5 border-b border-border flex justify-between items-center">
                <NavLink to="/admin" onClick={onLinkClick}><img src={logoSvg} alt="EMPHZ Global Admin Logo" className="h-9" /></NavLink>
                {onClose && (
                     <button onClick={onClose} className="text-gray-500 hover:text-graphite md:hidden" aria-label="Close menu">
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
                            `flex items-center px-4 py-2.5 mt-2 rounded-lg transition-colors duration-200 ${isActive ? 'bg-teal text-white font-semibold' : 'text-text-secondary hover:bg-background-light hover:text-graphite'}`
                        }
                    >
                        {link.icon}
                        <span className="ms-3 font-medium">{link.name}</span>
                    </NavLink>
                ))}
            </nav>
            <div className="p-4 border-t border-border">
                <div className="flex items-center p-2 rounded-lg bg-background-light mb-4">
                     <UserIcon className="me-3 text-text-secondary"/>
                     <div>
                        <p className="font-semibold text-graphite">{user?.name}</p>
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
    const logoSvg = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzM0IiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMzM0IDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4KPHBhdGggZD0iTTI1LjMzMjEgMEw1MC42NjQyIDE0LjYyODlWNDMuODg2N0wyNS4zMzIxIDU4LjUxNTZMMC4wMDAwMyA0My44ODY3VjE0LjYyODlaIiBmaWxsPSIjMUExQzFGIi8+CjxwYXRoIGQ9Ik0yNS4zMzIxIDBMMTUuODgyMyA1LjQ0MDM3VjUyLjA3NTJMMjUuMzMyMSA1OC41MTU2IiBmaWxsPSIjMEE5NzlGIi8+CjxwYXRoIGQ9Ik0yNS4zMzIxIDBMMzQuNzgxOSA1LjQ0MDM3VjUyLjA3NTJMMjUuMzMyMSA1OC41MTU2IiBmaWxsPSIjMEE5NzlGIi8+CjxwYXRoIGQ9Ik0yNS4zMzIxIDBMMjAuNTU3MiAzLjI3MzA5VjU1LjI0MjVMMjUuMzMyMSA1OC41MTU2IiBmaWxsPSIjMEE5NzlGIi8+CjxwYXRoIGQ9Ik0yNS4zMzIxIDBMMjUuMzMyMSAwTDUwLjY2NDIgMTQuNjI4OVY0My44ODY3TDI1LjMzMjEgNTguNTE1NkwyNS4zMzIxIDU4LjUxNTYiIGZpbGw9IiMwMDk3OUYiLz4KPHBhdGggZD0iTTMwLjExMDcgMjEuOTA1MUwyNS4zMzU4IDI0Ljc4MDFMMjAuNTYwOCAyMS45MDUxVjE2LjEyNTFMMjUuMzM1OCAxMy4yNDUxTDMwLjExMDcgMTYuMTI1MVYyMS45MDUxWiIgZmlsbD0iI0JDRTVCMiIvPgo8cGF0aCBkPSJNMjUuMzM1OCAyNC43ODAxTDIwLjU2MDggMjEuOTA1MVYxNi4xMjUxTDI1LjMzNTggMTMuMjQ1MUwyNS4zMzU4IDI0Ljc4MDFaIiBmaWxsPSIjNDg2QTY5Ii8+CjxwYXRoIGQ9Ik0zMC4xMTA3IDM2LjYxMDFMMjUuMzM1OCAzOS40OTAxTDIwLjU2MDggMzYuNjEwMVYzMC44MzAxbDIuMzg3NSAxLjM4VjM1LjIzMDFsMi4zODc1IDEuMzhsMi4zODc1LTEuMzhWMzIuMjEwMWwyLjM4NzUtMS4zOFYzNi42MTAxWiIgZmlsbD0iI0JDRTVCMiIvPgo8cGF0aCBkPSJNMjUuMzM1OCAzOS40OTAxTDIwLjU2MDggMzYuNjEwMVYzMC44MzAxTDIyLjk0ODMgMzIuMjEwMVYzNS4yMzAxTDI1LjMzNTggMzYuNjEwMUwyNS4zMzU4IDM5LjQ5MDFaIiBmaWxsPSIjNDg2QTY5Ii8+CjwvZz4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAxKSI+CjxwYXRoIGQ9Ik03MC4yNjU2IDM0LjQzNzVINDguODI4MVYyMy4wNjI1SDcwLjI2NTZWNTEuNDM3NUg4MC4xNDA2VjIzLjA2MjVIOTMuMTU2MlYxMy41OTM4SDgwLjE0MDZWMGg2My43MDNWMTMuNTkzOEg5Ni41OTM4VjIzLjA2MjVIMTEyLjcxOVY1My41OTM4SDk2LjU5MzhWNDEuOTM3NUg4MC4xNDA2VjYzLjQ2ODhIMTIxLjc2NlY1MS40Mzc1SDEyNy4xNDFWMTMuNTkzOEgxMzUuMjY2VjBINzAuMjY1NlYzNC40Mzc1Wk0xMjEuNzY2IDIuODI4MTJWMTAuNzY1Nkg4My4wNTA4VjIuODI4MTJIMTIxLjc2NlpNOTMuNjQwNiA0MS45Mzc1SDkzLjE1NjJWMzIuNTYyNUg4MC4xNDA2VjM0LjQzNzVIMTEyLjcxOVYyMy4wNjI1SDEyNy4xNDFWNDEuOTM3NUg5My4zNjQwNiIgZmlsbD0iIzFBMUMxRiIvPgo8cGF0aCBkPSJNMTQyLjI2NiAyMy4wNjI1SDIxNC4zVjEzLjU5MzhIMTMyLjI5N1Y2My40Njg4SDI0My4xMjVWNTMuOTA2MkgxNDIuMjY2VjQ0LjQzNzVIMjA1LjMyOFYzNC45MDYySDE0Mi4yNjZWMjMuMDYyNVoiIGZpbGw9IiMxQTFDMUYiLz4KPHBhdGggZD0iTTI3NC43MDMgNTMuOTA2MkgzMTIuNDIyVjQ0LjQzNzVIMjg0LjQ4NFYwSDI3NC43MDNWNTMuOTA2MloiIGZpbGw9IiMxQTFDMUYiLz4KPHBhdGggZD0iTTIyMy40MjIgNjMuNDY4OEgyMzUuMTg4VjBINDIuOTM3NVYxMy41OTM4SDIzOC4wMTZWMzQuOTA2MkgzMjUuMjAzVjQ0LjQzNzVIMjM4LjAxNlY2My40Njg4SDIyMy40MjJaIiBmaWxsPSIjMUExQzFGIi8+CjxwYXRoIGQ9Ik0yNDkuNTE2IDIuODI4MTJDMjQ4LjQxMyAyLjgyODEyIDI0Ny40NDYgMy4xNTI4OCAyNDYuNjE1IDMuODAyNDdDMjQ1Ljc4NCA0LjQ1MjA1IDI0NS4wNTggNS4yOTYyNiAyNDQuNDM4IDYuMzM1MTlDMjQzLjgxNyA3LjM3NDA2IDI0My4zNTIgOC41NzQ3NCAyNDMuMDQyIDkuOTM3MjRDMTY4LjQzOCAxMi40Mzc1IDEzMy4yMDMgMTMuNTkzOCAxMzIuMjk3IDEzLjU5MzhWMjMuMDYyNUgxNDIuMjY2VjM0LjkwNjJIMjA1LjMyOFY0NC40Mzc1SDE0Mi4yNjZWMzQuOTA2MkgxMzIuMjk3VjQ0LjQzNzVIMTQyLjI2NlY1M04OTA2MkgxMzIuMjk3VjYzLjQ2ODhIMjQzLjEyNVY1My45MDYySDI3NC43MDNWNDQuNDM3NUgyODQuNDg0VjM0LjkwNjJIMjc0LjcwM1YyMy4wNjI1SDI4NC40ODRWMTMuNTkzOEgyNzQuNzAzVjBIMjg0LjQ4NFYzNC45MDYySDMyNS4yMDNWMjMuMDYyNUgzMTIuNDIyVjEzLjU5MzhIMzEyLjYwOVYzNC45MDYySDMzMy41VjBINDAuNDUzMVYxMy41OTM4SDM3LjAyMzRWMEgyMjMuNDIyVjEzLjU5MzhIMjM1LjE4OFYwSDIzOC4wMTZWMTMuNTkzOEgyMjMuNDIyVjIzLjA2MjVIMjE0LjNWMTMuNTkzOEgyMTMuOTg0VjIzLjA2MjVIMjE0LjNDMTk5LjQ2OSAyMy4wNjI1IDE3OS45MjIgMjEuNTE1NiAxNjMuOTA2IDE4LjYyNUgxNjUuOTY5QzE2NC43NDQgMTguNTQxNSAxNjMuNjI2IDE4LjQ4OTUgMTYyLjYxNSAxOC40Njg4QzE2MS42MDQgMTguNDQ4IDE2MC42MzYgMTguNDM3NSAxNTkuNzAzIDE4LjQzNzVDMTQ0LjEzMSAxOC40Mzc1IDEyOS45MTMgMTkuMDQxMSAxMTcuMDQ3IDIwLjI1QzE2Ni43MDMgMjIuMDYyNSAyMDYuMTQxIDI0LjA2MjUgMjE3LjQzOCAyNC45Mzc1SDIyMi4zNzVWMTYuMjgxMkgxMzUuMjY2VjBINzAuMjY1NlYzNC40Mzc1SDQ4LjgyODFWMjMuMDYyNUg3MC4yNjU2VjUxLjQzNzVINDguODI4MVY2My40Njg4SDcwLjI2NTZWNTEuNDM3NUg4MC4xNDA2VjIzLjA2MjVIOTMuMTU2MlYxMy41OTM4SDgwLjE0MDZWMEg4My4wNTA4VjEzLjU5MzhIODAuMTQwNlYyMy4wNjI1SDk2LjU5MzhWMzIuNTYyNUg5My4xNTYyVjQxLjkzNzVIMTI3LjE0MVYyMy4wNjI1SDEzNS4yNjZWMTMuNTkzOEgxMjcuMTQxVjUxLjQzNzVIMTIxLjc2NlY2My40Njg4SDgwLjE0MDZWNDEuOTM3NUg5Ni41OTM4VjUzLjU5MzhIMTEyLjcxOVYyMy4wNjI1SDEwMC4wNDdWMzIuNTYyNUg5Ni41OTM4VjQxLjkzNzVIOzMuNTE1NlYyMy4wNjI1SDk2LjU5MzhWMTMuNTkzOEg5My4xNTYyVjIzLjA2MjVIODAuMTQwNlYzNC40Mzc1SDkzLjE1NjJWMzIuNTYyNUgxMDIuNTYyVjQxLjkzNzVIMTIxLjc2NlY1MS40Mzc1SDExMi43MTlWMzQuNDM3NUg5My42NDA2VjQxLjkzNzVIMTIxLjc2NlYxMy41OTM4SDEyNS44MjdWMEgxMzUuMjY2VjEzLjU5MzhIMTI3LjE0MVYyMy4wNjI1SDExMi43MTlWMTEuODc1SDEyMS43NjZWMEgxMjUuODI3QzEyOC4xODEgMi4zNTg4NiAxMjkuNjg4IDQuNTkzNzUgMTMwLjQ1MyA2LjY4NzVDMTMxLjIxOSA4Ljc4MTI1IDEzMS41OTQgMTAuODU5NCAxMzEuNTk0IDEyLjkyMThWMjAuODQzOEgxMzAuMDQ3VjE4Ljg3NUgxMjguNVYxNi45MDYySDEyNi45NTNWMTQuOTM3NUgxMjUuNDIyVjEyLjk2ODhIMTIzLjg5MVYxMS4wNjI1SDEyMi4zNDRWOS4xNTYyNUgxMjAuNzk3VjcuMjVIMTE5LjI1VjUuMzQzNzVIMTE3LjcwM1YzLjQzNzVIMTE2LjE1NlYxLjUyMDgzQzEwNy40MDMgMS4zMTI1IDk4LjEzOTIgMS4yNSA4OC41NDY5IDEuMjVWMEg0Mi45Mzc1VjEzLjU5MzhINDIuOTM3NVYwSDI0OS41MTZaIiBmaWxsPSIjMUExQzFGIi8+CjwvZz4KPC9zdmc+Cg==`;
    return (
        <header className="md:hidden bg-background border-b border-border p-4 flex items-center sticky top-0 z-30">
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
                <ToastContainer />
                <Outlet />
            </main>
        </div>
    </div>
  );
};

export default AdminLayout;