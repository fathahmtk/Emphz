
import React from "react";
import { HelmetProvider } from "react-helmet-async";

import ErrorBoundary from './components/ErrorBoundary.tsx';
import Layout from './components/Layout.tsx';

import HomePage from './components/pages/HomePage.tsx';
import SolutionsPage from './components/pages/SolutionsPage.tsx';
import WhyGRPPage from './components/pages/WhyGRPPage.tsx';
import IndustriesPage from './components/pages/IndustriesPage.tsx';
import ProjectsPage from './components/pages/ProjectsPage.tsx';
import CompanyPage from './components/pages/CompanyPage.tsx';
import ContactPage from './components/pages/ContactPage.tsx';

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