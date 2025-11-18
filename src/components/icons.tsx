
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
      <text x="5" y="68" className="fill-current text-primary" fontFamily="Playfair Display, serif" fontSize="64" fontWeight="700">
        E
      </text>
      <text x="45" y="68" className="fill-current" fontFamily="Manrope, system-ui, sans-serif" fontSize="48" fontWeight="600" letterSpacing="-1">
        MPH-Z
      </text>
    </svg>
  );
}
