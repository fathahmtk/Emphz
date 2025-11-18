import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Logo({ className, ...props }: HTMLAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 180" // Adjusted viewBox to fit content
      className={cn("h-full w-auto", className)}
      {...props}
    >
      <g transform="translate(0, 0)">
        <path
          fill="currentColor"
          d="M0 0h140c8 0 12 4 12 12v24c0 8-4 12-12 12H40v32h92c8 0 12 4 12 12v24c0 8-4 12-12 12H40v32h100c8 0 12 4 12 12v24c0 8-4 12-12 12H0z"
        />
        <path
          fill="currentColor"
          d="M240 0l-52 100h40l-32 140 96-140h-40l44-100z"
        />
      </g>
      <g transform="translate(0, 130)"> 
        <rect fill="currentColor" x="0" y="0" width="60" height="16" rx="4" />
        <rect fill="currentColor" x="0" y="32" width="60" height="16" rx="4" />
        <rect fill="currentColor" x="0" y="64" width="60" height="16" rx="4" />
        <text
          x="80"
          y="60"
          fill="currentColor"
          fontFamily="Jost, Arial" // Using Jost to match headline font
          fontSize="70"
          fontWeight="600"
        >
          Emphz
        </text>
      </g>
    </svg>
  );
}
