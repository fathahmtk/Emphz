
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
import SearchResultsPage from './pages/SearchResultsPage';
import NotFoundPage from './pages/NotFoundPage';

// Fix: Changed AdminLoginPage import from default to named.
import { AdminLoginPage } from './pages/admin/AdminLoginPage';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminProductsPage from './pages/admin/AdminProductsPage';
import AdminEnquiriesPage from './pages/admin/AdminEnquiriesPage';
import AdminEnquiryDetailPage from './pages/admin/AdminEnquiryDetailPage';
import AdminInsightsPage from './pages/admin/AdminInsightsPage';
import AdminDownloadsPage from './pages/admin/AdminDownloadsPage';
import AdminQuotationsPage from './pages/admin/AdminQuotationsPage';
import AdminQuotationDetailPage from './pages/admin/AdminQuotationDetailPage';
import AdminCustomersPage from './pages/admin/AdminCustomersPage';
import AdminCaseStudiesPage from './pages/admin/AdminCaseStudiesPage';
import AdminSolutionsPage from './pages/admin/AdminSolutionsPage';
import AdminUsersPage from './pages/admin/AdminUsersPage';
import { AuthProvider, useAuth } from './hooks/useAuth';
import { I18nProvider } from './hooks/useI18n';
import { ToastProvider } from './hooks/useToast';
import { CookieConsentProvider } from './hooks/useCookieConsent';

function ProtectedRoute() {
  const { user } = useAuth();
  return user ? <AdminLayout /> : <Navigate to="/admin/login" />;
}

function App() {
  return (
    <AuthProvider>
      <I18nProvider>
          <ToastProvider>
            <CookieConsentProvider>
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
                    <Route path="search" element={<SearchResultsPage />} />
                    {/* Public 404, rendered inside layout */}
                    <Route path="*" element={<NotFoundPage />} />
                  </Route>

                  {/* Admin Portal */}
                  <Route path="/admin/login" element={<AdminLoginPage />} />
                  <Route path="/admin" element={<ProtectedRoute />}>
                      <Route path="dashboard" element={<AdminDashboardPage />} />
                      <Route path="products" element={<AdminProductsPage />} />
                      <Route path="enquiries" element={<AdminEnquiriesPage />} />
                      <Route path="enquiries/:id" element={<AdminEnquiryDetailPage />} />
                      <Route path="quotations" element={<AdminQuotationsPage />} />
                      <Route path="quotations/:id" element={<AdminQuotationDetailPage />} />
                      <Route path="customers" element={<AdminCustomersPage />} />
                      <Route path="case-studies" element={<AdminCaseStudiesPage />} />
                      <Route path="solutions" element={<AdminSolutionsPage />} />
                      <Route path="insights" element={<AdminInsightsPage />} />
                      <Route path="downloads" element={<AdminDownloadsPage />} />
                      <Route path="users" element={<AdminUsersPage />} />
                      <Route index element={<Navigate to="/admin/dashboard" />} />
                      {/* Admin 404, rendered inside admin layout */}
                      <Route path="*" element={<NotFoundPage />} />
                  </Route>
                  
                   {/* Fallback 404 for routes that dont match admin or public */}
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </HashRouter>
            </CookieConsentProvider>
          </ToastProvider>
      </I18nProvider>
    </AuthProvider>
  );
}

export default App;
