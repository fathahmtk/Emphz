
"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { File, Folder, HardHat } from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { menuData, type NavLink } from "@/lib/menu-data"
import { useCollection, useFirestore } from "@/firebase"
import type { Product, ProjectCaseStudy } from "@/lib/types"
import { collection } from "firebase/firestore"

export function SearchDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void; }) {
  const router = useRouter()
  const [searchPages, setSearchPages] = React.useState<NavLink[]>([]);

  const firestore = useFirestore();

  const productsQuery = React.useMemo(() => {
    if (!firestore) return null;
    return collection(firestore, 'products');
  }, [firestore]);
  const { data: products } = useCollection<Product>(productsQuery);

  const projectsQuery = React.useMemo(() => {
    if (!firestore) return null;
    return collection(firestore, 'project_case_studies');
  }, [firestore]);
  const { data: projects } = useCollection<ProjectCaseStudy>(projectsQuery);


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
        {searchPages.length > 0 && <CommandGroup heading="Pages">
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
        </CommandGroup>}
        {products && (
            <CommandGroup heading="Products">
                 {products.map((product) => (
                    <CommandItem
                        key={product.id}
                        value={product.name}
                        onSelect={() => {
                            runCommand(() => router.push(`/products/${product.slug}`))
                        }}
                        >
                        <HardHat className="mr-2 h-4 w-4" />
                        {product.name}
                    </CommandItem>
                ))}
            </CommandGroup>
        )}
        {projects && (
            <CommandGroup heading="Projects">
                 {projects.map((project) => (
                    <CommandItem
                        key={project.id}
                        value={project.title}
                        onSelect={() => {
                            runCommand(() => router.push(`/projects`))
                        }}
                        >
                        <Folder className="mr-2 h-4 w-4" />
                        {project.title}
                    </CommandItem>
                ))}
            </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  )
}
