
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
      style={{ aspectRatio: '252/60' }}
      {...props}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 252 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
            <path d="M45.0391 0.48H5.91907L30.9391 29.82L5.91907 59.16H45.0391L69.6391 29.82L45.0391 0.48ZM30.9391 36.3L16.5991 10.98H4.65907L30.9391 29.82L4.65907 48.66H16.5991L30.9391 36.3Z" fill={fillColor}/>
            <path d="M30.9391 36.3L45.2791 10.98H57.2191L30.9391 29.82L57.2191 48.66H45.2791L30.9391 36.3Z" fill={primaryColor}/>
            <path d="M85.3984 46.8V37.92H103.758V32.7H85.3984V23.7H104.958V18.48H77.1184V46.8H85.3984Z" fill={fillColor}/>
            <path d="M129.578 46.8V18.48H121.298V46.8H129.578Z" fill={fillColor}/>
            <path d="M136.236 46.8V18.48H144.516V46.8H136.236Z" fill={fillColor}/>
            <path d="M152.793 46.8V18.48H161.073V46.8H152.793Z" fill={fillColor}/>
            <path d="M192.518 47.1C198.818 47.1 202.898 43.26 202.898 37.8V18.48H194.618V37.5C194.618 40.02 193.178 41.22 190.838 41.22C188.618 41.22 187.238 39.9 187.238 37.02V18.48H178.958V37.8C178.958 43.26 183.038 47.1 189.338 47.1C190.418 47.1 191.498 46.98 192.518 46.74V47.1Z" fill={fillColor}/>
            <path d="M211.006 46.8V18.48H223.906C229.366 18.48 232.546 21.66 232.546 27.42C232.546 33.3 229.126 36.3 223.306 36.3H219.286V46.8H211.006ZM219.286 30.6H224.266C226.726 30.6 227.926 29.1 227.926 27.3C227.926 25.5 226.726 24.18 224.266 24.18H219.286V30.6Z" fill={fillColor}/>
            <path d="M251.328 18.48L244.608 34.5L237.888 18.48H228.948L241.008 41.4V59.16H248.208V41.4L260.268 18.48H251.328Z" fill={fillColor}/>
      </svg>
    </div>
  );
}
