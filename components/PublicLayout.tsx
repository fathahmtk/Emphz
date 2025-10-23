import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Phone, Mail, MessageSquare, Menu, X, Linkedin, Twitter, Facebook, Search, Globe } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';

const LanguageSwitcher: React.FC = () => {
    const { locale, setLocale } = useI18n();
    const [isOpen, setIsOpen] = useState(false);

    const toggleLanguage = (lang: 'en' | 'ar') => {
        setLocale(lang);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} className="text-text-secondary hover:text-primary transition-colors p-2 flex items-center">
                <Globe size={22} />
            </button>
            {isOpen && (
                <div className="absolute end-0 mt-2 w-32 bg-white rounded-md shadow-lg z-50 border border-border">
                    <button onClick={() => toggleLanguage('en')} className={`block w-full text-start px-4 py-2 text-sm ${locale === 'en' ? 'font-bold text-primary' : 'text-text-secondary'} hover:bg-background-light`}>English</button>
                    <button onClick={() => toggleLanguage('ar')} className={`block w-full text-start px-4 py-2 text-sm ${locale === 'ar' ? 'font-bold text-primary' : 'text-text-secondary'} hover:bg-background-light`}>العربية</button>
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

    return (
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
                 <NavLink to="/"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNzAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCAyNzAgNTAiPjxzdHlsZT4udGV4dC1lbXBoeiB7IGZvbnQ6IGJvbGQgMzZweCAnUG9wcGlucycsIHNhbnMtc2VyaWY7IGZpbGw6ICMwQjNEOTE7IH0gLnRleHQtZ2xvYmFsIHsgZm9udDogNTAwIDM2cHggJ1BvcHBpbnMnLCBzYW5zLXNlcmlmOyBmaWxsOiAjNjQ3NDhiOyB9IC5kb3QgeyBmaWxsOiAjQzlBMjI3OyB9PC9zdHlsZT48dGV4dCB4PSIxMCIgeT0iMzgiIGNsYXNzPSJ0ZXh0LWVtcGh6Ij5FTVBIWjwvdGV4dD48dGV4dCB4PSIxNDgiIHk9IjM4IiBjbGFzcz0idGV4dC1nbG9iYWwiPkdsb2JhbDwvdGV4dD48Y2lyY2xlIGN4PSIyNTUiIGN5PSIzNSIgcj0iNSIgY2xhc3M9ImRvdCIvPjwvc3ZnPg==" alt="EMPHZ Global Logo" className="h-10" /></NavLink>
                 <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
                    {publicNavLinks.map(link => (
                        <NavLink key={link.name} to={link.path} 
                            className={({ isActive }) => 
                                `text-text-secondary hover:text-primary transition-colors duration-300 font-heading font-semibold pb-2 ${isActive ? 'border-b-2 border-accent text-primary' : 'border-b-2 border-transparent'}`
                            }>
                            {link.name}
                        </NavLink>
                    ))}
                 </nav>
                 <div className="hidden md:flex items-center space-x-2 rtl:space-x-reverse">
                    <LanguageSwitcher />
                    <NavLink to="/search" className="text-text-secondary hover:text-primary transition-colors p-2" aria-label={t('nav.search')}>
                        <Search size={22} />
                    </NavLink>
                    <NavLink to="/contact" className="bg-accent text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-accent-hover shadow-sm hover:shadow-md transition-all duration-300 font-heading">
                        {t('nav.requestQuote')}
                    </NavLink>
                 </div>
                 <div className="md:hidden flex items-center gap-2">
                    <LanguageSwitcher />
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-primary">
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                 </div>
            </div>
             {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden mt-4">
                    <nav className="flex flex-col space-y-4">
                         {publicNavLinks.map(link => (
                            <NavLink 
                                key={link.name} 
                                to={link.path} 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={({ isActive }) => 
                                    `px-4 py-2 rounded-md font-heading font-semibold ${isActive ? 'bg-accent text-white' : 'text-text-secondary hover:bg-background-light'}`
                                }>
                                {link.name}
                            </NavLink>
                        ))}
                        <NavLink to="/search" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 rounded-md font-heading font-semibold text-text-secondary hover:bg-background-light">
                            {t('nav.search')}
                        </NavLink>
                        <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-accent text-white text-center px-5 py-2.5 rounded-lg font-semibold hover:bg-accent-hover shadow-sm transition-all duration-300 mt-2 font-heading">
                            {t('nav.requestQuote')}
                        </NavLink>
                    </nav>
                </div>
            )}
        </div>
      </header>
    )
};

const Footer: React.FC = () => {
    const { t } = useI18n();
    
    const publicNavLinks = [
      { name: t('nav.home'), path: '/' },
      { name: t('nav.products'), path: '/products' },
      { name: t('nav.solutions'), path: '/solutions' },
      { name: t('nav.caseStudies'), path: '/case-studies' },
      { name: t('nav.resources'), path: '/resources' },
    ];
    
    return (
    <footer className="bg-primary text-gray-300">
        <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNzAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCAyNzAgNTAiPjxzdHlsZT4udGV4dC1lbXBoeiB7IGZvbnQ6IGJvbGQgMzZweCAnUG9wcGlucycsIHNhbnMtc2VyaWY7IGZpbGw6ICNmOGZhZmM7IH0gLnRleHQtZ2xvYmFsIHsgZm9udDogNTAwIDM2cHggJ1BvcHBpbnMnLCBzYW5zLXNlcmlmOyBmaWxsOiAjY2JkNWUxOyB9IC5kb3QgeyBmaWxsOiAjQzlBMjI3OyB9PC9zdHlsZT48dGV4dCB4PSIxMCIgeT0iMzgiIGNsYXNzPSJ0ZXh0LWVtcGh6Ij5FTVBIWjwvdGV4dD48dGV4dCB4PSIxNDgiIHk9IjM4IiBjbGFzcz0idGV4dC1nbG9iYWwiPkdsb2JhbDwvdGV4dD48Y2lyY2xlIGN4PSIyNTUiIGN5PSIzNSIgcj0iNSIgY2xhc3M9ImRvdCIvPjwvc3ZnPg==" alt="EMPHZ Global Logo" className="h-10 mb-4" />
                    <p className="text-gray-400 text-sm">{t('footer.tagline')}</p>
                </div>
                 <div>
                    <h4 className="font-heading font-semibold text-lg text-white mb-4">{t('footer.quickLinks')}</h4>
                    <ul className="space-y-3 text-sm">
                        {publicNavLinks.map(link => (
                           <li key={link.path}><NavLink to={link.path} className="text-gray-400 hover:text-white transition-colors">{link.name}</NavLink></li>
                        ))}
                    </ul>
                </div>
                 <div>
                    <h4 className="font-heading font-semibold text-lg text-white mb-4">{t('footer.contactUs')}</h4>
                    <address className="text-gray-400 not-italic text-sm space-y-3">
                        <p>{t('footer.office')}</p>
                        <a href="tel:+918648881888" className="flex items-center hover:text-white transition-colors"><Phone size={14} className="me-2"/>+91 86488 81888</a>
                        <a href="mailto:info@emphz.com" className="flex items-center hover:text-white transition-colors"><Mail size={14} className="me-2"/>info@emphz.com</a>
                    </address>
                </div>
                 <div>
                    <h4 className="font-heading font-semibold text-lg text-white mb-4">{t('footer.followUs')}</h4>
                     <div className="flex space-x-4 rtl:space-x-reverse">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin size={24}/></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter"><Twitter size={24}/></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook"><Facebook size={24}/></a>
                     </div>
                </div>
            </div>
            <div className="mt-12 border-t border-primary-medium pt-8 text-center text-gray-500 text-sm">
                <p>{t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}</p>
            </div>
        </div>
    </footer>
);
};


const PublicLayout: React.FC = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div key={location.pathname} className="page-transition">
          <Outlet />
        </div>
      </main>
      <Footer />
       <a href="#/contact" className="fixed bottom-6 end-6 bg-accent text-white p-4 rounded-full shadow-lg hover:bg-accent-hover transition-all duration-300 z-40 transform hover:scale-110">
            <MessageSquare size={28} />
       </a>
    </div>
  );
};

export default PublicLayout;
