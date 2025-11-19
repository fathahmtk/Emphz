import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";
import Image from "next/image";

const logoUrls = {
  default: "https://lh3.googleusercontent.com/pw/AP1GczNRnzYjFyAIBA_0WpIyH7FHZ5OJ7H_nadGQFV4dntfPUeTCzzBPO2vXJNWzafExXzvab-w2GFEsrNVCos-tz1xActbH-ZowKNCrPMCvUTI9B-UPSqBO8Ff_ZPlE3OoOOlcJWPceaQtzmHUNC1iK2dtoGQ=w879-h879-s-no-gm?authuser=0",
  white: "https://lh3.googleusercontent.com/pw/AP1GczMFf6QCG8H2D5-b82yWf5Q24t_jS8g3o-m4T7G5P2B-M9pE6y3LwGvF8d2b_JqW9o1vJgZqY4eR2wXzXl6Xn5zV7qR9aG-gA=w879-h879-s-no-gm?authuser=0"
}

export function Logo({ 
  className, 
  variant = 'default',
  ...props 
}: HTMLAttributes<HTMLElement> & { variant?: keyof typeof logoUrls }) {
  return (
    <div
      className={cn("relative h-10 w-40", className)}
      {...props}
    >
       <Image
        src={logoUrls[variant]}
        alt="EMPHZ Logo"
        fill
        sizes="160px"
        className={cn("object-contain")}
        priority
      />
    </div>
  );
}
