'use client';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Factory, HardHat, ShieldCheck, Award, Fingerprint, Building } from 'lucide-react';
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
import Image from 'next/image';

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
];

const values = [
    { title: "Integrity", description: "Zero-compromise approach to quality, compliance, and customer commitments." },
    { title: "Innovation", description: "Advancing GRP engineering through R&D and modern production methods." },
    { title: "Reliability", description: "Delivering products that perform consistently across extreme conditions." },
    { title: "Customer Focus", description: "Providing technical clarity, responsive support, and project-specific customization." },
    { title: "Sustainability", description: "Designing solutions that reduce corrosion, maintenance, and environmental impact." },
]

const heroImages = PlaceHolderImages.filter(img => img.id.startsWith('hero-'));
const aboutImage = PlaceHolderImages.find(p => p.id === 'hero-industrial-plant');
const missionImage = PlaceHolderImages.find(p => p.id === 'hero-extra-1');


export default function Home() {
  const firestore = useFirestore();

  const productsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'products'), orderBy('name'), limit(3));
  }, [firestore]);
  const { data: products } = useCollection<Product>(productsQuery);

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="relative h-dvh w-full flex items-end justify-start text-left overflow-hidden">
          <HeroCarousel images={heroImages} />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent z-10" />
          <div className="container relative px-4 md:px-6 z-20 pb-12 md:pb-20">
            <div className="max-w-2xl">
              <ScrollReveal>
                <h1 className="!leading-tight text-3xl font-bold font-headline tracking-tighter text-foreground shadow-lg sm:text-4xl md:text-5xl">
                  Premier GRP Engineering & Modular Infrastructure
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="mt-4 text-base text-foreground/80 md:text-lg">
                  Manufacturing smart urban solutions and high-performance industrial components.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div className="mt-6 flex flex-col justify-start items-start gap-4 sm:flex-row">
                  <Button size="lg" asChild className="group">
                    <Link href="/contact">
                      Request Specification Pack
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/products">Explore Product Catalogue</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section id="about" className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">About EMPHZ</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-lg">
                            EMPHZ is a next-generation GRP/FRP engineering manufacturer dedicated to delivering mission-critical infrastructure solutions for utilities, industry, and smart-city development.
                        </p>
                    </div>
                </ScrollReveal>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {corporatePillars.map((pillar, i) => (
                    <ScrollReveal key={pillar.title} delay={i * 150}>
                    <Card className="text-center h-full bg-card/50">
                        <CardHeader>
                        <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3 text-primary">
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

        {aboutImage && <section className="relative py-20 md:py-40">
            <div className="absolute inset-0 -z-10 h-full w-full">
                <Image src={aboutImage.imageUrl} alt={aboutImage.description} data-ai-hint={aboutImage.imageHint} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="container px-4 md:px-6 text-center text-primary-foreground">
                <ScrollReveal>
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-white">Our History</h2>
                <p className="mt-4 max-w-3xl mx-auto md:text-lg">
                    Established with a clear mandate to engineer composite solutions that outperform traditional materials, EMPHZ has evolved into a fully-integrated manufacturing platform delivering high-grade enclosures, kiosks, and industrial composite systems recognized for their discipline and engineering depth.
                </p>
                </ScrollReveal>
            </div>
        </section>}

        <section id="mission-vision" className="py-12 md:py-24 lg:py-32 bg-secondary/20">
            <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
                <ScrollReveal>
                    <div>
                        <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">Mission & Vision</h2>
                        <p className="mt-4 text-muted-foreground md:text-lg">
                            <strong className="text-foreground">Mission:</strong> To engineer world-class GRP solutions that enable resilient, safe, and efficient infrastructure for industries and communities.
                        </p>
                        <p className="mt-4 text-muted-foreground md:text-lg">
                            <strong className="text-foreground">Vision:</strong> To be the region’s leading GRP/FRP manufacturing authority — delivering innovative, certified, and globally benchmarked composite solutions.
                        </p>
                    </div>
                </ScrollReveal>
                 <ScrollReveal delay={200} className='hidden md:block'>
                    {missionImage && <div className="relative aspect-video rounded-lg overflow-hidden">
                        <Image src={missionImage.imageUrl} alt={missionImage.description} data-ai-hint={missionImage.imageHint} fill className="object-cover" />
                    </div>}
                </ScrollReveal>
            </div>
        </section>

        <section id="values" className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">Our Values</h2>
                    </div>
                </ScrollReveal>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {values.slice(0,3).map((value, i) => (
                        <ScrollReveal key={value.title} delay={i * 150}>
                            <Card className="h-full bg-card/50">
                                <CardHeader>
                                    <CardTitle>{value.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{value.description}</p>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
                 <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 mt-8 max-w-4xl mx-auto">
                    {values.slice(3,5).map((value, i) => (
                        <ScrollReveal key={value.title} delay={i * 150}>
                            <Card className="h-full bg-card/50">
                                <CardHeader>
                                    <CardTitle>{value.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{value.description}</p>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>

        <section id="ceo-message" className="py-12 md:py-24 lg:py-32 bg-secondary/20">
             <div className="container px-4 md:px-6 text-center">
                <ScrollReveal>
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">A Message From Our CEO</h2>
                    <blockquote className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-foreground italic border-l-4 border-primary pl-6 text-left">
                        "At EMPHZ, our mission is straightforward: deliver engineered GRP solutions that stand the test of time and elevate infrastructure reliability for the industries we serve. Our promise is simple: uncompromising quality, sustained performance, and solutions built for the long term."
                    </blockquote>
                    <p className="mt-4 font-semibold text-foreground">— CEO, EMPHZ</p>
                </ScrollReveal>
             </div>
        </section>


        <section
          id="products"
          className="w-full py-12 md:py-24 lg:py-32"
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

        <section id="trust-layer" className="w-full bg-secondary/20 py-12 md:py-24 lg:py-32">
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
               <div className="mx-auto mt-12 grid grid-cols-2 gap-y-10 gap-x-8 md:grid-cols-4">
                  {trustBadges.map((badge, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <badge.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">{badge.name}</h3>
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
