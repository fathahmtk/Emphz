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
        viewBox="0 0 541 135"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M0.201172 134.793V0.685547H38.5345V53.8522H71.5345V0.685547H109.868V134.793H71.5345V81.1922H38.5345V134.793H0.201172ZM121.801 134.793V0.685547H212.801V28.1922H160.134V54.2122H206.134V81.1922H160.134V107.293H212.801V134.793H121.801ZM226.201 134.793V0.685547H264.534V107.293H311.534V134.793H226.201ZM323.468 134.793L323.534 0.685547H361.868V134.793H323.468ZM395.034 134.793V83.6522L374.701 0.685547H416.701L426.868 50.8522L437.034 0.685547H479.034L458.701 83.6522V134.793H395.034ZM467.534 54.2122V0.685547H540.701V134.793H502.368V54.2122H467.534Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
