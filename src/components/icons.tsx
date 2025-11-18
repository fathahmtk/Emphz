
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Logo({ className, ...props }: HTMLAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 160"
      className={cn("h-full w-auto", className)}
      {...props}
    >
      <g transform="translate(20,20)">
        <rect x="0" y="0" width="120" height="120" rx="28" fill="currentColor"/>
        
        <g fill="hsl(var(--background))">
           <rect x="28" y="28" width="60" height="16" rx="8" />
           <rect x="28" y="52" width="50" height="16" rx="8" />
           <rect x="28" y="76" width="60" height="16" rx="8" />
        </g>
        
        <polygon fill="currentColor" points="80,12 126,12 98,60 124,60 70,130 86,76 58,76"/>
      </g>
      <g transform="translate(170,40)">
        <text x="0" y="70" fill="currentColor" fontFamily="Jost,Poppins,system-ui" fontSize="72" fontWeight="700" letterSpacing="1.5">Emphz</text>
      </g>
    </svg>
  );
}
