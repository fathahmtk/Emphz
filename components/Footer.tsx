import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-zinc-800" role="contentinfo">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
            <div className="text-sm text-zinc-400">© {new Date().getFullYear()} Emphz Private Limited. All rights reserved.</div>
            <div className="flex items-center gap-4 text-sm text-zinc-400">
                <a href="#" className="hover:text-zinc-200">Privacy</a>
                <a href="#" className="hover:text-zinc-200">Terms</a>
                <a href="#" className="hover:text-zinc-200">Careers</a>
            </div>
            </div>
        </footer>
    );
};

export default Footer;
