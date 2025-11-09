import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Logo({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("text-2xl font-bold font-headline", className)} {...props}>
      Emphz
    </div>
  );
}
