
"use client";

import { cn } from "@/lib/utils";
import { type ReactNode, useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export function ScrollReveal({ children, className, delay = 0, threshold = 0.1 }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasGlowed, setHasGlowed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger glow effect and then remove it after a delay
          setTimeout(() => setHasGlowed(true), (delay || 0) + 700); // Increased duration for the glow effect
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out duration-1000", // Slower, more graceful transition
        {
          "opacity-0 translate-y-5": !isVisible,
          "opacity-100 translate-y-0": isVisible,
          "shadow-glow": isVisible && !hasGlowed, // Using a more defined glow class
        },
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
