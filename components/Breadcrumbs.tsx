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
        <ol className="flex items-center space-x-2 text-sm text-text-secondary">
          {links.map((link, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && <ChevronRight size={16} className="mx-1 text-gray-400" />}
              {link.path ? (
                <NavLink to={link.path} className="hover:underline hover:text-graphite transition-colors">
                  {link.name}
                </NavLink>
              ) : (
                <span className="font-semibold text-text-DEFAULT">{link.name}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;