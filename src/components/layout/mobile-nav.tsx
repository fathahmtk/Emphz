"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Logo } from "@/components/icons"

const navItems = [
    {
        title: "Company",
        links: [
            { title: "About Us", href: "/about" },
            { title: "History", href: "/about/history" },
            { title: "CEO's Message", href: "/about/ceo-message" },
            { title: "Mission, Vision & Values", href: "/about/mission" },
            { title: "Our Team", href: "/about/team" },
            { title: "GRP Advantage", href: "/grp-advantage" },
            { title: "Manufacturing", href: "/manufacturing" },
        ]
    },
    {
        title: "Industries",
        links: [
            { title: "Power Generation", href: "/industries/power-generation" },
            { title: "Water Treatment", href: "/industries/water-treatment" },
            { title: "Solar", href: "/industries/solar" },
            { title: "Oil & Gas", href: "/industries/oil-gas" },
            { title: "Fire & Safety", href: "/industries/fire-safety" },
            { title: "Construction", href: "/industries/construction" },
            { title: "Telecom", href: "/industries/telecom" },
            { title: "Mining", href: "/industries/mining" },
        ]
    },
    {
        title: "GRP (FRP) Products",
        links: [
            { title: "Enclosures", href: "/products/enclosures" },
            { title: "Kiosks", href: "/products/kiosks" },
            { title: "Battery Enclosures", href: "/products/battery-enclosures" },
            { title: "Instrumentation Products", href: "/products/instrumentation" },
            { title: "Fire and Safety Enclosures", href: "/products/fire-safety" },
            { title: "Roofing Systems Products", href: "/products/roofing" },
            { title: "Utility Approved Enclosures", href: "/products/utility-approved" },
            { title: "Customized Products", href: "/products/custom" },
            { title: "View all products", href: "/products" },
        ]
    },
    {
        title: "Quality",
        links: [
            { title: "Product Certification", href: "/quality/certification" },
            { title: "Integrated Management System (IMS)", href: "/quality/ims" },
            { title: "Standard Operating Procedures", href: "/quality/sop" },
        ]
    },
    {
        title: "Clients",
        links: [
            { title: "Authority Approvals", href: "/clients/authority-approvals" },
            { title: "Major Projects", href: "/projects" },
            { title: "Our Markets", href: "/clients/markets" },
            { title: "Testimonials", href: "/clients/testimonials" },
        ]
    },
    {
        title: "Media",
        links: [
            { title: "Photo Gallery", href: "/media/gallery" },
            { title: "News", href: "/media/news" },
            { title: "Video", href: "/media/video" },
            { title: "Blog", href: "/media/blog" },
        ]
    },
    {
        title: "Authority Approvals",
        links: [
            { title: "Power & Water", href: "/authority-approvals/power-water" },
            { title: "Oil & Gas", href: "/authority-approvals/oil-gas" },
            { title: "Solar", href: "/authority-approvals/solar" },
            { title: "Others", href: "/authority-approvals/others" },
        ]
    },
    {
        title: "Contact Us",
        links: [
            { title: "Our Locations", href: "/contact/locations" },
            { title: "Submit Inquiry", href: "/contact" },
            { title: "Support Request", href: "/contact/support" },
            { title: "Careers", href: "/contact/careers" },
        ]
    },
]


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
                        <Accordion type="multiple" className="w-full px-6 py-4">
                            {navItems.map((item) => (
                                <AccordionItem value={item.title} key={item.title}>
                                    <AccordionTrigger className="text-lg font-medium">{item.title}</AccordionTrigger>
                                    <AccordionContent>
                                        <nav className="grid gap-4 pt-2">
                                            {item.links.map((link) => (
                                                <SheetClose asChild key={link.href}>
                                                    <Link
                                                        href={link.href}
                                                        className="flex w-full items-center py-2 text-muted-foreground hover:text-foreground"
                                                    >
                                                        {link.title}
                                                    </Link>
                                                </SheetClose>
                                            ))}
                                        </nav>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
