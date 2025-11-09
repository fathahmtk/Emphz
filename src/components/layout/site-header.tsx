import Link from "next/link";
import { Button } from "@/components/ui/button";
import { type NavItem } from "@/lib/types";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Logo } from "../icons";
import { ArrowRight, Bot } from "lucide-react";

const navItems: NavItem[] = [
  { title: "Products", href: "/products" },
  { title: "Projects", href: "/projects" },
  { title: "Downloads", href: "/downloads" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo className="h-6 w-auto" />
        </Link>
        <div className="flex flex-1 items-center justify-end">
          <nav className="hidden md:flex gap-6 text-sm font-medium items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground/60 transition-colors hover:text-foreground/80"
              >
                {item.title}
              </Link>
            ))}
             <Button variant="ghost" asChild>
              <Link href="/ai-persona-chat">
                <Bot className="w-4 h-4 mr-2" />
                AI Chat
              </Link>
            </Button>
             <Button asChild className="group">
              <Link href="/contact">
                <span>
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform inline" />
                </span>
              </Link>
            </Button>
          </nav>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
