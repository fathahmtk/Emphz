
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO_DATA } from '../constants.tsx';

import Projects from '../Projects.tsx';

const ProjectsPage = () => {
    const seo = SEO_DATA.projects;
    return (
        <>
            <Helmet>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <meta property="og:title" content={seo.ogTitle} />
                <meta property="og:description" content={seo.ogDescription} />
                <link rel="canonical" href={seo.canonical} />
            </Helmet>
            <Projects />
        </>
    );
};

export default ProjectsPage;