
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Logo({
  className,
  variant = 'default',
  ...props
}: HTMLAttributes<HTMLElement> & { variant?: 'default' | 'white' }) {
  const foregroundFill = variant === 'white' ? '#FFFFFF' : 'hsl(var(--foreground))';
  const primaryFill = 'hsl(var(--primary))';

  return (
    <div
      className={cn("relative h-12 w-auto", className)}
      style={{ aspectRatio: '150 / 120' }}
      {...props}
    >
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 150 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
        >
            <defs>
                <linearGradient id="silver-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor: variant === 'white' ? '#E0E0E0' : '#C0C0C0', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: variant === 'white' ? '#BDBDBD' : '#808080', stopOpacity: 1}} />
                </linearGradient>
                <linearGradient id="primary-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: 'hsl(var(--primary) / 0.7)', stopOpacity: 1}} />
                </linearGradient>
            </defs>

            {/* Icon Part */}
            <g transform="translate(25, 0)">
                {/* E part */}
                <path d="M20 0 H60 V10 H30 V25 H55 V35 H30 V50 H60 V60 H20 Z" fill="url(#silver-gradient)" />
                {/* Bolt part */}
                <path d="M60 0 L80 25 H65 L95 60 L70 35 H85 Z" fill="url(#primary-gradient)" />
            </g>

            {/* Text Part */}
            <g transform="translate(0, 80)">
                {/* Custom E */}
                <path d="M10 0 H30 V5 H10 Z" fill={primaryFill}/>
                <path d="M10 10 H30 V15 H10 Z" fill={primaryFill}/>
                <path d="M10 20 H30 V25 H10 Z" fill={primaryFill}/>

                {/* mphz */}
                <text x="38" y="22" fontFamily="sans-serif" fontSize="28" fontWeight="bold" fill={foregroundFill}>
                    mphz
                </text>
            </g>
        </svg>
    </div>
  );
}
