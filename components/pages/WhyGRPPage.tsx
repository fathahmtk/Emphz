
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO_DATA } from '../constants.tsx';

import WhyGRP from '../WhyGRP.tsx';

const WhyGRPPage = () => {
    const seo = SEO_DATA.why_grp;
    return (
        <>
            <Helmet>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <meta property="og:title" content={seo.ogTitle} />
                <meta property="og:description" content={seo.ogDescription} />
                <link rel="canonical" href={seo.canonical} />
            </Helmet>
            <WhyGRP />
        </>
    );
};

export default WhyGRPPage;