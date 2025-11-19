import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";
import Image from "next/image";

const logoUrls = {
  default: "https://lh3.googleusercontent.com/pw/AP1GczNRnzYjFyAIBA_0WpIyH7FHZ5OJ7H_nadGQFV4dntfPUeTCzzBPO2vXJNWzafExXzvab-w2GFEsrNVCos-tz1xActbH-ZowKNCrPMCvUTI9B-UPSqBO8Ff_ZPlE3OoOOlcJWPceaQtzmHUNC1iK2dtoGQ=w879-h879-s-no-gm?authuser=0",
  white: "https://lh3.googleusercontent.com/pw/AP1GczP_QU2C1n-W_fNq52Hw80UuCgY6eA_GcbZk9t4N3tg_G9nBy1rCj3g_vP5r6d_J_e-h_JvIqQ5b7g4uPzWkQ9xS5y_C7w=s879-no-gm?authuser=0"
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
