import Link from "next/link";
import { Button } from "@/components/ui/button";
import { type NavItem } from "@/lib/types";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Logo } from "../icons";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const navItems: NavItem[] = [
  { title: "Products", href: "/products" },
  { title: "Projects", href: "/projects" },
  { title: "Downloads", href: "/downloads" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo className="h-6 w-auto" />
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
           <Button asChild className="hidden md:flex group">
            <Link href="/contact">
              Contact Us <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
