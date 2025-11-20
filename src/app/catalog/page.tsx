'use client';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import Image from 'next/image';

import { useFirestore } from '@/firebase';
import type { Product } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Logo } from '@/components/icons';
import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

async function getProducts(firestore: ReturnType<typeof useFirestore>) {
    if (!firestore) return [];
    const productsRef = collection(firestore, 'products');
    const q = query(productsRef, orderBy('name'));
    const querySnapshot = await getDocs(q);

    const products: Product[] = [];
    querySnapshot.forEach(doc => {
        products.push({ id: doc.id, ...doc.data() } as Product);
    });

    return products;
}

export default function CatalogPage() {
    const firestore = useFirestore();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getProducts(firestore).then(setProducts);
    }, [firestore]);


    return (
        <>
            <div className="print-hide">
                <SiteHeader />
            </div>
            <main className="bg-background">
                <header className="print-hide container py-12 text-center">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                        Master Product Catalog
                    </h1>
                    <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-lg">
                        A complete overview of our engineered GRP solutions. This page is optimized for printing.
                    </p>
                    <Button onClick={() => window.print()} className="mt-6">
                        <Printer className="mr-2 h-4 w-4" />
                        Print Catalog
                    </Button>
                </header>

                <div className="container mx-auto p-4 sm:p-8 print:p-0">
                    {/* Print Header */}
                    <div className="hidden print:block mb-8">
                         <div className="flex justify-between items-center pb-4 border-b">
                            <Logo className="h-12 w-auto" />
                            <div className='text-right'>
                                <h1 className="text-2xl font-bold">Master Product Catalog</h1>
                                <p className="text-muted-foreground text-sm">EMPHZ - Engineered GRP Solutions</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        {products.map((product, index) => (
                            <ScrollReveal
                                key={product.id}
                                delay={index * 100}
                                className="p-8 border rounded-lg bg-card page-break"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="flex flex-col">
                                        <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                                            <Image
                                                src={product.imageUrls[0]}
                                                alt={product.name}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Badge variant="secondary" className="mb-2">{product.category}</Badge>
                                        <h2 className="text-3xl font-bold">{product.name}</h2>
                                        <p className="mt-2 text-muted-foreground">{product.overview}</p>
                                        <Link href={`/products/${product.slug}`} className="text-sm text-primary hover:underline print-hide mt-2 block">
                                            View product page &rarr;
                                        </Link>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
                                    <Table>
                                        <TableBody>
                                            {Object.entries(product.specifications).map(([key, value]) => (
                                                <TableRow key={key}>
                                                    <TableCell className="font-medium w-1/3">{key}</TableCell>
                                                    <TableCell>{value}</TableCell>
                                                </TableRow>
                                            ))}
                                             {product.sizes && product.sizes.length > 0 && (
                                                <TableRow>
                                                    <TableCell className="font-medium">Available Sizes</TableCell>
                                                    <TableCell>
                                                        <div className="flex flex-wrap gap-2">
                                                            {product.sizes.map((size) => (
                                                            <Badge key={size} variant="outline">
                                                                {size}
                                                            </Badge>
                                                            ))}
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            )}
                                        </TableBody>
                                    </Table>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* Print Footer */}
                    <div className="hidden print:block mt-8 pt-4 border-t text-center text-xs text-muted-foreground">
                        <p>© {new Date().getFullYear()} EMPHZ Solutions Inc. All Rights Reserved. | sales@emphz.com</p>
                        <p>This document is for informational purposes only. Specifications are subject to change without notice.</p>
                    </div>
                </div>
            </main>
            <div className="print-hide">
                <SiteFooter />
            </div>
        </>
    );
}
