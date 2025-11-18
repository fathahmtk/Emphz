
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
            <SheetContent side="left" className="bg-background p-0 flex flex-col">
                <div className="flex h-16 items-center border-b px-6">
                    <SheetClose asChild>
                        <Link href="/" className="flex items-center gap-2 font-semibold">
                            <Logo className="h-8 w-auto" />
                            <span className="sr-only">Emphz</span>
                        </Link>
                    </SheetClose>
                </div>
                <div className="flex-1 overflow-y-auto">
                    <Accordion type="multiple" className="w-full px-6 py-4">
                        {menuData.map((item) => (
                            <AccordionItem value={item.title} key={item.title}>
                                <AccordionTrigger className="text-lg font-medium">
                                    <SheetClose asChild>
                                        <Link href={item.href}>{item.title}</Link>
                                    </SheetClose>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <nav className="grid gap-4 pt-2">
                                        {item.columns.map(col => (
                                            <div key={col.title}>
                                                <h4 className="font-semibold text-muted-foreground mb-2">{col.title}</h4>
                                                {col.links.map((link) => (
                                                    <SheetClose asChild key={link.href}>
                                                        <Link
                                                            href={link.href}
                                                            className="flex w-full items-center py-2 text-foreground/80 hover:text-foreground"
                                                        >
                                                            {link.title}
                                                        </Link>
                                                    </SheetClose>
                                                ))}
                                            </div>
                                        ))}
                                         {item.cta && (
                                            <SheetClose asChild>
                                                <Button asChild className="w-full mt-4">
                                                    <Link href={item.cta.href}>{item.cta.text}</Link>
                                                </Button>
                                            </SheetClose>
                                         )}
                                    </nav>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
                <SheetFooter className="p-4 border-t gap-2">
                    <Button className="w-full">Request Spec Pack</Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
