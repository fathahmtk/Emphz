import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO_DATA } from '../../constants';

import Company from '../Company';
import QA from '../QA';
import Logistics from '../Logistics';
import Warranty from '../Warranty';
import Partners from '../Partners';
import Downloads from '../Downloads';

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
