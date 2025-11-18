
"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { File } from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { menuData, type NavLink } from "@/lib/menu-data"

export function SearchDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void; }) {
  const router = useRouter()
  
  const [searchPages, setSearchPages] = React.useState<NavLink[]>([]);

  React.useEffect(() => {
    const allLinks: NavLink[] = [];
    menuData.forEach(menu => {
        allLinks.push({title: menu.title, href: menu.href});
        menu.columns.forEach(col => {
            col.links.forEach(link => {
                // Avoid duplicates
                if(!allLinks.find(l => l.href === link.href)) {
                    allLinks.push(link);
                }
            })
        })
    });
    setSearchPages(allLinks);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    onOpenChange(false)
    command()
  }, [onOpenChange])


  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Pages">
          {searchPages.map((page) => (
            <CommandItem
              key={page.href}
              value={page.title}
              onSelect={() => {
                runCommand(() => router.push(page.href as string))
              }}
            >
              <File className="mr-2 h-4 w-4" />
              {page.title}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
