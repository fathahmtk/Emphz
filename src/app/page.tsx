
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useMemo } from 'react';
import { collection, orderBy, query } from 'firebase/firestore';

import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product-card';
import { ProjectCard } from '@/components/project-card';
import { ScrollReveal } from '@/components/scroll-reveal';
import { useCollection, useFirestore } from '@/firebase';
import { type Product, type Project } from '@/lib/types';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

export default function Home() {
  const firestore = useFirestore();

  const productsQuery = useMemo(() => {
    if (!firestore) return;
    return query(collection(firestore, 'products'), orderBy('name'));
  }, [firestore]);
  const { data: products } = useCollection<Product>(productsQuery);

  const projectsQuery = useMemo(() => {
    if (!firestore) return;
    return query(collection(firestore, 'projects'), orderBy('title'));
  }, [firestore]);
  const { data: projects } = useCollection<Project>(projectsQuery);

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="relative h-dvh w-full flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://picsum.photos/seed/herobg/1920/1080"
              alt="Industrial background"
              data-ai-hint="industrial design"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container relative max-w-7xl px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-primary-foreground">
              <ScrollReveal>
                <h1 className="!leading-tight text-4xl font-bold font-headline tracking-tighter text-white shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
                  Engineered GRP Solutions
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="mt-6 text-lg text-foreground/80 md:text-xl">
                  High-performance products for demanding environments.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button size="lg" asChild className="group">
                    <Link href="/products">
                      Explore Products
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section
          id="products"
          className="w-full bg-secondary/30 py-12 md:py-24 lg:py-32"
        >
          <div className="container max-w-7xl px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                    Our Products
                  </div>
                  <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
                    Dynamic Product Catalog
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Engineered for performance and reliability.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="mx-auto mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                {products?.slice(0, 2).map((product) => (
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

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-7xl px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                    Case Studies
                  </div>
                  <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
                    Proven in the Field
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our GRP solutions solve real-world challenges.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="mx-auto mt-12 grid grid-cols-1 gap-8">
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
      </main>
      <SiteFooter />
    </>
  );
}
