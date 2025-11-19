import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";
import Image from "next/image";

export function Logo({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <div
      className={cn("relative h-10 w-40", className)}
      {...props}
    >
       <Image
        src="https://storage.googleapis.com/stabl-media/6f183983-de3c-4740-8a1a-464a75399587.png"
        alt="EMPHZ Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
