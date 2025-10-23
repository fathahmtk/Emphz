import React from 'react';
import { NavLink } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';

const NotFoundPage: React.FC = () => {
    usePageMetadata(
        "404 Page Not Found | EMPHZ Global - The GRP Company",
        "The requested page was not found. Return to the EMPHZ Global homepage to explore our industry-leading GRP enclosures, kiosks, and composite solutions.",
        "404, not found, EMPHZ GRP, The GRP Company, page not found"
    );

    return (
        <div className="bg-background-light flex-grow flex items-center justify-center py-16">
            <div className="text-center">
                <AlertTriangle className="mx-auto h-20 w-20 text-accent mb-4" />
                <h1 className="text-6xl font-extrabold font-heading text-primary tracking-tighter">404</h1>
                <p className="text-2xl font-semibold text-text-DEFAULT mt-2">Page Not Found</p>
                <p className="text-text-secondary mt-4 max-w-sm mx-auto">
                    Sorry, the page you are looking for doesn't exist or has been moved.
                </p>
                <div className="mt-8">
                    <NavLink
                        to="/"
                        className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-hover shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-heading"
                    >
                        Go back to Homepage
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;