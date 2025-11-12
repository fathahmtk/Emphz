import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    useEffect(() => {
        const handleSmoothScroll = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            const anchor = target.closest('a[href^="#"]');

            if (!anchor) {
                return;
            }
            
            const href = anchor.getAttribute('href');

            // Prevent default for placeholder links, but don't scroll.
            if (href === '#') {
                event.preventDefault();
                return;
            }

            try {
                const targetId = decodeURIComponent(href.substring(1));
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    event.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Update URL hash without page jump
                    if (history.pushState) {
                        history.pushState(null, null, href);
                    } else {
                        window.location.hash = href;
                    }
                }
            } catch (e) {
                // Ignore invalid selectors
                console.warn('Could not process anchor link:', href, e);
            }
        };

        document.addEventListener('click', handleSmoothScroll);

        return () => {
            document.removeEventListener('click', handleSmoothScroll);
        };
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800">
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
