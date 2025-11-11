import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ORG_JSON_LD } from "./constants";

import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import WhyGRP from './components/WhyGRP';
import IndustriesSection from "./components/IndustriesSection";
import Products from './components/Products';
import QA from './components/QA';
import Logistics from './components/Logistics';
import Warranty from './components/Warranty';
import Downloads from './components/Downloads';
import Partners from './components/Partners';
import Projects from './components/Projects';
import Company from './components/Company';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="min-h-screen bg-slate-50 text-slate-800">
          <Helmet>
            <title>Emphz | GRP/FRP Solutions for Utilities, Transport & Telecom</title>
            <meta name="description" content="Emphz engineers high‑durability GRP/FRP solutions for the utility, transport, telecom, and hospitality industries. Our portfolio includes enclosures, kiosks, security cabins, and custom OEM components." />
            <meta property="og:title" content="Emphz – GRP/FRP Solutions for Critical Industries" />
            <meta property="og:description" content="One-stop solution for GRP infrastructure: serving utilities, transport, telecom, and OEM with corrosion-proof enclosures, cabins, and kiosks." />
            <link rel="canonical" href="https://emphz.example" />
            <script type="application/ld+json">{JSON.stringify(ORG_JSON_LD)}</script>
          </Helmet>

          <Header />

          <main>
            <Hero />
            <Solutions />
            <WhyGRP />
            <IndustriesSection />
            <Products />
            <QA />
            <Logistics />
            <Warranty />
            <Downloads />
            <Partners />
            <Projects />
            <Company />
            <Contact />
          </main>
          
          <Footer />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}