'use client';
import Link from 'next/link';
import { ArrowRight, Factory, HardHat, ShieldCheck, Award, Fingerprint, Building } from 'lucide-react';
import { collection, orderBy, query, limit } from 'firebase/firestore';

import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product-card';
import { ScrollReveal } from '@/components/scroll-reveal';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { type Product } from '@/lib/types';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HeroCarousel } from '@/components/hero-carousel';

const corporatePillars = [
  {
    icon: HardHat,
    title: 'GRP Technology',
    description: 'Leveraging advanced composite materials for superior performance and longevity.'
  },
  {
    icon: Factory,
    title: 'Manufacturing Strength',
    description: 'State-of-the-art facilities ensuring precision, quality, and scalability.'
  },
  {
    icon: ShieldCheck,
    title: 'Custom Engineering',
    description: 'Bespoke solutions designed to meet unique project requirements and specifications.'
  }
];

const trustBadges = [
  { icon: Award, name: 'ISO 9001:2015', description: 'Quality Management' },
  { icon: Award, name: 'ISO 14001:2015', description: 'Environmental' },
  { icon: Fingerprint, name: 'IP65 Certified', description: 'Ingress Protection' },
  { icon: Building, name: 'Govt. Approved', description: 'Public Works Dept.' },
]

export default function Home() {
  const firestore = useFirestore();

  const productsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'products'), orderBy('name'), limit(3));
  }, [firestore]);
  const { data: products } = useCollection<Product>(productsQuery);
  
  const heroImages = PlaceHolderImages.filter(p => [
    'hero-main',
    'gallery-factory-3',
    'gallery-project-1',
    'gallery-instrumentation',
    'gallery-project-4',
    'hero-industrial-plant'
  ].includes(p.id));

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="relative h-dvh w-full flex items-center justify-center text-center overflow-hidden">
           <HeroCarousel images={heroImages} />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="container relative px-4 md:px-6 z-20">
            <div className="mx-auto max-w-4xl text-primary-foreground">
              <ScrollReveal>
                <h1 className="!leading-tight text-4xl font-bold font-headline tracking-tighter text-white shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
                  Premier GRP Engineering & Modular Infrastructure
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="mt-6 text-lg text-gray-200/90 md:text-xl">
                  Manufacturing smart urban solutions and high-performance industrial components.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button size="lg" asChild className="group">
                    <Link href="/contact">
                      Request Specification Pack
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className='bg-background/20 backdrop-blur-sm border-white/50 text-white hover:bg-white hover:text-primary' asChild>
                    <Link href="/products">Explore Product Catalogue</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section id="pillars" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {corporatePillars.map((pillar, i) => (
                <ScrollReveal key={pillar.title} delay={i * 150}>
                  <Card className="text-center h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 text-primary">
                        <pillar.icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-xl font-bold font-headline">{pillar.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{pillar.description}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="products"
          className="w-full bg-secondary/30 py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                    Product Catalogue
                  </div>
                  <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
                    Engineered for Excellence
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Explore our range of GRP enclosures, modular units, kiosks, and more.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="mx-auto mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {products?.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="mt-12 text-center">
                <Button size="lg" asChild className="group">
                  <Link href="/products">
                    <span>
                      View All Products
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section id="trust-layer" className="w-full bg-background py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="text-center">
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">Compliance & Trust</h2>
                <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl/relaxed">
                  Our commitment to quality is backed by industry-leading certifications and approvals.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
               <div className="mx-auto mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
                  {trustBadges.map((badge, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                        <badge.icon className="h-8 w-8 text-secondary-foreground" />
                      </div>
                      <h3 className="text-md font-semibold">{badge.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{badge.description}</p>
                    </div>
                  ))}
                </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
