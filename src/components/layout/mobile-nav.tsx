
"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
    SheetFooter
} from "@/components/ui/sheet"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Logo } from "@/components/icons"
import { menuData } from "@/lib/menu-data"
import { Separator } from "../ui/separator"
import { cn } from "@/lib/utils"

export function MobileNav() {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="md:hidden">
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className={cn("shrink-0", !isScrolled ? "text-white hover:text-white hover:bg-white/10" : "text-foreground" )}
                >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background p-0 flex flex-col z-[999]">
                <div className="flex h-16 items-center border-b px-6">
                    <SheetClose asChild>
                        <Link href="/" className="flex items-center gap-2 font-semibold">
                            <Logo className="h-8 w-auto" />
                            <span className="sr-only">Emphz</span>
                        </Link>
                    </SheetClose>
                </div>
                <div className="flex-1 overflow-y-auto">
                    <nav className="grid gap-2 p-4">
                        {menuData.map((item) => (
                           <Accordion type="single" collapsible className="w-full" key={item.title}>
                             <AccordionItem value={item.title} className="border-b-0">
                               <div className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-foreground/80 hover:bg-accent hover:text-accent-foreground">
                                 <SheetClose asChild>
                                    <Link href={item.href} className="flex-1 text-left">{item.title}</Link>
                                 </SheetClose>
                                {item.columns.length > 0 && <AccordionTrigger className="p-0 w-auto hover:no-underline [&[data-state=open]>svg]:rotate-180">
                                </AccordionTrigger>}
                               </div>
                               {item.columns.length > 0 && <AccordionContent className="pt-2">
                                  <div className="grid gap-2 pl-7">
                                     {item.columns.map(col => (
                                        <div key={col.title}>
                                            <h4 className="font-semibold text-muted-foreground mb-2 text-sm">{col.title}</h4>
                                            {col.links.map((link) => (
                                                <SheetClose asChild key={link.href}>
                                                    <Link
                                                        href={link.href}
                                                        className="flex w-full items-center py-2 text-sm text-foreground/70 hover:text-foreground"
                                                    >
                                                        {link.title}
                                                    </Link>
                                                </SheetClose>
                                            ))}
                                        </div>
                                    ))}
                                  </div>
                               </AccordionContent>}
                             </AccordionItem>
                           </Accordion>
                        ))}
                    </nav>
                </div>
                 <Separator />
                <SheetFooter className="p-4 gap-2">
                     <SheetClose asChild>
                        <Button asChild className="w-full">
                            <Link href="/contact">Request Spec Pack</Link>
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
        </div>
    )
}
