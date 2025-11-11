import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ORG_JSON_LD } from "./constants";

import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import WhyGRP from './components/WhyGRP';
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
import TestPanel from './components/TestPanel';

export default function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="min-h-screen bg-zinc-950 text-zinc-100">
          <Helmet>
            <title>Emphz Private Limited | Advanced GRP/FRP Solutions</title>
            <meta name="description" content="Emphz engineers high‑durability GRP/FRP enclosures, portable kiosks, security cabins, villa toilet pods, and rural bus‑stop modules — export‑ready, corrosion‑proof, rapid‑deployment." />
            <meta property="og:title" content="Emphz – Advanced GRP Infrastructure" />
            <meta property="og:description" content="Global GRP/FRP solutions: enclosures, kiosks & modular cabins." />
            <meta property="og:type" content="website" />
            <link rel="canonical" href="https://emphz.example" />
            <script type="application/ld+json">{JSON.stringify(ORG_JSON_LD)}</script>
          </Helmet>

          <Header />

          <main>
            <Hero />
            <Solutions />
            <WhyGRP />
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
          
          <TestPanel />
          <Footer />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}
