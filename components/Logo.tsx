import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = 'h-12 w-auto' }) => {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 200 48"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        role="img"
        aria-labelledby="logo-title-light logo-desc-light"
      >
        <title id="logo-title-light">EMPHZ Logo</title>
        <desc id="logo-desc-light">The official logo for EMPHZ Private Limited, featuring a clean, geometric icon and modern wordmark.</desc>
        <g style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800 }}>
          <g>
            <path fill="var(--color-brand)" d="M0 0 H18 V18 H0 Z" transform="translate(0 0)"/>
            <path fill="var(--color-brand)" d="M0 0 H18 V18 H0 Z" transform="translate(22 0)"/>
            <path fill="var(--color-text-secondary)" d="M0 0 H18 V18 H0 Z" transform="translate(0 22)"/>
            <path fill="var(--color-brand)" d="M0 0 H18 V18 H0 Z" transform="translate(22 22)"/>
          </g>
          <text x="52" y="34" style={{ fontSize: "32px", fill: "var(--color-text-primary)" }}>EMPHZ</text>
        </g>
      </svg>
    </div>
  );
};

export default Logo;