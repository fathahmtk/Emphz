import React from 'react';
import { Link } from "react-router-dom";
import { CONTACT_OPTIONS, OFFICE_LOCATIONS, SOCIAL_LINKS } from '../constants';
import config from '../config';
import Logo from './Logo';
import Icon from './Icon';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-surface-secondary)] backdrop-blur-lg text-[var(--color-text-light)]/70 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="md:col-span-1">
          <Logo className="h-12 w-auto mb-4" />
          <p className="text-sm">
            Engineering Tomorrow’s Infrastructure — Today.
          </p>
          <div className="mt-6 flex space-x-4">
            <a href={SOCIAL_LINKS.linkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[var(--color-text-light)]/70 hover:text-[var(--color-brand)] transition-colors duration-200">
              <Icon name="linkedin" className="h-6 w-6" />
            </a>
            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)" className="text-[var(--color-text-light)]/70 hover:text-[var(--color-brand)] transition-colors duration-200">
              <Icon name="twitter" className="h-6 w-6" />
            </a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[var(--color-text-light)]/70 hover:text-[var(--color-brand)] transition-colors duration-200">
              <Icon name="facebook" className="h-6 w-6" />
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[var(--color-text-light)]/70 hover:text-[var(--color-brand)] transition-colors duration-200">
              <Icon name="instagram" className="h-6 w-6" />
            </a>
            <a href={SOCIAL_LINKS.googleBusiness} target="_blank" rel="noopener noreferrer" aria-label="Google Business Profile" className="text-[var(--color-text-light)]/70 hover:text-[var(--color-brand)] transition-colors duration-200">
               <Icon name="google" className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/products" className="hover:text-[var(--color-brand)] transition-colors duration-200">Products</Link></li>
            <li><Link to="/industries" className="hover:text-[var(--color-brand)] transition-colors duration-200">Industries</Link></li>
            <li><Link to="/innovation" className="hover:text-[var(--color-brand)] transition-colors duration-200">Innovation</Link></li>
            <li><Link to="/sustainability" className="hover:text-[var(--color-brand)] transition-colors duration-200">Sustainability</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--color-brand)] transition-colors duration-200">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
             <li><a href={`mailto:${CONTACT_OPTIONS.generalEnquiry}`} className="hover:text-[var(--color-brand)] transition-colors duration-200">{CONTACT_OPTIONS.generalEnquiry}</a></li>
             <li><a href={`tel:${config.supportPhone}`} className="hover:text-[var(--color-brand)] transition-colors duration-200">{config.supportPhone}</a></li>
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Locations</h3>
          <ul className="space-y-2 text-sm">
            {OFFICE_LOCATIONS.map((location, index) => (
              <li key={index} className="flex items-start">
                <span className="mt-1 mr-2 text-[var(--color-brand)]">📍</span>
                <span>{location}</span>
                </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm">
        &copy; {currentYear} {config.companyName}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;