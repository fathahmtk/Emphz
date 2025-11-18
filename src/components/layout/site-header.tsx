
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Logo } from "../icons";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import React from "react";
import { cn } from "@/lib/utils";
import { menuData, type NavLink } from "@/lib/menu-data";
import { ArrowRight, Search } from "lucide-react";

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center px-4 md:px-6">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <Logo className="h-8 w-auto" />
                </Link>
                
                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList>
                        {menuData.map((item) => (
                             <NavigationMenuItem key={item.title}>
                                <NavigationMenuTrigger>
                                     <Link href={item.href}>{item.title}</Link>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className={`grid gap-x-6 gap-y-4 p-6 w-[--nav-width] grid-cols-${item.columns.length > 3 ? '4' : item.columns.length > 2 ? '3' : '2'}`} style={{'--nav-width': `${item.columns.length * 250}px`} as React.CSSProperties}>
                                        {item.columns.map((col) => (
                                            <div key={col.title} className="flex flex-col space-y-3">
                                                <h3 className="font-bold text-lg text-foreground/90">{col.title}</h3>
                                                <ul className="space-y-2">
                                                {col.links.map(link => (
                                                    <li key={link.href}>
                                                        <ListItem href={link.href} title={link.title}>
                                                            {link.description}
                                                        </ListItem>
                                                    </li>
                                                ))}
                                                </ul>
                                            </div>
                                        ))}
                                        {item.cta && (
                                            <div className={`col-span-${item.columns.length > 3 ? '4' : item.columns.length > 2 ? '3' : '2'} mt-4`}>
                                                 <Button asChild className="w-full group">
                                                    <Link href={item.cta.href}>
                                                        {item.cta.text}
                                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                                                    </Link>
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        ))}
                       
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="flex flex-1 items-center justify-end space-x-2">
                     <div className="hidden md:flex items-center space-x-2">
                        <Button variant="ghost">Request Spec Pack</Button>
                        <Button>Submit Tender</Button>
                        <Button variant="outline" size="icon"><Search className="h-4 w-4"/></Button>
                     </div>
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
                {children && <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {children}
                </p>}
            </a>
        </NavigationMenuLink>
    )
})
ListItem.displayName = "ListItem"
