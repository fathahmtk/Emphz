import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Phone, Mail, MessageSquare, Menu, X } from 'lucide-react';

const publicNavLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Resources', path: '/resources' },
  { name: 'Insights', path: '/insights' },
  { name: 'Company', path: '/company' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
                 <NavLink to="/" className="text-3xl font-extrabold text-primary">EMPHZ</NavLink>
                 <nav className="hidden md:flex items-center space-x-8">
                    {publicNavLinks.map(link => (
                        <NavLink key={link.name} to={link.path} 
                            className={({ isActive }) => 
                                `text-text-secondary hover:text-primary transition-colors duration-300 font-semibold pb-2 ${isActive ? 'border-b-2 border-accent text-primary' : 'border-b-2 border-transparent'}`
                            }>
                            {link.name}
                        </NavLink>
                    ))}
                 </nav>
                 <div className="hidden md:flex items-center space-x-4">
                    <NavLink to="/contact" className="bg-accent text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-accent-hover shadow-sm hover:shadow-md transition-all duration-300">
                        Request a Quote
                    </NavLink>
                 </div>
                 <div className="md:hidden">
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
                                    `px-4 py-2 rounded-md font-semibold ${isActive ? 'bg-accent text-white' : 'text-text-secondary hover:bg-background-light'}`
                                }>
                                {link.name}
                            </NavLink>
                        ))}
                        <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-accent text-white text-center px-5 py-2.5 rounded-lg font-semibold hover:bg-accent-hover shadow-sm transition-all duration-300 mt-2">
                            Request a Quote
                        </NavLink>
                    </nav>
                </div>
            )}
        </div>
      </header>
    )
};

const Footer: React.FC = () => (
    <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4">EMPHZ</h3>
                    <p className="text-gray-400 text-sm">Engineering Tomorrow’s Infrastructure — Today.</p>
                </div>
                 <div>
                    <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                    <ul className="space-y-3 text-sm">
                        {publicNavLinks.slice(0, 5).map(link => (
                           <li key={link.path}><NavLink to={link.path} className="text-gray-400 hover:text-white transition-colors">{link.name}</NavLink></li>
                        ))}
                    </ul>
                </div>
                 <div>
                    <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
                    <address className="text-gray-400 not-italic text-sm space-y-3">
                        <p>Head Office – Kerala, India</p>
                        <a href="tel:+918648881888" className="flex items-center hover:text-white transition-colors"><Phone size={14} className="mr-2"/>+91 86488 81888</a>
                        <a href="mailto:info@emphz.com" className="flex items-center hover:text-white transition-colors"><Mail size={14} className="mr-2"/>info@emphz.com</a>
                    </address>
                </div>
                 <div>
                    <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
                     <div className="flex space-x-4">
                        {/* Add Social media icons here */}
                     </div>
                </div>
            </div>
            <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} EMPHZ Private Limited. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
);


const PublicLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
       <a href="#/contact" className="fixed bottom-6 right-6 bg-accent text-white p-4 rounded-full shadow-lg hover:bg-accent-hover transition-all duration-300 z-40 transform hover:scale-110">
            <MessageSquare size={28} />
       </a>
    </div>
  );
};

export default PublicLayout;