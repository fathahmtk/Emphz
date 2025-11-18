'use client';
import { useMemo } from 'react';
import { collection, orderBy, query } from 'firebase/firestore';

import { ProductCard } from '@/components/product-card';
import { ScrollReveal } from '@/components/scroll-reveal';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { type Product } from '@/lib/types';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

export default function ProductsPage() {
  const firestore = useFirestore();
  const productsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'products'), orderBy('name'));
  }, [firestore]);

  const { data: products } = useCollection<Product>(productsQuery);

  const categories = useMemo(() => {
    if (!products) return [];
    const categoryOrder = [
        "GRP Electrical Enclosures",
        "GRP Portable Toilets",
        "GRP Kiosks & Booths",
        "Modular Smart Units",
        "GRP Cabins & Micro-Villa Pods",
        "Industrial Custom GRP Solutions",
        "GRP Bus Shelters & Urban Furniture"
    ];
    const uniqueCategories = [...new Set(products.map((p) => p.category))];
    return uniqueCategories.sort((a, b) => {
        const indexA = categoryOrder.indexOf(a);
        const indexB = categoryOrder.indexOf(b);
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;
        return indexA - indexB;
    });
  }, [products]);

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
                Engineered GRP solutions for power, urban infrastructure, telecom, and more. Durable, compliant, and built for performance.
              </p>
            </div>
          </ScrollReveal>

          {categories.map((category, i) => (
            <section
              key={category}
              id={category.toLowerCase().replace(/\s+/g, '-')}
              className="mb-16 scroll-mt-20"
            >
              <ScrollReveal delay={i * 100}>
                <h2 className="mb-8 border-l-4 border-accent pl-4 text-2xl font-bold font-headline tracking-tight sm:text-3xl">
                  {category}
                </h2>
              </ScrollReveal>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {products
                  ?.filter((p) => p.category === category)
                  .map((product, j) => (
                    <ScrollReveal
                      key={product.id}
                      delay={i * 100 + (j + 1) * 150}
                    >
                      <ProductCard product={product} />
                    </ScrollReveal>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
