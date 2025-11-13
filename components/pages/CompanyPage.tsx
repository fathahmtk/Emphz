
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO_DATA } from '../constants.tsx';

import Company from '../Company.tsx';
import QA from '../QA.tsx';
import Logistics from '../Logistics.tsx';
import Warranty from '../Warranty.tsx';
import Partners from '../Partners.tsx';
import Downloads from '../Downloads.tsx';

const CompanyPage = () => {
    const seo = SEO_DATA.company;
    return (
        <>
            <Helmet>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <meta property="og:title" content={seo.ogTitle} />
                <meta property="og:description" content={seo.ogDescription} />
                <link rel="canonical" href={seo.canonical} />
            </Helmet>
            <Company />
            <QA />
            <Logistics />
            <Warranty />
            <Partners />
            <Downloads />
        </>
    );
};

export default CompanyPage;