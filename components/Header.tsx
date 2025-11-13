
import React from 'react';
import { NAV_LINKS } from './constants.tsx';

const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  
  const path = typeof window !== 'undefined' ? window.location.pathname : '';
  const isHomePage = path === '/' || path.endsWith('/index.html') || path === '';
  const activePath = path;

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    if (isHomePage) {
      // Set initial state based on load position
      handleScroll(); 
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isHomePage]);

  const headerIsOverlay = isHomePage && !scrolled;

  const headerClasses = [
    'z-50',
    'transition-all',
    'duration-300',
    'w-full',
    'top-0',
    isHomePage ? 'fixed' : 'sticky',
    scrolled || !isHomePage ? 'border-b border-slate-200/80 backdrop-blur supports-[backdrop-filter]:bg-white/80' : 'border-b border-transparent'
  ].join(' ');
  
  const textColor = headerIsOverlay ? 'text-white' : 'text-slate-800';
  const linkColor = headerIsOverlay ? 'text-slate-200' : 'text-slate-700';
  const activeLinkColor = headerIsOverlay ? 'text-white font-semibold' : 'text-blue-600 font-semibold';
  const mobileMenuButtonClasses = headerIsOverlay ? 'bg-white/10 border-white/20 text-white' : 'bg-white border-slate-200 text-slate-800';
  const pillClasses = headerIsOverlay ? "border-white/30 bg-white/10 text-white" : "border-blue-500/30 bg-blue-500/10 text-blue-700";
  const logoClasses = headerIsOverlay ? 'bg-white text-slate-900' : 'bg-gradient-to-br from-slate-800 to-slate-900 text-white';
  const quoteButtonClasses = headerIsOverlay ? 'bg-white text-slate-900 hover:bg-slate-200' : 'bg-blue-600 text-white hover:bg-blue-500';

  const LinkEl: React.FC<{ href: string; label: string; baseClassName: string; }> = ({ href, label, baseClassName }) => {
    const isActive = activePath.endsWith(href) || (href === '/' && activePath.endsWith('/index.html'));
    const isHomeLinkActive = href === '/' && isHomePage;
    return (
        <a
        href={href}
        aria-current={isActive || isHomeLinkActive ? "page" : undefined}
        className={`${baseClassName} ${isActive || isHomeLinkActive ? activeLinkColor : linkColor} ${headerIsOverlay ? 'hover:text-white' : 'hover:text-blue-600'}`}
        >
        {label}
        </a>
    );
  };

  return (
    <header className={headerClasses} role="banner">
      <a href="/" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 rounded bg-blue-600 px-3 py-1 text-white">Skip to content</a>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="/" className="flex items-center gap-3">
          <div className={`grid h-8 w-8 place-items-center rounded-lg font-black transition-colors ${logoClasses}`}>E</div>
          <span className={`text-lg font-semibold tracking-wide uppercase transition-colors ${textColor}`}>Emphz</span>
          <div className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold tracking-wide transition-colors ${pillClasses}`}>GRP First</div>
        </a>
        <nav className="hidden lg:flex flex-wrap items-center" aria-label="Primary">
          {NAV_LINKS.map(link => (
            <LinkEl 
              key={link.href} 
              href={link.href}
              label={link.label}
              baseClassName="px-3 py-2 text-sm font-medium transition-colors"
            />
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="/contact.html" className={`hidden rounded-xl px-4 py-2 text-sm font-semibold transition-colors md:inline-block ${quoteButtonClasses}`}>Request Quote</a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            className={`grid h-10 w-10 place-items-center rounded-lg border transition-colors lg:hidden ${mobileMenuButtonClasses}`}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className={`border-t lg:hidden ${scrolled || !isHomePage ? 'border-slate-200 bg-white/95' : 'border-white/20 bg-slate-900/95 backdrop-blur'}`} role="dialog" aria-modal="true">
          <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-3 text-sm" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <LinkEl
                key={link.href}
                href={link.href}
                label={link.label}
                baseClassName="rounded-lg px-3 py-2"
              />
            ))}
            <a href="/contact.html" className="mt-2 rounded-lg bg-blue-600 px-3 py-2 text-center font-semibold text-white">Request Quote</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;