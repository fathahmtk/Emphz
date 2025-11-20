
'use client';
import { useMemo, useState, useEffect } from 'react';
import { collection, query, orderBy, where } from 'firebase/firestore';

import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { ScrollReveal } from '@/components/scroll-reveal';
import { useCollection, useFirestore } from '@/firebase';
import type { Product } from '@/lib/types';
import { ProductCard } from '@/components/product-card';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { FolderOpen } from 'lucide-react';

function ProductSkeleton() {
    return (
        <div className="flex flex-col gap-4">
            <Skeleton className="aspect-[4/3] w-full" />
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-10 w-full mt-2" />
        </div>
    )
}

export default function ProductsPage() {
    const firestore = useFirestore();
    const [activeCategory, setActiveCategory] = useState('All');
    const [productCategories, setProductCategories] = useState<string[]>(['All']);
    
    const allProductsQuery = useMemo(() => {
        if (!firestore) return null;
        return query(collection(firestore, 'products'), orderBy('category'));
    }, [firestore]);

    const { data: allProducts, isLoading: isLoadingAllProducts } = useCollection<Product>(allProductsQuery);

    useEffect(() => {
        if (allProducts) {
            const categories = ['All', ...Array.from(new Set(allProducts.map(p => p.category)))];
            setProductCategories(categories);
        }
    }, [allProducts]);

    const productsQuery = useMemo(() => {
        if (!firestore) return null;
        const productsCollection = collection(firestore, 'products');

        if (activeCategory === 'All') {
            return query(productsCollection, orderBy('name'));
        }

        return query(
            productsCollection, 
            where('category', '==', activeCategory),
            orderBy('name')
        );
    }, [firestore, activeCategory]);

    const { data: products, isLoading } = useCollection<Product>(productsQuery);
    
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="container px-4 py-12 md:px-6 md:py-20">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
                Product Catalog
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-lg">
                Explore our full range of GRP/FRP enclosures, kiosks, cabins, and modular structures engineered for the demanding conditions of South India.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {(isLoadingAllProducts && productCategories.length <= 1) ? (
                Array.from({length: 4}).map((_, i) => <Skeleton key={i} className="h-10 w-24" />)
            ) : (
                productCategories.map(category => (
                <Button 
                    key={category} 
                    variant={activeCategory === category ? 'default' : 'outline'}
                    onClick={() => setActiveCategory(category)}
                    className={cn('transition-all', activeCategory !== category && "bg-background/50 text-foreground/80")}
                >
                    {category}
                </Button>
                ))
            )}
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {isLoading && Array.from({length: 8}).map((_, i) => <ProductSkeleton key={i} />)}
            {products?.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 50}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
            {!isLoading && products?.length === 0 && (
                <div className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 text-center py-16 border-2 border-dashed rounded-lg">
                    <FolderOpen className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-semibold">No Products Found</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                        There are no products in the "{activeCategory}" category.
                    </p>
                    <Button variant="outline" className="mt-6" onClick={() => setActiveCategory('All')}>
                        View All Products
                    </Button>
                </div>
            )}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

    