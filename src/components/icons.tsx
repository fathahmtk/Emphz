import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";
import Image from "next/image";

const logoUrls = {
  default: "https://storage.googleapis.com/stabl-media/8e040c5f-1498-4228-8547-2c938f322744.png",
  white: "https://storage.googleapis.com/stabl-media/992f447f-b510-4491-a185-5b485038c7f9.png"
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
        className={cn("object-contain")}
        priority
      />
    </div>
  );
}
