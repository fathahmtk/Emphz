
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Factory, HardHat, ShieldCheck } from 'lucide-react';
import { collection, orderBy, query, limit } from 'firebase/firestore';

import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product-card';
import { ScrollReveal } from '@/components/scroll-reveal';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { type Product, type Project } from '@/lib/types';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { ProjectCard } from '@/components/project-card';

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
  { name: 'ISO 9001:2015', description: 'Quality Management Systems' },
  { name: 'ISO 14001:2015', description: 'Environmental Management' },
  { name: 'IP65 Certified', description: 'Ingress Protection Rating' },
  { name: 'Govt. Approved Vendor', description: 'Public Works Dept.' },
]

export default function Home() {
  const firestore = useFirestore();

  const productsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'products'), orderBy('name'), limit(3));
  }, [firestore]);
  const { data: products } = useCollection<Product>(productsQuery);
  
  const projectsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'project_case_studies'), orderBy('title'), limit(3));
  }, [firestore]);
  const { data: projects } = useCollection<Project>(projectsQuery);


  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="relative h-dvh w-full flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0">
            {heroImage && 
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                fill
                className="object-cover"
                priority
              />
            }
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container relative px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-primary-foreground">
              <ScrollReveal>
                <h1 className="!leading-tight text-4xl font-bold font-headline tracking-tighter text-white shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
                  Premier GRP Engineering & Modular Infrastructure
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="mt-6 text-lg text-foreground/80 md:text-xl">
                  Manufacturing smart urban solutions and high-performance industrial components.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button size="lg" asChild className="group bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/contact">
                      Request Specification Pack
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="secondary" asChild>
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
                  <div className="text-center">
                    <div className="mb-4 inline-flex items-center justify-center rounded-md bg-primary p-3 text-primary-foreground">
                      <pillar.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold font-headline">{pillar.title}</h3>
                    <p className="mt-2 text-muted-foreground">{pillar.description}</p>
                  </div>
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
        
        <section
          id="projects"
          className="w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Project Showcase
                  </div>
                  <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
                    Proven in the Field
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    See how our GRP solutions perform in demanding real-world applications across various industries.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="mx-auto mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects?.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="mt-12 text-center">
                <Button size="lg" asChild className="group">
                  <Link href="/projects">
                    <span>
                      View All Projects
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>


        <section id="trust-layer" className="w-full bg-secondary/30 py-12 md:py-24 lg:py-32">
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
              <Card className="mt-12">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
                    {trustBadges.map((badge) => (
                      <div key={badge.name} className="text-center">
                        <p className="font-semibold text-primary">{badge.name}</p>
                        <p className="text-sm text-muted-foreground">{badge.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
