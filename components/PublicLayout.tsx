import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Phone, Mail, MessageSquare, Menu, X, Linkedin, Twitter, Facebook, Search, Globe } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';
import { ThemeToggle } from './ThemeToggle';
import { ToastContainer } from './Toast';


const LanguageSwitcher: React.FC = () => {
    const { locale, setLocale } = useI18n();
    const [isOpen, setIsOpen] = useState(false);

    const toggleLanguage = (lang: 'en' | 'ar') => {
        setLocale(lang);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} className="text-text-secondary hover:text-accent dark:text-steel-DEFAULT dark:hover:text-white transition-colors p-2 flex items-center">
                <Globe size={22} />
            </button>
            {isOpen && (
                <div className="absolute end-0 mt-2 w-32 bg-white dark:bg-slate-800 rounded-md shadow-lg z-50 border border-border dark:border-slate-700">
                    <button onClick={() => toggleLanguage('en')} className={`block w-full text-start px-4 py-2 text-sm ${locale === 'en' ? 'font-bold text-accent' : 'text-text-secondary dark:text-slate-400'} hover:bg-background-light dark:hover:bg-slate-700`}>English</button>
                    <button onClick={() => toggleLanguage('ar')} className={`block w-full text-start px-4 py-2 text-sm ${locale === 'ar' ? 'font-bold text-accent' : 'text-text-secondary dark:text-slate-400'} hover:bg-background-light dark:hover:bg-slate-700`}>العربية</button>
                </div>
            )}
        </div>
    );
};

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t } = useI18n();
    
    const publicNavLinks = [
      { name: t('nav.home'), path: '/' },
      { name: t('nav.products'), path: '/products' },
      { name: t('nav.solutions'), path: '/solutions' },
      { name: t('nav.caseStudies'), path: '/case-studies' },
      { name: t('nav.resources'), path: '/resources' },
      { name: t('nav.insights'), path: '/insights' },
      { name: t('nav.company'), path: '/company' },
      { name: t('nav.contact'), path: '/contact' },
    ];

    const lightLogo = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCAyNTAgNTAiPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNSwgNSkiPgogICAgICAgIDxwYXRoIGQ9Ik0yMCAwIEw0MCAxMS41NSBW oncologistNC42NCBMMjAgNDYuMTkgTDAgMzQuNjQgVjExLjU1eiIgZmlsbD0iIzFDMUUyMiIvPgogICAgICAgIDxwYXRoIGQ9Ik0yMCAwIEw0MCAxMS41NSBW oncologistNC42NCBMMjAgNDYuMTkiIGZpbGw9IiMwMEE2QjUiIC8+CiAgICAgICAgPHRleHQgeD0iMTAiIHk9IjMxIiBmb250LWZhbWlseT0iJ09yYml0cm9uJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZm9udC13ZWlnaHQ9IjkwMCIgZmlsbD0iI0I0QkVDO SI+RTwvdGV4dD4KICAgICAgICA8dGV4dCB4PSIyMyIgeT0iMzEiIGZvbnQtZmFtaWx5PSInT3JiaXRyb24nLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjIwIiBmb250LXdlaWdodD0iOTAwIiBmaWxsPSIjMUMxRTIyIj5HPC90ZXh0PgogICAgPC9nPgogICAgPHRleHQgeD0iNTUiIHk9IjM2IiBmb250LWZhbWlseT0iJ09yYml0cm9uJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNiIgZm9udC13ZWlnaHQ9IjkwMCIgZmlsbD0iIzFDMUUyMiI+RU1QSFo8L3RleHQ+CiAgICA8dGV4dCB4PSIxNzUiIHk9IjM2IiBmb250LWZhbWlseT0iJ1BvcHBpbnMnLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI2IiBmb250LXdlaWdodD0iNDAwIiBsZXR0ZXItc3BhY2luZz0iMSIgZmlsbD0iIzQ3NTU2OSI+R0xPQkFMPC90ZXh0Pgo8L3N2Zz4=`;
    const darkLogo = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCAyNTAgNTAiPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNSwgNSkiPgogICAgICAgIDxwYXRoIGQ9Ik0yMCAwIEw0MCAxMS41NSBW oncologistNC42NCBMMjAgNDYuMTkgTDAgMzQuNjQgVjExLjU1eiIgZmlsbD0iI0I0QkVDO SIvPgogICAgICAgIDxwYXRoIGQ9Ik0yMCAwIEw0MCAxMS41NSBW oncologistNC42NCBMMjAgNDYuMTkiIGZpbGw9IiMwMEE2QjUiIC8+CiAgICAgICAgPHRleHQgeD0iMTAiIHk9IjMxIiBmb250LWZhbWlseT0iJ09yYml0cm9uJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZm9udC13ZWlnaHQ9IjkwMCIgZmlsbD0iIzFDMUUyMiI+RTwvdGV4dD4KICAgICAgICA8dGV4dCB4PSIyMyIgeT0iMzEiIGZvbnQtZmFtaWx5PSInT3JiaXRyb24nLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjIwIiBmb250LXdlaWdodD0iOTAwIiBmaWxsPSIjQjRCRUM5Ij5HPC90ZXh0PgogICAgPC9nPgogICAgPHRleHQgeD0iNTUiIHk9IjM2IiBmb250LWZhbWlseT0iJ09yYml0cm9uJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNiIgZm9udC13ZWlnaHQ9IjkwMCIgZmlsbD0iI0I0QkVDO SI+RU1QSFo8L3RleHQ+CiAgICA8dGV4dCB4PSIxNzUiIHk9IjM2IiBmb250LWZhbWlseT0iJ1BvcHBpbnMnLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI2IiBmb250LXdlaWdodD0iNDAwIiBsZXR0ZXItc3BhY2luZz0iMSIgZmlsbD0iI0I0QkVDO SI+R0xPQkFMPC90ZXh0Pgo8L3N2Zz4=`;

    const activeLinkClass = "text-accent dark:text-white font-semibold";
    const inactiveLinkClass = "text-text-secondary dark:text-steel-DEFAULT hover:text-accent dark:hover:text-white transition-colors duration-300";

    return (
        <header className="bg-white/80 dark:bg-primary/80 backdrop-blur-lg border-b border-border dark:border-slate-800 sticky top-0 z-40">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center py-4">
                    <NavLink to="/" className="flex items-center">
                        <img src={lightLogo} alt="EMPHZ Global Logo" className="h-10 dark:hidden" />
                        <img src={darkLogo} alt="EMPHZ Global Logo" className="h-10 hidden dark:block" />
                    </NavLink>
                    <nav className="hidden lg:flex items-center space-x-8">
                        {publicNavLinks.map(link => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} font-semibold`}
                                end={link.path === '/'}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>
                    <div className="flex items-center space-x-2">
                        <NavLink to="/search" className={`${inactiveLinkClass} p-2`}><Search size={22} /></NavLink>
                        <LanguageSwitcher />
                        <ThemeToggle />
                        <div className="hidden lg:block border-s border-border dark:border-slate-700 h-6 mx-3"></div>
                        <NavLink to="/contact" className="hidden lg:block bg-accent text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-accent-hover transition-colors text-sm">
                           {t('nav.requestQuote')}
                        </NavLink>
                        <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 text-text-secondary dark:text-steel-DEFAULT">
                            <Menu size={26} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="absolute top-0 end-0 h-full w-full max-w-sm bg-white dark:bg-primary p-6" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-8">
                            <img src={darkLogo} alt="EMPHZ Global Logo" className="h-10" />
                            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-text-secondary dark:text-steel-DEFAULT">
                                <X size={26} />
                            </button>
                        </div>
                        <nav className="flex flex-col space-y-5">
                            {publicNavLinks.map(link => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={({ isActive }) => `${isActive ? 'text-accent dark:text-white' : 'text-text-secondary dark:text-steel-DEFAULT'} text-lg font-semibold`}
                                    end={link.path === '/'}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </nav>
                         <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-8 block w-full text-center bg-accent text-white px-5 py-3 rounded-lg font-semibold hover:bg-accent-hover transition-colors">
                           {t('nav.requestQuote')}
                        </NavLink>
                    </div>
                </div>
            )}
        </header>
    );
};

const Footer: React.FC = () => {
    const { t } = useI18n();

    const socialLinks = [
        { name: 'LinkedIn', icon: <Linkedin size={20}/>, path: 'https://linkedin.com' },
        { name: 'Twitter', icon: <Twitter size={20}/>, path: 'https://twitter.com' },
        { name: 'Facebook', icon: <Facebook size={20}/>, path: 'https://facebook.com' },
    ];

    const lightLogo = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCAyNTAgNTAiPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNSwgNSkiPgogICAgICAgIDxwYXRoIGQ9Ik0yMCAwIEw0MCAxMS41NSBW oncologistNC42NCBMMjAgNDYuMTkgTDAgMzQuNjQgVjExLjU1eiIgZmlsbD0iIzFDMUUyMiIvPgogICAgICAgIDxwYXRoIGQ9Ik0yMCAwIEw0MCAxMS41NSBW oncologistNC42NCBMMjAgNDYuMTkiIGZpbGw9IiMwMEE2QjUiIC8+CiAgICAgICAgPHRleHQgeD0iMTAiIHk9IjMxIiBmb250LWZhbWlseT0iJ09yYml0cm9uJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZm9udC13ZWlnaHQ9IjkwMCIgZmlsbD0iI0I0QkVDO SI+RTwvdGV4dD4KICAgICAgICA8dGV4dCB4PSIyMyIgeT0iMzEiIGZvbnQtZmFtaWx5PSInT3JiaXRyb24nLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjIwIiBmb250LXdlaWdodD0iOTAwIiBmaWxsPSIjMUMxRTIyIj5HPC90ZXh0PgogICAgPC9nPgogICAgPHRleHQgeD0iNTUiIHk9IjM2IiBmb250LWZhbWlseT0iJ09yYml0cm9uJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNiIgZm9udC13ZWlnaHQ9IjkwMCIgZmlsbD0iIzFDMUUyMiI+RU1QSFo8L3RleHQ+CiAgICA8dGV4dCB4PSIxNzUiIHk9IjM2IiBmb250LWZhbWlseT0iJ1BvcHBpbnMnLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI2IiBmb250LXdlaWdodD0iNDAwIiBsZXR0ZXItc3BhY2luZz0iMSIgZmlsbD0iIzQ3NTU2OSI+R0xPQkFMPC90ZXh0Pgo8L3N2Zz4=`;
    const darkLogo = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCAyNTAgNTAiPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNSwgNSkiPgogICAgICAgIDxwYXRoIGQ9Ik0yMCAwIEw0MCAxMS41NSBW oncologistNC42NCBMMjAgNDYuMTkgTDAgMzQuNjQgVjExLjU1eiIgZmlsbD0iI0I0QkVDO SIvPgogICAgICAgIDxwYXRoIGQ9Ik0yMCAwIEw0MCAxMS41NSBW oncologistNC42NCBMMjAgNDYuMTkiIGZpbGw9IiMwMEE2QjUiIC8+CiAgICAgICAgPHRleHQgeD0iMTAiIHk9IjMxIiBmb250LWZhbWlseT0iJ09yYml0cm9uJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZm9udC13ZWlnaHQ9IjkwMCIgZmlsbD0iIzFDMUUyMiI+RTwvdGV4dD4KICAgICAgICA8dGV4dCB4PSIyMyIgeT0iMzEiIGZvbnQtZmFtaWx5PSInT3JiaXRyb24nLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjIwIiBmb250LXdlaWdodD0iOTAwIiBmaWxsPSIjQjRCRUM5Ij5HPC90ZXh0PgogICAgPC9nPgogICAgPHRleHQgeD0iNTUiIHk9IjM2IiBmb250LWZhbWlseT0iJ09yYml0cm9uJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNiIgZm9udC13ZWlnaHQ9IjkwMCIgZmlsbD0iI0I0QkVDO SI+RU1QSFo8L3RleHQ+CiAgICA8dGV4dCB4PSIxNzUiIHk9IjM2IiBmb250LWZhbWlseT0iJ1BvcHBpbnMnLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI2IiBmb250LXdlaWdodD0iNDAwIiBsZXR0ZXItc3BhY2luZz0iMSIgZmlsbD0iI0I0QkVDO SI+R0xPQkFMPC90ZXh0Pgo8L3N2Zz4=`;

    return (
        <footer className="bg-primary dark:bg-black text-gray-300 pattern-bg">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <img src={darkLogo} alt="EMPHZ Global Logo" className="h-12 mb-4" />
                        <p className="text-sm text-steel-DEFAULT max-w-xs">{t('footer.tagline')}</p>
                        <div className="flex space-x-4 mt-6">
                            {socialLinks.map(link => (
                                <a key={link.name} href={link.path} className="text-steel-DEFAULT hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-white mb-4">{t('footer.quickLinks')}</h3>
                        <ul className="space-y-2 text-sm">
                            <li><NavLink to="/products" className="hover:text-white transition-colors">Products</NavLink></li>
                            <li><NavLink to="/solutions" className="hover:text-white transition-colors">Solutions</NavLink></li>
                            <li><NavLink to="/company" className="hover:text-white transition-colors">Company</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-white mb-4">{t('footer.contactUs')}</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><Mail size={16} className="mt-1 me-2 flex-shrink-0"/><a href="mailto:info@emphz.com" className="hover:text-white">info@emphz.com</a></li>
                            <li className="flex items-start"><Phone size={16} className="mt-1 me-2 flex-shrink-0"/><a href="tel:+918648881888" className="hover:text-white">+91 86488 81888</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-white mb-4">{t('footer.office')}</h3>
                        <p className="text-sm">Vadakara – 673104, India</p>
                    </div>
                </div>
            </div>
            <div className="bg-black/30">
                <div className="container mx-auto px-6 py-4 text-center text-sm text-steel-DEFAULT">
                    {t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}
                </div>
            </div>
        </footer>
    );
};

const FloatingButtons: React.FC = () => {
    const { t } = useI18n();
    return (
         <div className="fixed bottom-6 end-6 z-40 space-y-3">
            <NavLink to="/contact" className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center shadow-lg hover:bg-accent-hover transition-transform transform hover:scale-110">
                <MessageSquare size={30} />
                <span className="sr-only">{t('nav.requestQuote')}</span>
            </NavLink>
        </div>
    );
}

const PublicLayout: React.FC = () => {
    const location = useLocation();

    return (
        <div key={location.pathname} className="flex flex-col min-h-screen page-transition">
            <Header />
            <main className="flex-grow">
                <ToastContainer />
                <Outlet />
            </main>
            <FloatingButtons />
            <Footer />
        </div>
    );
};

export default PublicLayout;