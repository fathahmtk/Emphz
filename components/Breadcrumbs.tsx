import React from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbLink {
  name: string;
  path?: string;
}

interface BreadcrumbsProps {
  links: BreadcrumbLink[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ links }) => {
  if (!links || links.length === 0) {
    return null;
  }

  return (
    <nav aria-label="breadcrumb">
      <div className="container mx-auto px-6 py-3">
        <ol className="flex items-center space-x-2 text-sm text-text-secondary dark:text-slate-400">
          {links.map((link, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && <ChevronRight size={16} className="mx-1 text-gray-400 dark:text-slate-500" />}
              {link.path ? (
                <NavLink to={link.path} className="hover:underline hover:text-primary dark:hover:text-slate-200 transition-colors">
                  {link.name}
                </NavLink>
              ) : (
                <span className="font-semibold text-text-DEFAULT dark:text-slate-200">{link.name}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;