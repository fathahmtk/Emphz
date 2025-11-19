"use client";
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
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { menuData } from "@/lib/menu-data";
import { ArrowRight, Search } from "lucide-react";
import { SearchDialog } from "../search-dialog";

export function SiteHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setIsSearchOpen((open) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])


    return (
        <>
            <header className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                isScrolled ? "border-b border-border/50 bg-background/80 backdrop-blur-lg" : "bg-transparent border-b border-transparent"
            )}>
                <div className="container flex h-16 items-center px-4 md:px-6">
                    <div className="mr-6 hidden md:flex items-center space-x-2">
                         <Link href="/">
                            <Logo className={cn("h-8 w-auto text-foreground transition-colors", !isScrolled && "text-white")} />
                         </Link>
                    </div>
                    
                    <NavigationMenu className={cn("hidden md:flex flex-1")}>
                        <NavigationMenuList>
                            {menuData.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    <NavigationMenuTrigger className={cn("bg-transparent text-sm font-medium", isScrolled ? "text-foreground/70 hover:text-foreground/90" : "text-white/80 hover:text-white", "hover:bg-accent/50 focus:bg-accent/50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50")}>
                                        <Link href={item.href}>{item.title}</Link>
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className={`grid gap-x-6 gap-y-4 p-6 w-[--nav-width] grid-cols-${item.columns.length > 3 ? '4' : item.columns.length > 2 ? '3' : '2'}`} style={{'--nav-width': `${item.columns.length * 250}px`} as React.CSSProperties}>
                                            {item.columns.map((col) => (
                                                <div key={col.title} className="flex flex-col space-y-3">
                                                    <h3 className="font-bold text-lg text-foreground/90 font-headline">{col.title}</h3>
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

                    <div className="flex flex-1 items-center justify-start md:justify-end space-x-2">
                        <div className="hidden md:flex items-center space-x-2">
                            <Button asChild>
                                <Link href="/contact">Request Spec Pack</Link>
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)} className={cn(!isScrolled && "text-white hover:text-white hover:bg-white/10")}><Search className="h-4 w-4"/></Button>
                        </div>
                        <MobileNav />
                    </div>
                </div>
            </header>
            <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
        </>
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
                <div className="text-sm font-medium leading-none text-foreground">{title}</div>
                {children && <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {children}
                </p>}
            </a>
        </NavigationMenuLink>
    )
})
ListItem.displayName = "ListItem"
