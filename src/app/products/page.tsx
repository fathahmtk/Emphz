
'use client';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Filter } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import type { Product } from '@/lib/types';
import { collection, orderBy, query } from 'firebase/firestore';


const productPageLinks = [
  { name: 'GRP Electrical Enclosures', href: '/products/enclosures' },
  { name: 'Utility-Approved Enclosures', href: '/products/utility-approved' },
  { name: 'Fire & Safety Enclosures', href: '/products/fire-safety' },
  { name: 'Instrumentation Enclosures', href: '/products/instrumentation' },
  { name: 'Battery Enclosures', href: '/products/battery-enclosures' },
  { name: 'Customized GRP Enclosures', href: '/products/custom' },
  { name: 'GRP/FRP Kiosks', href: '/products/kiosks' },
  { name: 'GRP Roofing Systems', href: '/products/roofing' }
];

export default function ProductsPage() {
  const [filters, setFilters] = useState<Record<string, boolean>>({});

  const firestore = useFirestore();
  const productsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'products'), orderBy('name'));
  }, [firestore]);
  const { data: products } = useCollection<Product>(productsQuery);

  const productCategories = useMemo(() => {
    if (!products) return [];
    const categories = new Set(products.map(p => p.category));
    return Array.from(categories);
  }, [products]);


  const handleFilterChange = (categoryName: string, checked: boolean) => {
    setFilters(prev => ({...prev, [categoryName]: checked}));
  }

  const activeFilters = Object.entries(filters).filter(([,isActive]) => isActive).map(([key]) => key);
  
  const filteredProducts = useMemo(() => {
    if (activeFilters.length === 0) return products;
    return products?.filter(p => activeFilters.includes(p.category));
  }, [products, activeFilters]);

  const productCards = useMemo(() => {
    if (!products) return [];

    // Create a map of categories to their descriptions and links
    const categoryDetailsMap = new Map<string, { description?: string, href: string }>();

    // Start with page links
    for (const link of productPageLinks) {
      // A bit of a hack to map card to link
      const catName = products.find(p => p.category === link.name || p.name === link.name)?.category;
      const key = catName || link.name;
      if (!categoryDetailsMap.has(key)) {
         categoryDetailsMap.set(key, { href: link.href });
      }
    }
    
    // Add product data
    for (const product of products) {
        if (!categoryDetailsMap.has(product.category)) {
             categoryDetailsMap.set(product.category, { href: `/products` });
        }
        const existing = categoryDetailsMap.get(product.category);
        if (existing && !existing.description) {
            categoryDetailsMap.set(product.category, { ...existing, description: product.overview });
        }
    }

    if (activeFilters.length > 0) {
        return Array.from(categoryDetailsMap.entries())
            .filter(([category]) => activeFilters.includes(category))
            .map(([category, details]) => ({
                name: category,
                description: details.description || `Explore ${category} products.`,
                href: details.href,
            }));
    }

    return Array.from(categoryDetailsMap.entries()).map(([category, details]) => ({
        name: category,
        description: details.description || `Explore ${category} products.`,
        href: details.href,
    }));

  }, [products, activeFilters]);


  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="container px-4 py-12 md:px-6 md:py-20">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
                Products Ecosystem
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-lg">
                EMPHZ engineers a full suite of GRP/FRP enclosures, kiosks, cabinets, and modular structures designed for harsh industrial, utility, and outdoor environments. Every unit is manufactured using high-performance composites, precision moulds, and a quality framework built around ISO, utility standards, and sector compliance.
              </p>
              <p className="mx-auto mt-2 max-w-3xl text-muted-foreground md:text-lg">
                The result: corrosion-proof, electrically safe, long-life GRP systems trusted across power, water, solar, oil & gas, telecom, construction, fire & safety, and mining sectors.
              </p>
            </div>
          </ScrollReveal>

          <div className="mb-8 flex items-center justify-end">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter Products
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filter by Category</SheetTitle>
                </SheetHeader>
                <div className="py-4 space-y-4">
                  {productCategories.map(category => (
                    <div key={category} className="flex items-center space-x-2">
                       <Checkbox 
                        id={category} 
                        checked={filters[category] || false}
                        onCheckedChange={(checked) => handleFilterChange(category, !!checked)}
                       />
                       <Label htmlFor={category} className="flex-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                         {category}
                       </Label>
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {productCards.map((category, i) => (
              <ScrollReveal key={category.name} delay={i * 100}>
                <Link href={category.href} className="h-full block">
                  <Card className="flex h-full flex-col group overflow-hidden transition-shadow hover:shadow-xl hover:border-accent">
                    <CardHeader>
                      <CardTitle className="text-xl font-headline group-hover:text-primary">{category.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{category.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

    