
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Logo({ className, ...props }: HTMLAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 100"
      className={cn("h-full w-auto", className)}
      {...props}
    >
      <g className="fill-current text-primary">
        <path d="M20 25 L20 75 L35 75 L35 55 L70 55 L70 75 L85 75 L85 25 L70 25 L70 45 L35 45 L35 25 Z" />
        <path d="M95 25 L110 25 L110 50 L125 50 L125 25 L140 25 L140 75 L125 75 L125 50 L110 50 L110 75 L95 75 Z" />
      </g>
      <text x="155" y="68" className="fill-current text-foreground" fontFamily="Manrope, system-ui, sans-serif" fontSize="48" fontWeight="600" letterSpacing="-1">
        EMPHZ
      </text>
    </svg>
  );
}
