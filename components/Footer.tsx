
import React from 'react';
import { SOCIAL_LINKS } from './constants.tsx';

const Footer = () => {
    return (
        <footer className="border-t border-slate-200 bg-white" role="contentinfo">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-6 md:flex-row md:gap-4">
                <div className="text-center text-sm text-slate-500 md:text-left">© {new Date().getFullYear()} Emphz Private Limited. All rights reserved.</div>
                
                <div className="flex items-center gap-4 text-sm text-slate-600">
                    <a href="#" className="hover:text-slate-900">Privacy</a>
                    <a href="#" className="hover:text-slate-900">Terms</a>
                    <a href="#" className="hover:text-slate-900">Careers</a>
                </div>

                <div className="flex items-center gap-4">
                    {SOCIAL_LINKS.map(link => {
                        const Icon = link.icon;
                        return (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label={`Follow us on ${link.name}`}
                                className="text-slate-500 transition-colors hover:text-blue-600"
                            >
                               <Icon />
                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
};

export default Footer;