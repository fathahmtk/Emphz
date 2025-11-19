import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";
import Image from "next/image";

export function Logo({ className, imageClassName, ...props }: HTMLAttributes<HTMLElement> & { imageClassName?: string }) {
  return (
    <div
      className={cn("relative h-10 w-40", className)}
      {...props}
    >
       <Image
        src="https://storage.googleapis.com/stabl-media/8e040c5f-1498-4228-8547-2c938f322744.png"
        alt="EMPHZ Logo"
        fill
        className={cn("object-contain", imageClassName)}
        priority
        unoptimized
      />
    </div>
  );
}
