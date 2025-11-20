
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Logo({
  className,
  variant = 'default',
  ...props
}: HTMLAttributes<HTMLElement> & { variant?: 'default' | 'white' }) {
  const fillColor = variant === 'white' ? '#FFFFFF' : '#102A27';

  return (
    <div
      className={cn("relative h-10 w-40", className)}
      {...props}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 450 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Icon: E with lightning bolt */}
        <path
          d="M0 0 H40 V15 H15 V42.5 H35 V57.5 H15 V85 H40 V100 H0 V0 Z M50 0 L25 50 L50 50 L30 100 L55 50 L30 50 Z"
          fill={fillColor}
        />
        <path 
          d="M27.5 50 L50 50 L30 100 L55 48 L30 48Z" 
          fill={fillColor}
        />

        {/* Text: Emphz */}
        <path
          d="M80 15 H120 M80 50 H120 M80 85 H120 M140 100 V15 H165 L180 50 L165 85 H140 M190 100 V15 H210 C230 15 230 40 210 40 H190 M240 100 V15 H255 V85 H280 V100 H240 M290 15 L320 85 H300 L295 70 H275 L270 85 H250 L280 15 H290 Z M285 55 L278 35 L271 55 H285"
          stroke={fillColor}
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
         <text x="135" y="88" fontFamily="sans-serif" fontSize="80" fill={fillColor} fontWeight="bold">
            <tspan>m</tspan><tspan>p</tspan><tspan>h</tspan><tspan>z</tspan>
        </text>
      </svg>
    </div>
  );
}
