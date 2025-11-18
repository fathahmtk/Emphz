
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { type NavItem } from "@/lib/types";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Logo } from "../icons";
import { ArrowRight } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import React from "react";
import { cn } from "@/lib/utils";

const companyLinks: { title: string; href: string; description: string }[] = [
    { title: "About Us", href: "/about", description: "Learn about our company history and team." },
    { title: "History", href: "/about/history", description: "Our journey and milestones." },
    { title: "CEO's Message", href: "/about/ceo-message", description: "A message from our leadership." },
    { title: "Mission, Vision & Values", href: "/about/mission", description: "Our guiding principles." },
    { title: "Our Team", href: "/about/team", description: "Meet the people behind our success." },
    { title: "GRP Advantage", href: "/grp-advantage", description: "Why our materials are superior." },
    { title: "Manufacturing", href: "/manufacturing", description: "Explore our state-of-the-art facilities." },
]

const industriesLinks: { title: string; href: string; description: string }[] = [
    { title: "Power Generation", href: "/industries/power-generation", description: "Solutions for the power sector." },
    { title: "Water Treatment", href: "/industries/water-treatment", description: "Durable products for water management." },
    { title: "Solar", href: "/industries/solar", description: "Infrastructure for renewable energy." },
    { title: "Oil & Gas", href: "/industries/oil-gas", description: "Robust solutions for harsh environments." },
    { title: "Fire & Safety", href: "/industries/fire-safety", description: "Certified safety products." },
    { title: "Construction", href: "/industries/construction", description: "Building materials for the future." },
    { title: "Telecom", href: "/industries/telecom", description: "Enclosures for critical infrastructure." },
    { title: "Mining", href: "/industries/mining", description: "Products that withstand the toughest conditions." },
]

const productsLinks: { title: string; href: string; description: string }[] = [
    { title: "GRP/FRP Electrical Enclosures", href: "/products/enclosures", description: "High-durability GRP enclosures for electrical distribution." },
    { title: "Utility-Approved Enclosures", href: "/products/utility-approved", description: "Certified enclosures meeting regional authority compliance." },
    { title: "Fire & Safety Enclosures", href: "/products/fire-safety", description: "Fire-rated GRP enclosures for emergency equipment." },
    { title: "Instrumentation Enclosures", href: "/products/instrumentation", description: "Precision-built GRP boxes for sensitive instruments." },
    { title: "Battery Enclosures", href: "/products/battery-enclosures", description: "Engineered GRP containers for energy storage systems." },
    { title: "GRP/FRP Kiosks", href: "/products/kiosks", description: "Fully-moulded GRP kiosks for various field operations." },
    { title: "Customized GRP Enclosures", href: "/products/custom", description: "Tailor-made GRP solutions for unique requirements." },
    { title: "GRP Roofing Systems", href: "/products/roofing", description: "Durable, corrosion-proof roofing for industrial structures." },
];

const qualityLinks: { title: string; href: string; description: string }[] = [
    { title: "Product Certification", href: "/quality/certification", description: "Our certified quality standards." },
    { title: "Integrated Management System (IMS)", href: "/quality/ims", description: "Our approach to quality management." },
    { title: "Standard Operating Procedures", href: "/quality/sop", description: "Ensuring consistency and excellence." },
];

const clientsLinks: { title: string; href: string; description: string }[] = [
    { title: "Authority Approvals", href: "/clients/authority-approvals", description: "Trusted by government and public entities." },
    { title: "Major Projects", href: "/projects", description: "Our track record of successful projects." },
    { title: "Our Markets", href: "/clients/markets", description: "The regions and sectors we serve." },
    { title: "Testimonials", href: "/clients/testimonials", description: "What our clients say about us." },
];

const mediaLinks: { title: string; href: string; description: string }[] = [
    { title: "Photo Gallery", href: "/media/gallery", description: "Visuals of our products and projects." },
    { title: "News", href: "/media/news", description: "The latest updates from our company." },
    { title: "Video", href: "/media/video", description: "Watch our products in action." },
    { title: "Blog", href: "/media/blog", description: "Insights from our industry experts." },
];

const authorityLinks: { title: string; href: string; description: string }[] = [
    { title: "Power & Water", href: "/authority-approvals/power-water", description: "Approvals from power and water authorities." },
    { title: "Oil & Gas", href: "/authority-approvals/oil-gas", description: "Certified for the oil and gas industry." },
    { title: "Solar", href: "/authority-approvals/solar", description: "Approved for solar energy projects." },
    { title: "Others", href: "/authority-approvals/others", description: "Other important certifications." },
];

const contactLinks: { title: string; href: string; description: string }[] = [
    { title: "Our Locations", href: "/contact/locations", description: "Find our offices and factories." },
    { title: "Submit Inquiry", href: "/contact", description: "Send us your questions or RFQs." },
    { title: "Support Request", href: "/contact/support", description: "Get technical support for your products." },
    { title: "Careers", href: "/contact/careers", description: "Join our team of experts." },
];


export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-7xl items-center px-4 md:px-6">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <Logo className="h-6 w-auto" />
                </Link>
                <div className="flex flex-1 items-center justify-end">
                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {companyLinks.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {industriesLinks.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                             <NavigationMenuItem>
                                <NavigationMenuTrigger>GRP (FRP) Products</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {productsLinks.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                         <ListItem
                                            title="View all products"
                                            href="/products"
                                            className="bg-accent text-accent-foreground col-span-2 text-center"
                                        >
                                            Explore our complete product ecosystem.
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                             <NavigationMenuItem>
                                <NavigationMenuTrigger>Quality</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] lg:w-[500px] ">
                                        {qualityLinks.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Clients</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] lg:w-[500px] ">
                                        {clientsLinks.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Media</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                     <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] lg:w-[500px] ">
                                        {mediaLinks.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Authority Approvals</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                     <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] lg:w-[500px] ">
                                        {authorityLinks.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Contact Us</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                     <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] lg:w-[500px] ">
                                        {contactLinks.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
