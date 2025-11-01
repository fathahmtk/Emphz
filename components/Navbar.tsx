import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useUIState } from '../UIStateContext';
import Logo from './Logo';
import { useScroll } from '../hooks/useScroll';
import { INDUSTRIES } from '../constants';
import Button from './Button';
import { useProductCatalog } from '../hooks/useProductCatalog';

const NavDropdown: React.FC<{ title: string; children: React.ReactNode; path?: string }> = ({ title, children, path }) => (
  <div className="relative group">
    <NavLink 
      to={path || '#'} 
      className="flex items-center text-[var(--color-text-primary)] hover:text-[var(--color-brand)] font-medium transition-colors duration-300 py-2" 
      style={({ isActive }) => (isActive && path && path !== '#') ? { color: 'var(--color-brand)', fontWeight: '600' } : undefined}
      onClick={(e) => { if (!path) e.preventDefault(); }}
      aria-haspopup="true"
    >
      {title}
      <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
    </NavLink>
    <div className="absolute top-full left-0 mt-2 w-64 bg-[var(--color-surface-primary)] backdrop-blur-lg rounded-[var(--radius)] shadow-[var(--shadow-lg)] border border-[var(--color-border)] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
      <div className="py-2 max-h-96 overflow-y-auto">
        {children}
      </div>
    </div>
  </div>
);

const MobileCollapsible: React.FC<{title: string; children: React.ReactNode}> = ({title, children}) => {
    const [isSubOpen, setIsSubOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setIsSubOpen(!isSubOpen)} className="w-full flex justify-between items-center text-[var(--color-text-primary)] hover:bg-black/5 rounded-md font-medium py-2 px-3 text-left">
                <span>{title}</span>
                <svg className={`w-4 h-4 transition-transform ${isSubOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" /></svg>
            </button>
            {isSubOpen && (
                <div className="pl-6 pt-1 pb-2 flex flex-col items-start space-y-1">
                    {children}
                </div>
            )}
        </div>
    )
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openSearch } = useUIState();
  const { isScrolled } = useScroll(10);
  const productCatalog = useProductCatalog();

  const activeLinkStyle = {
    color: 'var(--color-brand)',
    fontWeight: '600',
  };
  
  const navLinkClasses = "text-[var(--color-text-primary)] hover:text-[var(--color-brand)] font-medium transition-colors duration-300 py-2";

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 bg-[var(--color-surface-primary)] backdrop-blur-lg ${isScrolled ? 'shadow-sm border-b border-[var(--color-border)]' : ''}`}>
      <div className="container mx-auto flex justify-between items-center py-3 px-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center" aria-label="EMPHZ Homepage">
          <Logo className="h-10 w-auto" />
        </NavLink>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--color-text-primary)] focus:outline-none p-2 rounded-md hover:bg-black/5">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className={navLinkClasses} style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Home</NavLink>
          
          <NavDropdown title="Products" path="/products">
            {productCatalog.map(cat => (
              <NavLink key={cat.code} to={`/products/category/${cat.slug}`} className="block px-4 py-2 text-sm text-[var(--color-text-secondary)] hover:bg-black/5 hover:text-[var(--color-brand)]">
                {cat.name}
              </NavLink>
            ))}
          </NavDropdown>

          <NavDropdown title="Industries" path="/industries">
            {INDUSTRIES.map(ind => (
              <NavLink key={ind.slug} to={`/industries/${ind.slug}`} className="block px-4 py-2 text-sm text-[var(--color-text-secondary)] hover:bg-black/5 hover:text-[var(--color-brand)]">
                {ind.name}
              </NavLink>
            ))}
          </NavDropdown>

          <NavDropdown title="About Us">
            <NavLink to="/innovation" className="block px-4 py-2 text-sm text-[var(--color-text-secondary)] hover:bg-black/5 hover:text-[var(--color-brand)]">Innovation</NavLink>
            <NavLink to="/sustainability" className="block px-4 py-2 text-sm text-[var(--color-text-secondary)] hover:bg-black/5 hover:text-[var(--color-brand)]">Sustainability</NavLink>
            <NavLink to="/corporate" className="block px-4 py-2 text-sm text-[var(--color-text-secondary)] hover:bg-black/5 hover:text-[var(--color-brand)]">Corporate</NavLink>
          </NavDropdown>
          
          <NavDropdown title="Resources">
            <NavLink to="/knowledge" className="block px-4 py-2 text-sm text-[var(--color-text-secondary)] hover:bg-black/5 hover:text-[var(--color-brand)]">Knowledge Hub</NavLink>
            <NavLink to="/support" className="block px-4 py-2 text-sm text-[var(--color-text-secondary)] hover:bg-black/5 hover:text-[var(--color-brand)]">Support</NavLink>
          </NavDropdown>
          
          <NavLink to="/contact" className={navLinkClasses} style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Contact</NavLink>
          
          <div className="flex items-center gap-4">
            <button
              onClick={openSearch}
              className="p-2 text-[var(--color-text-secondary)] rounded-full transition-colors duration-300 hover:bg-black/5 hover:text-[var(--color-text-primary)]"
              role="button"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Button href="/contact" variant="primary" className="py-2 px-4 !text-sm">
              Request a Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden mt-0 border-t border-[var(--color-border)] animate-fadeIn" style={{animationDuration: '0.3s'}}>
          <div className="flex flex-col space-y-1 px-2 pt-2 pb-3">
             <NavLink to="/" onClick={() => setIsOpen(false)} className="block text-[var(--color-text-primary)] hover:bg-black/5 rounded-md font-medium py-2 px-3" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Home</NavLink>
            
            <MobileCollapsible title="Products">
                <NavLink to="/products" onClick={() => setIsOpen(false)} className="block text-[var(--color-text-primary)] hover:bg-black/5 rounded-md font-medium py-2 px-3 w-full text-left" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>All Products</NavLink>
                {productCatalog.map(cat => <NavLink key={cat.code} to={`/products/category/${cat.slug}`} onClick={() => setIsOpen(false)} className="block text-sm text-[var(--color-text-secondary)] hover:bg-black/5 rounded-md py-2 px-3 w-full text-left">{cat.name}</NavLink>)}
            </MobileCollapsible>
            
            <MobileCollapsible title="Industries">
                <NavLink to="/industries" onClick={() => setIsOpen(false)} className="block text-[var(--color-text-primary)] hover:bg-black/5 rounded-md font-medium py-2 px-3 w-full text-left" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>All Industries</NavLink>
                {INDUSTRIES.map(ind => <NavLink key={ind.slug} to={`/industries/${ind.slug}`} onClick={() => setIsOpen(false)} className="block text-sm text-[var(--color-text-secondary)] hover:bg-black/5 rounded-md py-2 px-3 w-full text-left">{ind.name}</NavLink>)}
            </MobileCollapsible>

            <MobileCollapsible title="About Us">
                <NavLink to="/innovation" onClick={() => setIsOpen(false)} className="block text-sm text-[var(--color-text-secondary)] hover:bg-black/5 rounded-md py-2 px-3 w-full text-left">Innovation</NavLink>
                <NavLink to="/sustainability" onClick={() => setIsOpen(false)} className="block text-sm text-[var(--color-text-secondary)] hover:bg-black/5 rounded-md py-2 px-3 w-full text-left">Sustainability</NavLink>
                <NavLink to="/corporate" onClick={() => setIsOpen(false)} className="block text-sm text-[var(--color-text-secondary)] hover:bg-black/5 rounded-md py-2 px-3 w-full text-left">Corporate</NavLink>
            </MobileCollapsible>

            <MobileCollapsible title="Resources">
                <NavLink to="/knowledge" onClick={() => setIsOpen(false)} className="block text-sm text-[var(--color-text-secondary)] hover:bg-black/5 rounded-md py-2 px-3 w-full text-left">Knowledge Hub</NavLink>
                <NavLink to="/support" onClick={() => setIsOpen(false)} className="block text-sm text-[var(--color-text-secondary)] hover:bg-black/5 rounded-md py-2 px-3 w-full text-left">Support</NavLink>
            </MobileCollapsible>

            <NavLink to="/contact" onClick={() => setIsOpen(false)} className="block text-[var(--color-text-primary)] hover:bg-black/5 rounded-md font-medium py-2 px-3" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Contact</NavLink>
            
            <div className="border-t border-[var(--color-border)] mt-4 pt-4 space-y-3">
              <Button 
                href="/contact" 
                variant="primary" 
                className="w-full" 
                onClick={() => setIsOpen(false)}
              >
                Request a Quote
              </Button>
              <button
                onClick={() => { setIsOpen(false); openSearch(); }}
                className="w-full flex items-center gap-2 text-left text-[var(--color-text-primary)] hover:bg-black/5 rounded-md font-medium py-2 px-3"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                Search...
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
