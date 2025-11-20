import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";
import Image from "next/image";

const logoUrls = {
  default: "https://lh3.googleusercontent.com/pw/AP1GczP2OJZ14_7oKx1nLqgCnyM2zG3d3i7Ue0a9s_Q1i-i_g_Q8dO8Z8YwR-X2kZ-jZc5A2I0Yh8f3lWq8wX9a0b1c2d3e4f5g6h7i8j9k0",
  white: "https://lh3.googleusercontent.com/pw/AP1GczNRCzYjFyAIBA_0WpIyH7FHZ5OJ7H_nadGQFV4dntfPUeTCzzBPO2vXJNWzafExXzvab-w2GFEsrNVCos-tz1xActbH-ZowKNCrPMCvUTI9B-UPSqBO8Ff_ZPlE3OoOOlcJWPceaQtzmHUNC1iK2dtoGQ"
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
