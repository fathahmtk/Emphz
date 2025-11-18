import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import { Logo } from "../icons";
import { Button } from "../ui/button";

const socialLinks = [
  { icon: Twitter, href: "#", name: "Twitter" },
  { icon: Linkedin, href: "#", name: "LinkedIn" },
];

export function SiteFooter() {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container max-w-7xl px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-foreground xl:text-2xl">
              Stay updated with our latest engineering innovations.
            </h1>
            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                className="w-full px-4 py-2 text-foreground bg-background border rounded-md focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Email Address"
              />
              <Button type="button" className="ml-0 md:ml-4">
                Subscribe
              </Button>
            </div>
          </div>
          <div>
            <p className="font-semibold text-foreground">Quick Links</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <Link href="/about" className="text-muted-foreground transition-colors duration-300 hover:text-accent">About EMPHZ</Link>
              <Link href="/products" className="text-muted-foreground transition-colors duration-300 hover:text-accent">Products</Link>
              <Link href="/projects" className="text-muted-foreground transition-colors duration-300 hover:text-accent">Portfolio</Link>
              <Link href="/contact" className="text-muted-foreground transition-colors duration-300 hover:text-accent">Contact</Link>
            </div>
          </div>
          <div>
            <p className="font-semibold text-foreground">Contact</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <a href="mailto:contact@emphz.com" className="text-muted-foreground transition-colors duration-300 hover:text-accent">contact@emphz.com</a>
              <p className="text-muted-foreground">123 Innovation Drive, Metropolis, USA</p>
            </div>
          </div>
        </div>
        <hr className="my-6 border-border md:my-8" />
        <div className="flex items-center justify-between">
          <Link href="/">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="flex -mx-2">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="ghost" size="icon" asChild>
                <a href={link.href} aria-label={link.name} className="mx-2 text-muted-foreground transition-colors duration-300 hover:text-accent" >
                  <link.icon className="w-5 h-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">
            © {new Date().getFullYear()} EMPHZ Solutions Inc. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
