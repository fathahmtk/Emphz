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
        src="https://storage.googleapis.com/stabl-media/1546850d-a32b-4d44-b220-73f4e89582d1.png"
        alt="EMPHZ Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
