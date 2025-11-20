
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Logo({
  className,
  variant = 'default',
  ...props
}: HTMLAttributes<HTMLElement> & { variant?: 'default' | 'white' }) {
  const fillColor = variant === 'white' ? '#FFFFFF' : 'hsl(var(--foreground))';

  return (
    <div
      className={cn("relative h-10 w-40", className)}
      {...props}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 340 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Icon: E with lightning bolt */}
        <path
          d="M0 0 H40 V15 H15 V42.5 H35 V57.5 H15 V85 H40 V100 H0 V0 Z M50 0 L25 50 L50 50 L30 100 L55 50 L30 50 Z"
          fill={fillColor}
        />
        <text x="75" y="85" fontFamily="sans-serif" fontSize="80" fill={fillColor} fontWeight="bold">
            <tspan>mphz</tspan>
        </text>
      </svg>
    </div>
  );
}
