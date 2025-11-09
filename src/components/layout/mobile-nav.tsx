"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { type NavItem } from "@/lib/types"
import { Logo } from "@/components/icons"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Products", href: "/products" },
  { title: "Projects", href: "/projects" },
  { title: "Downloads", href: "/downloads" },
  { title: "Contact", href: "/contact" },
];

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="shrink-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-background p-0">
          <div className="flex h-full flex-col">
            <div className="flex h-16 items-center border-b px-6">
                <SheetClose asChild>
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <Logo className="h-6 w-auto" />
                        <span className="sr-only">Emphz</span>
                    </Link>
                </SheetClose>
            </div>
            <div className="flex-1 overflow-y-auto">
                <nav className="grid items-start px-6 py-4 text-lg font-medium gap-4">
                {navItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                        <Link
                            href={item.href}
                            className="flex w-full items-center py-2 text-muted-foreground hover:text-foreground"
                        >
                            {item.title}
                        </Link>
                    </SheetClose>
                ))}
                </nav>
            </div>
          </div>
      </SheetContent>
    </Sheet>
  )
}
