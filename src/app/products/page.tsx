
'use client';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const productCategories = [
    {
        name: "GRP Electrical Enclosures",
        href: "/products/enclosures",
        description: "Industrial-grade, IP-rated, UV-resistant GRP enclosures engineered for harsh outdoor environments and electrical safety compliance."
    },
    {
        name: "GRP Portable Toilets",
        href: "/products/toilets",
        description: "Hygienic, monsoon-proof toilet cabins designed for public spaces, sites, tourism, panchayat projects, and heavy daily usage."
    },
    {
        name: "GRP Modular Kiosks",
        href: "/products/kiosks",
        description: "Food kiosks, ticket counters, retail pods, and security booths built with structural integrity and clean finishing."
    },
    {
        name: "GRP Security Cabins",
        href: "/products/cabins",
        description: "Impact-resistant, insulated, ergonomic cabins ideal for residential, commercial, and industrial security operations."
    },
    {
        name: "GRP Resort Villas & Pods",
        href: "/products/villas",
        description: "High-end GRP villas crafted for resorts in Wayanad, Munnar, Mysore, Coorg, coastal areas, and private retreats."
    },
    {
        name: "Custom GRP Fabrication",
        href: "/products/custom",
        description: "Bespoke GRP structures engineered for unique architectural, commercial, or industrial requirements."
    }
];

export default function ProductsPage() {

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="container px-4 py-12 md:px-6 md:py-20">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
                Products
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-lg">
                EMPHZ engineers a full suite of GRP/FRP enclosures, kiosks, cabins, and modular structures designed for the demanding conditions of South India.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category, i) => (
              <ScrollReveal key={category.name} delay={i * 100}>
                <Link href={category.href} className="h-full block">
                  <Card className="flex h-full flex-col group overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:bg-accent/50">
                    <CardHeader>
                      <CardTitle className="text-xl font-headline transition-colors group-hover:text-primary">{category.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
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
