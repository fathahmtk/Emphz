import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO_DATA } from '../../constants';

import Solutions from '../Solutions';
import Products from '../Products';

const SolutionsPage = () => {
    const seo = SEO_DATA.solutions;
    return (
        <>
            <Helmet>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <meta property="og:title" content={seo.ogTitle} />
                <meta property="og:description" content={seo.ogDescription} />
                <link rel="canonical" href={seo.canonical} />
            </Helmet>
            <Solutions />
            <Products />
        </>
    );
};

export default SolutionsPage;
