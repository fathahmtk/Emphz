
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO_DATA, ORG_JSON_LD } from '../constants.tsx';

import Hero from '../Hero.tsx';
import Solutions from '../Solutions.tsx';
import WhyGRP from '../WhyGRP.tsx';
import SolutionFinder from '../SolutionFinder.tsx';
import Projects from '../Projects.tsx';

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
            <SolutionFinder />
            <Projects />
        </>
    );
};

export default HomePage;