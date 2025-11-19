
'use client';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Factory, HardHat, ShieldCheck, Zap, Droplets, Wind, Sun, Box } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/scroll-reveal';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { GlassCard } from '@/components/glass-card';

const heroBgImage = PlaceHolderImages.find(p => p.id === 'hero-new-2');
const aboutBgImage = PlaceHolderImages.find(p => p.id === 'hero-industrial-plant');

const coreProducts = [
  {
    title: "GRP Electrical Enclosures",
    description: "Industrial-grade, IP-rated, UV-resistant GRP enclosures engineered for harsh outdoor environments and electrical safety compliance.",
    href: "/products/enclosures"
  },
  {
    title: "GRP Portable Toilets",
    description: "Hygienic, monsoon-proof toilet cabins designed for public spaces, sites, tourism, panchayat projects, and heavy daily usage.",
    href: "/products/toilets"
  },
  {
    title: "GRP Modular Kiosks",
    description: "Food kiosks, ticket counters, retail pods, and security booths built with structural integrity and clean finishing.",
    href: "/products/kiosks"
  },
  {
    title: "GRP Security Cabins",
    description: "Impact-resistant, insulated, ergonomic cabins ideal for residential, commercial, and industrial security operations.",
    href: "/products/cabins"
  },
  {
    title: "GRP Resort Villas & Pods",
    description: "High-end GRP villas crafted for resorts in Wayanad, Munnar, Mysore, Coorg, coastal areas, and private retreats.",
    href: "/products/villas"
  },
  {
    title: "Custom GRP Fabrication",
    description: "Bespoke GRP structures engineered for unique architectural, commercial, or industrial requirements.",
    href: "/products/custom"
  },
];

const whyGprPoints = [
    { icon: ShieldCheck, text: "Zero corrosion" },
    { icon: Zap, text: "Zero maintenance" },
    { icon: Wind, text: "Lightweight, high strength" },
    { icon: ShieldCheck, text: "Thermal and electrical insulation" },
    { icon: Sun, text: "UV and monsoon-resistant" },
    { icon: Factory, text: "Decades-long lifecycle" },
    { icon: HardHat, text: "Fast deployment and installation" },
    { icon: Droplets, text: "Higher ROI compared to traditional construction" }
];

const industries = [
    "Tourism & Resorts",
    "Construction & Infrastructure",
    "Solar EPC & Electrical Contractors",
    "Government / Panchayat projects",
    "Residential & Commercial Security",
    "Event & Exhibition Industries",
    "Retail and F&B"
];

const heroProducts = [
  { title: 'Electrical Enclosures', href: '/products/enclosures' },
  { title: 'Modular Kiosks', href: '/products/kiosks' },
  { title: 'Portable Toilets', href: '/products/toilets' },
  { title: 'Resort Villas', href: '/products/villas' },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="relative h-dvh w-full flex items-center justify-center text-left overflow-hidden">
            {heroBgImage && (
              <Image
                src={heroBgImage.imageUrl}
                alt={heroBgImage.description}
                data-ai-hint={heroBgImage.imageHint}
                fill
                className="object-cover"
                priority
                quality={100}
              />
            )}
          <div className="absolute inset-0 bg-background/70 z-10" />
          <div className="container relative grid lg:grid-cols-2 gap-12 items-center px-4 md:px-6 z-20">
            <div className="max-w-3xl">
              <ScrollReveal>
                <h1 className="!leading-tight text-4xl font-bold font-headline tracking-tighter text-white shadow-lg sm:text-5xl">
                  Engineered GRP Solutions for Demanding Environments
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="mt-4 text-lg text-white/80 md:text-xl">
                  Manufactured at scale in Mysore. Delivered with precision across Kerala. GRP enclosures, toilet cabins, kiosks, security cabins, and premium resort villas built to outperform in real-world conditions.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" asChild className="group">
                    <Link href="/contact">
                      Get a Quote
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-background" asChild>
                    <Link href="/downloads">Download Catalog</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
             <ScrollReveal delay={500} className="hidden lg:block">
               <GlassCard>
                <CardHeader>
                    <CardTitle>Core Product Lines</CardTitle>
                    <CardDescription>Explore our engineered solutions.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                        {heroProducts.map((product) => (
                           <Link key={product.href} href={product.href}>
                             <div className="p-4 rounded-lg bg-card/80 hover:bg-accent/50 hover:text-primary transition-colors flex items-center gap-3">
                               <Box className="w-5 h-5 text-primary" />
                               <span className="font-semibold">{product.title}</span>
                             </div>
                           </Link>
                        ))}
                    </div>
                </CardContent>
               </GlassCard>
            </ScrollReveal>
          </div>
        </section>

        <section id="about" className="bg-secondary/20">
          <div className="container grid grid-cols-1 lg:grid-cols-2 min-h-[70dvh] items-center gap-12 px-4 md:px-6 py-12 md:py-24">
            <div className="text-foreground">
              <ScrollReveal>
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">About EMPHZ</h2>
                 <div className="mt-4 space-y-4 text-foreground/80 md:text-lg">
                    <p>
                        EMPHZ is a specialized GRP manufacturing company operating out of Mysore with dedicated execution teams across Kerala. We build high-strength, weatherproof, corrosion-resistant GRP enclosures and modular structures designed for industrial, commercial, tourism, and government applications.
                    </p>
                    <p>
                        We don’t compete with low-end fabricators. We deliver engineered products with predictable quality, repeatable performance, and long-term durability.
                    </p>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal className="relative h-full w-full min-h-[40vh] overflow-hidden rounded-lg">
              {aboutBgImage && (
                <Image
                    src={aboutBgImage.imageUrl}
                    alt={aboutBgImage.description}
                    data-ai-hint={aboutBgImage.imageHint}
                    quality={100}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                />
              )}
            </ScrollReveal>
          </div>
        </section>

        <section id="products" className="py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <ScrollReveal>
                    <div className="text-center mb-12 text-foreground">
                        <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Core Product Lines</h2>
                    </div>
                </ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coreProducts.map((product, i) => (
                        <ScrollReveal key={product.title} delay={i * 100}>
                            <Link href={product.href} className="h-full block">
                                <Card className="flex h-full flex-col group overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:bg-accent/50">
                                    <CardHeader>
                                        <CardTitle className="text-xl font-headline transition-colors group-hover:text-primary">{product.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>{product.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
        
        <section id="why-grp" className="py-12 md:py-24 lg:py-32 bg-secondary/20">
             <div className="container px-4 md:px-6">
                <ScrollReveal>
                    <div className="text-center mb-12 text-foreground">
                        <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Why GRP? Why EMPHZ?</h2>
                    </div>
                </ScrollReveal>
                 <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8">
                    {whyGprPoints.map((point, i) => (
                        <ScrollReveal key={i} delay={i * 100}>
                            <div className="flex flex-col items-center text-center gap-2">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                    <point.icon className="h-6 w-6 text-primary" />
                                </div>
                                <p className="text-sm font-medium text-foreground">{point.text}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
             </div>
        </section>

        <section id="delivery-model" className="py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6 text-center">
                <ScrollReveal>
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">South India Delivery Model</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-foreground/80 md:text-lg">
                        You get manufacturing reliability from our Mysore factory, plus local execution support from our Kerala operations offices.
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
                        <Card>
                            <CardHeader>
                                <CardTitle>Factory</CardTitle>
                                <CardDescription>Mysore (Karnataka)</CardDescription>
                            </CardHeader>
                        </Card>
                         <Card>
                            <CardHeader>
                                <CardTitle>Operations Office</CardTitle>
                                <CardDescription>Kerala (Calicut/Malappuram/Kochi)</CardDescription>
                            </CardHeader>
                        </Card>
                         <Card>
                            <CardHeader>
                                <CardTitle>Coverage</CardTitle>
                                <CardDescription>Entire Kerala + Karnataka + Tamil Nadu</CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </ScrollReveal>
            </div>
        </section>

        <section id="industries" className="py-12 md:py-24 lg:py-32 bg-secondary/20">
            <div className="container px-4 md:px-6 text-center">
                 <ScrollReveal>
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Industries We Serve</h2>
                </ScrollReveal>
                 <ScrollReveal delay={200}>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        {industries.map(industry => (
                            <div key={industry} className="p-4 bg-card rounded-lg border text-card-foreground font-medium">{industry}</div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>

        <section id="cta" className="py-12 md:py-24 lg:py-32 bg-background">
             <div className="container px-4 md:px-6 text-center">
                <ScrollReveal>
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">Build with Confidence. Build with GRP.</h2>
                    <p className="mt-4 max-w-xl mx-auto text-foreground/80 md:text-lg">
                        Request a quotation or schedule a site visit today.
                    </p>
                    <div className="mt-6">
                        <Button size="lg" asChild>
                            <Link href="/contact">Get Started</Link>
                        </Button>
                    </div>
                </ScrollReveal>
             </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
