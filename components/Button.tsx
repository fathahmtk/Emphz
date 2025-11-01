import React from 'react';
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline' | 'glass' | 'glass-cta' | 'glass-subtle' | 'outline-light';
  className?: string;
  href?: string;
  disabled?: boolean;
  [key: string]: any; // Allow other props like aria-label
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  href,
  disabled = false,
  ...props
}) => {
  const baseStyles = `inline-block px-6 py-3 rounded-[var(--radius)] text-base font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 transform hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] active:shadow-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none`;

  const primaryStyles = `bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-accent)] focus:ring-[var(--color-brand)]/50 shadow-[var(--shadow-brand)]`;
  const secondaryStyles = `bg-black/5 border border-black/10 text-[var(--color-text-primary)] hover:bg-black/10 focus:ring-[var(--color-brand)]/50 shadow-sm backdrop-blur-sm`;
  
  let variantStyles = '';
  // Map old variants to new ones for compatibility
  switch (variant) {
    case 'primary':
    case 'glass-cta':
      variantStyles = primaryStyles;
      break;
    case 'secondary':
    case 'outline':
    case 'outline-light':
    case 'glass':
    case 'glass-subtle':
      variantStyles = secondaryStyles;
      break;
    default:
      variantStyles = primaryStyles;
  }

  const isDisabled = disabled || href === '#';
  const tooltip = href === '#' ? 'This feature is coming soon.' : undefined;

  const finalClassName = `${baseStyles} ${variantStyles} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http');
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      if (isDisabled) {
        e.preventDefault();
        return;
      }
      if (onClick) {
        onClick(e);
      }
    };

    if (isExternal) {
      return (
        <a
          href={isDisabled ? undefined : href}
          onClick={handleClick}
          target="_blank"
          rel="noopener noreferrer"
          className={`${finalClassName} text-center`}
          aria-disabled={isDisabled}
          title={tooltip}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        to={href}
        onClick={handleClick}
        className={`${finalClassName} text-center ${isDisabled ? 'pointer-events-none' : ''}`}
        aria-disabled={isDisabled}
        title={tooltip}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={finalClassName}
      title={tooltip}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;