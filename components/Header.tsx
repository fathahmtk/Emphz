import React from 'react';
import { Pill } from './ui';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<string>("home");

  const sections = React.useRef<string[]>(NAV_LINKS.map(link => link.href.replace('#', '')));

  React.useEffect(() => {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0.25, 0.5, 0.75, 1] }
    );

    sections.current.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setOpen(false); // Close mobile menu on click
      }
    }
  };

  // A versatile link component for both desktop and mobile navigation.
  const LinkEl = ({ href, label, baseClassName }: { href: string; label: string; baseClassName: string; }) => (
    <a
      href={href}
      onClick={(e) => handleAnchorClick(e, href)}
      aria-current={active === href.replace('#','') ? "page" : undefined}
      className={`${baseClassName} ${active === href.replace('#','') ? 'text-blue-600 font-semibold' : 'text-slate-700'}`}
    >
      {label}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 backdrop-blur supports-[backdrop-filter]:bg-white/80" role="banner">
      <a href="#home" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 rounded bg-blue-600 px-3 py-1 text-white">Skip to content</a>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#home" onClick={(e) => handleAnchorClick(e, '#home')} className="flex items-center gap-3">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 font-black text-white">E</div>
          <span className="text-lg font-semibold tracking-wide uppercase text-slate-800">Emphz</span>
          <Pill>GRP First</Pill>
        </a>
        <nav className="hidden lg:flex flex-wrap items-center" aria-label="Primary">
          {NAV_LINKS.map(link => (
            <LinkEl 
              key={link.href} 
              {...link}
              baseClassName="px-3 py-2 text-sm font-medium transition-colors hover:text-blue-600"
            />
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contact" onClick={(e)=>handleAnchorClick(e, '#contact')} className="hidden rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 md:inline-block transition-colors">Request Quote</a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white lg:hidden"
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-slate-200 bg-white/95 lg:hidden" role="dialog" aria-modal="true">
          <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-3 text-sm" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <LinkEl
                key={link.href}
                {...link}
                baseClassName="rounded-lg px-3 py-2 hover:bg-slate-100"
              />
            ))}
            <a href="#contact" onClick={(e)=>handleAnchorClick(e, '#contact')} className="mt-2 rounded-lg bg-blue-600 px-3 py-2 text-center font-semibold text-white">Request Quote</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;