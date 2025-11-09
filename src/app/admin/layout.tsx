'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart, BookText, BotMessageSquare, Home, PanelLeft, Settings, ShoppingBag } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Logo } from "@/components/icons"

const adminNavItems = [
  { href: "/admin", label: "Dashboard", icon: Home },
  { href: "/admin/products", label: "Products", icon: ShoppingBag },
  { href: "/admin/projects", label: "Projects", icon: BookText },
  { href: "/admin/leads", label: "Leads", icon: BarChart },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
      <Sidebar variant="inset" collapsible="icon">
        <SidebarRail />
        <SidebarHeader>
          <Link href="/admin">
            <Logo className="w-20 hidden group-data-[state=expanded]:block" />
          </Link>
          <Logo className="w-8 group-data-[state=expanded]:hidden" />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {adminNavItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  tooltip={{ children: item.label }}
                >
                  <Link href={item.href}>
                    <>
                      <item.icon />
                      <span>{item.label}</span>
                    </>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarInset>{children}</SidebarInset>
      </Sidebar>
  )
}
