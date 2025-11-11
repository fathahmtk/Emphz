import React from "react";
import { HelmetProvider } from "react-helmet-async";

import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';

import HomePage from './components/pages/HomePage';
import SolutionsPage from './components/pages/SolutionsPage';
import WhyGRPPage from './components/pages/WhyGRPPage';
import IndustriesPage from './components/pages/IndustriesPage';
import ProjectsPage from './components/pages/ProjectsPage';
import CompanyPage from './components/pages/CompanyPage';
import ContactPage from './components/pages/ContactPage';

const AppRouter = () => {
    const path = window.location.pathname;

    if (path.endsWith('/solutions.html')) {
        return <SolutionsPage />;
    }
    if (path.endsWith('/why-grp.html')) {
        return <WhyGRPPage />;
    }
    if (path.endsWith('/industries.html')) {
        return <IndustriesPage />;
    }
    if (path.endsWith('/projects.html')) {
        return <ProjectsPage />;
    }
    if (path.endsWith('/company.html')) {
        return <CompanyPage />;
    }
    if (path.endsWith('/contact.html')) {
        return <ContactPage />;
    }
    
    return <HomePage />;
};


export default function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Layout>
            <AppRouter />
        </Layout>
      </ErrorBoundary>
    </HelmetProvider>
  );
}