
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
        description: "Our GRP electrical enclosures are designed for outdoor and industrial applications where corrosion, heat, and moisture destroy traditional metal cabinets. These enclosures deliver uncompromised safety and longevity."
    },
    {
        name: "GRP Portable Toilets",
        href: "/products/toilets",
        description: "Monsoon-proof, hygienic, high-strength GRP toilet cabins engineered for continuous public usage."
    },
    {
        name: "GRP Modular Kiosks",
        href: "/products/kiosks",
        description: "Turnkey GRP kiosks for food retail, ticketing, micro-shops, tourism counters, and commercial setups."
    },
    {
        name: "GRP Security Cabins",
        href: "/products/cabins",
        description: "Secure, durable, thermally insulated GRP security cabins designed for malls, companies, commercial buildings, and residential communities."
    },
    {
        name: "GRP Resort Villas & Pods",
        href: "/products/villas",
        description: "Luxury, climate-resistant GRP cabins for tourism and resort developers. Designed to deliver high aesthetics with rapid installation and long-term rental ROI."
    },
    {
        name: "Custom GRP Fabrication",
        href: "/products/custom",
        description: "We engineer unique structures based on client specifications, ensuring structural integrity and design flexibility."
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
