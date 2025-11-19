import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";
import Image from "next/image";

const logoUrls = {
  default: "https://lh3.googleusercontent.com/pw/AP1GczNRnzYjFyAIBA_0WpIyH7FHZ5OJ7H_nadGQFV4dntfPUeTCzzBPO2vXJNWzafExXzvab-w2GFEsrNVCos-tz1xActbH-ZowKNCrPMCvUTI9B-UPSqBO8Ff_ZPlE3OoOOlcJWPceaQtzmHUNC1iK2dtoGQ=w869-h869-s-no-gm?authuser=0",
  white: "https://storage.googleapis.com/stabl-media/8e040c5f-1498-4228-8547-2c938f322744.png"
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
