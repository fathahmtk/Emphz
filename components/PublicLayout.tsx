import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Phone, Mail, MessageSquare } from 'lucide-react';

const publicNavLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Insights', path: '/insights' },
  { name: 'Company', path: '/company' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => (
  <header className="bg-white shadow-md sticky top-0 z-50">
    <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
             <div className="text-2xl font-extrabold text-primary">EMPHZ</div>
             <nav className="hidden md:flex items-center space-x-6">
                {publicNavLinks.map(link => (
                    <NavLink key={link.name} to={link.path} 
                        className={({ isActive }) => 
                            `text-gray-700 hover:text-primary transition duration-300 font-medium pb-1 ${isActive ? 'border-b-2 border-primary text-primary' : ''}`
                        }>
                        {link.name}
                    </NavLink>
                ))}
             </nav>
             <div className="hidden md:flex items-center space-x-4">
                <a href="https://wa.me/918648881888" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600">
                    <MessageSquare size={24}/>
                </a>
                <NavLink to="/contact" className="bg-accent text-white px-4 py-2 rounded-md font-semibold hover:bg-yellow-600 transition duration-300 text-sm">
                    Request a Quote
                </NavLink>
             </div>
        </div>
    </div>
  </header>
);

const Footer: React.FC = () => (
    <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">EMPHZ</h3>
                    <p className="text-gray-400 text-sm">Engineering Tomorrow’s Infrastructure — Today.</p>
                </div>
                 <div>
                    <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        {publicNavLinks.map(link => (
                           <li key={link.path}><NavLink to={link.path} className="text-gray-400 hover:text-white">{link.name}</NavLink></li>
                        ))}
                    </ul>
                </div>
                 <div>
                    <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
                    <address className="text-gray-400 not-italic text-sm space-y-2">
                        <p>Head Office – Kerala, India</p>
                        <a href="tel:+918648881888" className="flex items-center hover:text-white"><Phone size={14} className="mr-2"/>+91 86488 81888</a>
                        <a href="mailto:info@emphz.com" className="flex items-center hover:text-white"><Mail size={14} className="mr-2"/>info@emphz.com</a>
                    </address>
                </div>
                 <div>
                    <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
                     <div className="flex space-x-4">
                        {/* Add Social media icons here */}
                     </div>
                </div>
            </div>
            <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} EMPHZ Private Limited. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
);


const PublicLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-light">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
       <a href="#/contact" className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition duration-300 z-40">
            <MessageSquare size={24} />
       </a>
    </div>
  );
};

export default PublicLayout;