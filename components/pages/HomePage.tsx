import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO_DATA, ORG_JSON_LD } from '../../constants';

import Hero from '../Hero';
import Solutions from '../Solutions';
import WhyGRP from '../WhyGRP';
import IndustriesSection from '../IndustriesSection';
import Projects from '../Projects';

const HomePage = () => {
    const seo = SEO_DATA.home;
    return (
        <>
            <Helmet>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <meta property="og:title" content={seo.ogTitle} />
                <meta property="og:description" content={seo.ogDescription} />
                <link rel="canonical" href={seo.canonical} />
                <script type="application/ld+json">{JSON.stringify(ORG_JSON_LD)}</script>
            </Helmet>
            <Hero />
            <Solutions />
            <WhyGRP />
            <IndustriesSection />
            <Projects />
        </>
    );
};

export default HomePage;
