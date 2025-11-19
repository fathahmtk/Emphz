
'use client';

import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { useToast } from "@/hooks/use-toast";
import { subscribeToNewsletter } from "@/app/actions/newsletter";

import { Logo } from "../icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const socialLinks = [
  { icon: Twitter, href: "#", name: "Twitter" },
  { icon: Linkedin, href: "#", name: "LinkedIn" },
];

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending} className="ml-0 md:ml-4 w-full md:w-auto shrink-0">
            {pending ? "Subscribing..." : "Subscribe"}
        </Button>
    );
}


export function SiteFooter() {
    const initialState = { status: "idle" as const, message: "" };
    const [state, formAction] = useFormState(subscribeToNewsletter, initialState);
    const { toast } = useToast();

    useEffect(() => {
        if (state.status === 'success') {
            toast({
                title: "Success!",
                description: state.message,
            });
        } else if (state.status === 'error') {
            toast({
                variant: "destructive",
                title: "Oops!",
                description: state.message,
            });
        }
    }, [state, toast]);

  return (
    <footer className="bg-secondary/30 border-t border-border/50">
      <div className="container max-w-7xl px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-foreground xl:text-2xl font-headline">
              Stay updated with our latest engineering innovations.
            </h1>
            <form action={formAction}>
                <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full px-4 py-2 text-foreground bg-background border-input rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary h-auto"
                        placeholder="Email Address"
                        required
                    />
                    <SubmitButton />
                </div>
            </form>
          </div>
          <div>
            <p className="font-semibold text-foreground">Quick Links</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <Link href="/#about" className="text-muted-foreground transition-colors duration-300 hover:text-primary">About EMPHZ</Link>
              <Link href="/products" className="text-muted-foreground transition-colors duration-300 hover:text-primary">Products</Link>
              <Link href="/contact" className="text-muted-foreground transition-colors duration-300 hover:text-primary">Contact</Link>
            </div>
          </div>
          <div>
            <p className="font-semibold text-foreground">Contact</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <a href="mailto:sales@emphz.com" className="text-muted-foreground transition-colors duration-300 hover:text-primary">sales@emphz.com</a>
              <p className="text-muted-foreground">EMPHZ Solutions Inc, Dubai, UAE</p>
            </div>
          </div>
        </div>
        <hr className="my-6 border-border/50 md:my-8" />
        <div className="flex items-center justify-between">
          <Link href="/">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="flex -mx-2">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="ghost" size="icon" asChild>
                <a href={link.href} aria-label={link.name} className="mx-2 text-muted-foreground transition-colors duration-300 hover:text-primary" >
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
