
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Logo({
  className,
  variant = 'default',
  ...props
}: HTMLAttributes<HTMLElement> & { variant?: 'default' | 'white' }) {
  const fillColor = variant === 'white' ? '#FFFFFF' : 'hsl(var(--foreground))';
  const primaryColor = variant === 'white' ? '#FFFFFF' : 'hsl(var(--primary))';


  return (
    <div
      className={cn("relative h-10 w-auto", className)}
      style={{ aspectRatio: '1/1' }}
      {...props}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <path d="M12 5V55H19.5V36.25H40.5V23.75H19.5V12.5H48V5H12Z" fill={fillColor}/>
        <path d="M40.5 23.75L28 36.25H48L35.5 23.75H40.5Z" fill={primaryColor} />
      </svg>
    </div>
  );
}
