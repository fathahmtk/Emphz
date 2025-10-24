
import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Phone, Mail, MessageSquare, Menu, X, Linkedin, Twitter, Facebook, Search, Globe } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';
import { ToastContainer } from './Toast';
import ChatWidget from './ChatWidget';
import CookieConsentBanner from './CookieConsentBanner';
import AIAdvisorWidget from './AIAdvisorWidget';


const LanguageSwitcher: React.FC = () => {
    const { locale, setLocale } = useI18n();
    const [isOpen, setIsOpen] = useState(false);

    const toggleLanguage = (lang: 'en' | 'ar') => {
        setLocale(lang);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} className="text-text-secondary hover:text-accent transition-colors p-2 flex items-center">
                <Globe size={22} />
            </button>
            {isOpen && (
                <div className="absolute end-0 mt-2 w-32 bg-background-default dark:bg-primary-dark rounded-md shadow-lg z-50 border border-border-default dark:border-border-dark">
                    <button onClick={() => toggleLanguage('en')} className={`block w-full text-start px-4 py-2 text-sm ${locale === 'en' ? 'font-bold text-accent' : 'text-text-secondary'} hover:bg-background-light dark:hover:bg-primary`}>English</button>
                    <button onClick={() => toggleLanguage('ar')} className={`block w-full text-start px-4 py-2 text-sm ${locale === 'ar' ? 'font-bold text-accent' : 'text-text-secondary'} hover:bg-background-light dark:hover:bg-primary`}>العربية</button>
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

    const logoSvg = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTgwIDMwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNSAwTDI5IDhWMjJMMTUgMzBMMSAyMlY4TDE1IDBaIiBmaWxsPSIjMDA5NzlGIi8+PHRleHQgeD0iMzUiIHk9IjIyIiBmb250LWZhbWlseT0iT3JiaXRyb24sIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9InZhcigtLWNvbG9yLXRleHQtZGVmYXVsdCkiPkVNUFoiL3RleHQ+PHRleHQgeD0iMTAwIiB5PSIyMiIgZm9udC1mYW1pbHk9IlBvcHBpbnMsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9InZhcigtLWNvbG9yLXRleHQtZGVmYXVsdCkiPkdsb2JhbDwvdGV4dD48L3N2Zz4=`;

    const reversedLogoSvg = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTgwIDMwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNSAwTDI5IDhWMjJMMTUgMzBMMSAyMlY4TDE1IDBaIiBmaWxsPSIjMDA5NzlGIi8+PHRleHQgeD0iMzUiIHk9IjIyIiBmb250LWZhbWlseT0iT3JiaXRyb24sIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiNGN0Y4RkEiPkVNUFoiL3RleHQ+PHRleHQgeD0iMTAwIiB5PSIyMiIgZm9udC1mYW1pbHk9IlBvcHBpbnMsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiNGN0Y4RkEiPkdsb2JhbDwvdGV4dD48L3N2Zz4=`;


    const activeLinkClass = "text-accent after:w-full";
    const inactiveLinkClass = "text-text-secondary hover:text-accent transition-colors duration-300 after:w-0";

    const linkBaseClass = "relative after:absolute after:bottom-[-4px] after:start-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300";

    return (
        <header className="bg-white/80 dark:bg-primary-dark/[.80] backdrop-blur-lg border-b border-border-default dark:border-border-dark sticky top-0 z-40">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center py-6">
                    <NavLink to="/" className="flex items-center">
                        <img src={logoSvg} alt="EMPHZ Global Logo" className="h-12" />
                    </NavLink>
                    <nav className="hidden lg:flex items-center space-x-8">
                        {publicNavLinks.map(link => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) => `${linkBaseClass} ${isActive ? activeLinkClass : inactiveLinkClass} font-semibold`}
                                end={link.path === '/'}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>
                    <div className="flex items-center space-x-2">
                        <NavLink to="/search" className={`${inactiveLinkClass.split(' ')[0]} p-2`}><Search size={22} /></NavLink>
                        <LanguageSwitcher />
                        <div className="hidden lg:block border-s border-border-default dark:border-border-dark h-6 mx-3"></div>
                        <NavLink to="/contact" className="hidden lg:block bg-accent text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-accent-hover transition-colors text-sm">
                           {t('nav.requestQuote')}
                        </NavLink>
                        <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 text-text-secondary">
                            <Menu size={26} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-primary/50 z-50 lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="absolute top-0 end-0 h-full w-full max-w-sm bg-background-default dark:bg-primary-dark p-6" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-8">
                            <img src={logoSvg} alt="EMPHZ Global Logo" className="h-12" />
                            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-text-secondary">
                                <X size={26} />
                            </button>
                        </div>
                        <nav className="flex flex-col space-y-5">
                            {publicNavLinks.map(link => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={({ isActive }) => `${isActive ? 'text-accent' : 'text-text-secondary'} text-lg font-semibold`}
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

    const reversedLogoSvg = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTgwIDMwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNSAwTDI5IDhWMjJMMTUgMzBMMSAyMlY4TDE1IDBaIiBmaWxsPSIjMDA5NzlGIi8+PHRleHQgeD0iMzUiIHk9IjIyIiBmb250LWZhbWlseT0iT3JiaXRyb24sIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9InZhcigtLWNvbG9yLXRleHQtZGVmYXVsdCkiPkVNUFoiL3RleHQ+PHRleHQgeD0iMTAwIiB5PSIyMiIgZm9udC1mYW1pbHk9IlBvcHBpbnMsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9InZhcigtLWNvbG9yLXRleHQtZGVmYXVsdCkiPkdsb2JhbDwvdGV4dD48L3N2Zz4=`;

    return (
        <footer className="bg-primary dark:bg-primary-dark text-gray-300 pattern-bg">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <img src={reversedLogoSvg} alt="EMPHZ Global Logo" className="h-12 mb-4" />
                        <p className="text-sm text-steel-DEFAULT dark:text-text-secondary max-w-xs">{t('footer.tagline')}</p>
                        <div className="flex space-x-4 mt-6">
                            {socialLinks.map(link => (
                                <a key={link.name} href={link.path} className="text-steel-DEFAULT dark:text-text-secondary hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-white mb-4">{t('footer.quickLinks')}</h3>
                        <ul className="space-y-2 text-sm text-steel-DEFAULT dark:text-text-secondary">
                            <li><NavLink to="/products" className="hover:text-white transition-colors">Products</NavLink></li>
                            <li><NavLink to="/solutions" className="hover:text-white transition-colors">Solutions</NavLink></li>
                            <li><NavLink to="/company" className="hover:text-white transition-colors">Company</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-white mb-4">{t('footer.contactUs')}</h3>
                        <ul className="space-y-2 text-sm text-steel-DEFAULT dark:text-text-secondary">
                            <li className="flex items-start"><Mail size={16} className="mt-1 me-2 flex-shrink-0"/><a href="mailto:info@emphz.com" className="hover:text-white">info@emphz.com</a></li>
                            <li className="flex items-start"><Phone size={16} className="mt-1 me-2 flex-shrink-0"/><a href="tel:+918648881888" className="hover:text-white">+91 86488 81888</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-white mb-4">{t('footer.office')}</h3>
                        <p className="text-sm text-steel-DEFAULT dark:text-text-secondary">Vadakara – 673104, India</p>
                    </div>
                </div>
            </div>
            <div className="bg-primary/[.30] dark:bg-primary/[.50]">
                <div className="container mx-auto px-6 py-4 text-center text-sm text-steel-DEFAULT dark:text-text-secondary">
                    {t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}
                </div>
            </div>
        </footer>
    );
};

const PublicLayout: React.FC = () => {
    const location = useLocation();

    return (
        <div key={location.pathname} className="flex flex-col min-h-screen page-transition">
            <Header />
            <main className="flex-grow">
                <ToastContainer />
                <Outlet />
            </main>
            
            {/* Floating Action Buttons */}
            {/* AI Advisor widget is positioned higher to avoid overlapping with the Chat Widget */}
            <AIAdvisorWidget />
            <ChatWidget />
            <CookieConsentBanner />

            <Footer />
        </div>
    );
};

export default PublicLayout;
