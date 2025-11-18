
'use client';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Filter } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const productCategories = [
  {
    name: 'GRP Electrical Enclosures',
    description: 'High-durability GRP enclosures engineered for electrical distribution, control systems, and field installations.',
    href: '/products/enclosures'
  },
  {
    name: 'Utility-Approved Enclosures',
    description: 'Certified GRP enclosures meeting the compliance requirements of regional power & water authorities.',
    href: '/products/utility-approved'
  },
  {
    name: 'Fire & Safety Enclosures',
    description: 'Fire-rated GRP enclosures designed for housing safety and emergency equipment.',
    href: '/products/fire-safety'
  },
  {
    name: 'Instrumentation Enclosures',
    description: 'Precision-built GRP boxes for sensitive instruments that require stable, insulated, and corrosion-proof housings.',
    href: '/products/instrumentation'
  },
  {
    name: 'Battery Enclosures',
    description: 'GRP battery containers engineered for solar energy systems, telecom backup batteries, and industrial UPS units.',
    href: '/products/battery-enclosures'
  },
  {
    name: 'Customized GRP Enclosures',
    description: 'Tailor-made GRP enclosures engineered to meet unique dimensional, operational, or environmental requirements.',
    href: '/products/custom'
  },
  {
    name: 'GRP/FRP Kiosks',
    description: 'Fully-moulded GRP kiosks for utilities, security, ticketing, temporary offices, and field operations.',
    href: '/products/kiosks'
  },
  {
    name: 'GRP Roofing Systems',
    description: 'Durable, corrosion-proof roofing solutions for industrial, utility, and coastal structures.',
    href: '/products/roofing'
  }
];

export default function ProductsPage() {
  const [filters, setFilters] = useState<Record<string, boolean>>({});

  const handleFilterChange = (categoryName: string, checked: boolean) => {
    setFilters(prev => ({...prev, [categoryName]: checked}));
  }

  const activeFilters = Object.entries(filters).filter(([,isActive]) => isActive).map(([key]) => key);
  const filteredCategories = activeFilters.length === 0 ? productCategories : productCategories.filter(cat => activeFilters.includes(cat.name));


  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="container max-w-7xl px-4 py-12 md:px-6 md:py-20">
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
                    <div key={category.name} className="flex items-center space-x-2">
                       <Checkbox 
                        id={category.name} 
                        checked={filters[category.name] || false}
                        onCheckedChange={(checked) => handleFilterChange(category.name, !!checked)}
                       />
                       <Label htmlFor={category.name} className="flex-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                         {category.name}
                       </Label>
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCategories.map((category, i) => (
              <ScrollReveal key={category.name} delay={i * 100}>
                <Link href={category.href} className="h-full block">
                  <Card className="flex h-full flex-col group overflow-hidden transition-shadow hover:shadow-xl hover:border-accent">
                    <CardHeader>
                      <CardTitle className="text-xl font-headline group-hover:text-accent">{category.name}</CardTitle>
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
