
'use client';
import { useMemo } from 'react';
import { collection, orderBy, query } from 'firebase/firestore';

import { ProductCard } from '@/components/product-card';
import { ScrollReveal } from '@/components/scroll-reveal';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { type Product } from '@/lib/types';
import { type Metadata } from 'next';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Explore our comprehensive catalog of Glass Reinforced Plastic (GRP) products, including pipes, tanks, fittings, and custom-molded solutions.',
};

export default function ProductsPage() {
  const firestore = useFirestore();
  const productsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'products'), orderBy('name'));
  }, [firestore]);

  const { data: products } = useCollection<Product>(productsQuery);

  const categories = useMemo(() => {
    if (!products) return [];
    return [...new Set(products.map((p) => p.category))];
  }, [products]);

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="container max-w-7xl px-4 py-12 md:px-6 md:py-20">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
                Our Products
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
                High-quality GRP solutions engineered for durability and performance
                in any environment.
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
