import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import PublicLayout from './components/PublicLayout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import SolutionsPage from './pages/SolutionsPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ResourcesPage from './pages/ResourcesPage';
import InsightsPage from './pages/InsightsPage';
import InsightDetailPage from './pages/InsightDetailPage';
import CompanyPage from './pages/CompanyPage';
import ContactPage from './pages/ContactPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminProductsPage from './pages/admin/AdminProductsPage';
import AdminEnquiriesPage from './pages/admin/AdminEnquiriesPage';
import AdminInsightsPage from './pages/admin/AdminInsightsPage';
import AdminDownloadsPage from './pages/admin/AdminDownloadsPage';
import AdminQuotationsPage from './pages/admin/AdminQuotationsPage';
import AdminCustomersPage from './pages/admin/AdminCustomersPage';
import { AuthProvider, useAuth } from './hooks/useAuth';

const ProtectedRoute: React.FC = () => {
  const { user } = useAuth();
  return user ? <AdminLayout /> : <Navigate to="/admin/login" />;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <Routes>
          {/* Public Website */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<HomePage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="products/:slug" element={<ProductDetailPage />} />
            <Route path="solutions" element={<SolutionsPage />} />
            <Route path="case-studies" element={<CaseStudiesPage />} />
            <Route path="resources" element={<ResourcesPage />} />
            <Route path="insights" element={<InsightsPage />} />
            <Route path="insights/:slug" element={<InsightDetailPage />} />
            <Route path="company" element={<CompanyPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>

          {/* Admin Portal */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin" element={<ProtectedRoute />}>
              <Route path="dashboard" element={<AdminDashboardPage />} />
              <Route path="products" element={<AdminProductsPage />} />
              <Route path="enquiries" element={<AdminEnquiriesPage />} />
              <Route path="quotations" element={<AdminQuotationsPage />} />
              <Route path="customers" element={<AdminCustomersPage />} />
              <Route path="insights" element={<AdminInsightsPage />} />
              <Route path="downloads" element={<AdminDownloadsPage />} />
              <Route index element={<Navigate to="/admin/dashboard" />} />
          </Route>

        </Routes>
      </HashRouter>
    </AuthProvider>
  );
};

export default App;
