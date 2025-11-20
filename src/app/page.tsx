
'use client';
import Link from 'next/link';
import { ArrowRight, Box, CheckCircle, Factory, HardHat, ShieldCheck, Sun, Wind, Zap } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/scroll-reveal';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { GlassCard } from '@/components/glass-card';

const heroBgImage = PlaceHolderImages.find(p => p.id === 'hero-new-2');
const productsBgImage = PlaceHolderImages.find(p => p.id === 'hero-new-3');
const deliveryBgImage = PlaceHolderImages.find(p => p.id === 'hero-new-6');

const coreProducts = [
  {
    title: "GRP Electrical Enclosures",
    description: "Industrial-grade, IP-rated, UV-resistant GRP enclosures engineered for harsh outdoor environments and electrical safety compliance.",
    href: "/products/grp-electrical-enclosure"
  },
  {
    title: "GRP Portable Toilets",
    description: "Hygienic, monsoon-proof toilet cabins designed for public spaces, sites, tourism, panchayat projects, and heavy daily usage.",
    href: "/products/grp-portable-toilet"
  },
  {
    title: "GRP Modular Kiosks",
    description: "Food kiosks, ticket counters, retail pods, and security booths built with structural integrity and clean finishing.",
    href: "/products/grp-modular-kiosk"
  },
  {
    title: "GRP Security Cabins",
    description: "Impact-resistant, insulated, ergonomic cabins ideal for residential, commercial, and industrial security operations.",
    href: "/products/grp-security-cabin"
  },
  {
    title: "GRP Resort Villas & Pods",
    description: "High-end GRP villas crafted for resorts in Wayanad, Munnar, Mysore, Coorg, coastal areas, and private retreats.",
    href: "/products/e7-modular-villa"
  },
  {
    title: "Custom GRP Fabrication",
    description: "Bespoke GRP structures engineered for unique architectural, commercial, or industrial requirements.",
    href: "/products/custom-grp-fabrication"
  },
];

const whyGprPoints = [
    { icon: ShieldCheck, text: "Zero corrosion" },
    { icon: Zap, text: "High ROI" },
    { icon: Wind, text: "Lightweight, high strength" },
    { icon: ShieldCheck, text: "Thermal & electrical insulation" },
    { icon: Sun, text: "UV & monsoon-resistant" },
    { icon: Factory, text: "Decades-long lifecycle" },
    { icon: HardHat, text: "Fast deployment" },
    { icon: CheckCircle, text: "Zero maintenance" }
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
  { title: 'Electrical Enclosures', href: '/products/grp-electrical-enclosure' },
  { title: 'Modular Kiosks', href: '/products/grp-modular-kiosk' },
  { title: 'Portable Toilets', href: '/products/grp-portable-toilet' },
  { title: 'Resort Villas', href: '/products/e7-modular-villa' },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative h-dvh w-full flex items-center justify-center text-left overflow-hidden">
            {heroBgImage && (
              <Image
                src={heroBgImage.imageUrl}
                alt={heroBgImage.description}
                data-ai-hint={heroBgImage.imageHint}
                fill
                className="object-cover"
                quality={100}
              />
            )}
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="container relative grid lg:grid-cols-2 gap-12 items-center px-4 md:px-6 z-20">
            <div className="max-w-3xl">
              <ScrollReveal>
                <h1 className="!leading-tight text-4xl font-bold tracking-tighter text-white shadow-lg sm:text-5xl">
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
                  <Button size="lg" variant="outline" className="text-white border-white bg-transparent hover:bg-white hover:text-primary" asChild>
                    <Link href="/downloads">Download Catalog</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
             <div className="hidden lg:grid place-items-center">
                 <ScrollReveal delay={500}>
                   <GlassCard>
                    <CardHeader>
                        <CardTitle className="text-white">Core Product Lines</CardTitle>
                        <CardDescription className="text-white/80">Explore our engineered solutions.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                            {heroProducts.map((product) => (
                               <Link key={product.href} href={product.href} className="block group">
                                 <div className="p-4 rounded-lg bg-white/10 hover:bg-white/20 border border-transparent transition-colors flex items-center gap-3">
                                   <Box className="w-5 h-5 text-primary" />
                                   <span className="font-semibold text-white group-hover:text-primary transition-colors">{product.title}</span>
                                 </div>
                               </Link>
                            ))}
                        </div>
                    </CardContent>
                   </GlassCard>
                </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION - COLOR */}
        <section id="about" className="py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                    <div>
                        <ScrollReveal>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About EMPHZ</h2>
                            <div className="mt-4 space-y-4 text-muted-foreground md:text-lg">
                                <p>
                                    EMPHZ is a specialized GRP manufacturing company operating out of Mysore with dedicated execution teams across Kerala. We build high-strength, weatherproof, corrosion-resistant GRP enclosures and modular structures designed for industrial, commercial, tourism, and government applications.
                                </p>
                                <p>
                                    We don’t compete with low-end fabricators. We deliver engineered products with predictable quality, repeatable performance, and long-term durability.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                     <ScrollReveal delay={200}>
                        <GlassCard>
                            <CardHeader>
                                <CardTitle>Our Mission</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-muted-foreground">Deliver durable, scalable, and design-forward GRP structures that outperform traditional materials and enable rapid deployment across industries.</p>
                            </CardContent>
                        </GlassCard>
                    </ScrollReveal>
                </div>
            </div>
        </section>

        {/* PRODUCTS SECTION - IMAGE */}
        <section id="products" className="relative py-12 md:py-24 lg:py-32 w-full flex items-center justify-center overflow-hidden">
             {productsBgImage && (
              <Image
                src={productsBgImage.imageUrl}
                alt={productsBgImage.description}
                data-ai-hint={productsBgImage.imageHint}
                fill
                className="object-cover"
                quality={100}
              />
            )}
            <div className="absolute inset-0 bg-black/70 z-10" />
            <div className="container px-4 md:px-6 relative z-20">
                <ScrollReveal>
                    <div className="text-center mb-12 text-white">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Core Product Lines</h2>
                         <p className="mt-4 max-w-3xl mx-auto text-white/80 md:text-lg">
                            From mission-critical electrical enclosures to luxury resort villas, our products are engineered for performance and longevity.
                        </p>
                    </div>
                </ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coreProducts.map((product, i) => (
                        <ScrollReveal key={product.title} delay={i * 100}>
                            <Link href={product.href} className="h-full block">
                                <GlassCard className="flex h-full flex-col group overflow-hidden">
                                    <CardHeader>
                                        <CardTitle className="text-xl transition-colors text-white group-hover:text-primary">{product.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-white/80">{product.description}</CardDescription>
                                    </CardContent>
                                </GlassCard>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
        
        {/* WHY GRP SECTION - COLOR */}
        <section id="why-grp" className="py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                     <ScrollReveal>
                        <div className="text-left">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why GRP? Why EMPHZ?</h2>
                             <p className="mt-4 text-muted-foreground md:text-lg">
                                GRP isn't just a material; it's a long-term strategic advantage. We leverage its inherent strengths with industrial manufacturing to deliver unparalleled value.
                            </p>
                        </div>
                    </ScrollReveal>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
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
             </div>
        </section>

        {/* DELIVERY MODEL SECTION - IMAGE */}
        <section id="delivery-model" className="relative py-12 md:py-24 lg:py-32 w-full flex items-center justify-center overflow-hidden">
             {deliveryBgImage && (
              <Image
                src={deliveryBgImage.imageUrl}
                alt={deliveryBgImage.description}
                data-ai-hint={deliveryBgImage.imageHint}
                fill
                className="object-cover"
                quality={100}
              />
            )}
            <div className="absolute inset-0 bg-black/70 z-10" />
            <div className="container px-4 md:px-6 text-center relative z-20">
                <ScrollReveal>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">South India Delivery Model</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-white/80 md:text-lg">
                        You get manufacturing reliability from our Mysore factory, plus local execution support from our Kerala operations offices.
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
                        <GlassCard>
                            <CardHeader>
                                <CardTitle className="text-white">Factory</CardTitle>
                                <CardDescription className="text-white/80">Mysore (Karnataka)</CardDescription>
                            </CardHeader>
                        </GlassCard>
                         <GlassCard>
                            <CardHeader>
                                <CardTitle className="text-white">Operations Office</CardTitle>
                                <CardDescription className="text-white/80">Kerala (Calicut/Malappuram/Kochi)</CardDescription>
                            </CardHeader>
                        </GlassCard>
                         <GlassCard>
                            <CardHeader>
                                <CardTitle className="text-white">Coverage</CardTitle>
                                <CardDescription className="text-white/80">Entire Kerala + Karnataka + Tamil Nadu</CardDescription>
                            </CardHeader>
                        </GlassCard>
                    </div>
                </ScrollReveal>
            </div>
        </section>

        {/* INDUSTRIES SECTION - COLOR */}
        <section id="industries" className="py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6 text-center">
                 <ScrollReveal>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">Industries We Serve</h2>
                     <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-lg">
                        Our solutions are trusted across a wide range of sectors for their reliability and performance.
                    </p>
                </ScrollReveal>
                 <ScrollReveal delay={200}>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        {industries.map(industry => (
                             <Card key={industry} className="p-4">
                                <span className="font-medium text-card-foreground">{industry}</span>
                            </Card>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>

        {/* CTA SECTION */}
        <section id="cta" className="py-12 md:py-24 lg:py-32 bg-secondary">
             <div className="container px-4 md:px-6 text-center">
                <ScrollReveal>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Build with Confidence. Build with GRP.</h2>
                    <p className="mt-4 max-w-xl mx-auto text-muted-foreground md:text-lg">
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
