import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-slate-200 bg-white" role="contentinfo">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
            <div className="text-sm text-slate-500">© {new Date().getFullYear()} Emphz Private Limited. All rights reserved.</div>
            <div className="flex items-center gap-4 text-sm text-slate-600">
                <a href="#" className="hover:text-slate-900">Privacy</a>
                <a href="#" className="hover:text-slate-900">Terms</a>
                <a href="#" className="hover:text-slate-900">Careers</a>
            </div>
            </div>
        </footer>
    );
};

export default Footer;