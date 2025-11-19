
'use server';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';
import { getFirestore } from '@/firebase/server';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import type { Product } from '@/lib/types';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Download, Box, CheckCircle } from 'lucide-react';
import { ScrollReveal } from '@/components/scroll-reveal';
import type { Metadata, ResolvingMetadata } from 'next'

async function getProduct(slug: string): Promise<Product | null> {
    const firestore = getFirestore();
    const productsRef = collection(firestore, 'products');
    const q = query(productsRef, where("slug", "==", slug), limit(1));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        return null;
    }

    const productDoc = querySnapshot.docs[0];
    return { id: productDoc.id, ...productDoc.data() } as Product;
}

type Props = {
  params: { slug: string }
}
 
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product = await getProduct(params.slug)
 
  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: `${product.name} | EMPHZ`,
    description: product.overview,
    openGraph: {
      images: [product.imageUrls[0], ...previousImages],
    },
  }
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
    const product = await getProduct(params.slug);

    if (!product) {
        notFound();
    }

    return (
        <>
            <SiteHeader />
            <main className="container py-12 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <ScrollReveal>
                        <Carousel className="w-full">
                            <CarouselContent>
                                {product.imageUrls.map((url, index) => (
                                <CarouselItem key={index}>
                                    <div className="aspect-square relative overflow-hidden rounded-lg">
                                    <Image
                                        src={url}
                                        alt={`${product.name} image ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    </div>
                                </CarouselItem>
                                ))}
                            </CarouselContent>
                             <CarouselPrevious className="left-4" />
                            <CarouselNext className="right-4" />
                        </Carousel>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                         <div className="flex flex-col h-full">
                            <Badge variant="outline" className="w-fit">
                                {product.category}
                            </Badge>
                            <h1 className="mt-2 font-headline text-4xl font-bold">{product.name}</h1>

                            <div className="mt-4 flex-grow space-y-6">
                                <div>
                                    <h3 className="font-semibold text-foreground text-lg">Overview</h3>
                                    <p className="mt-1 text-muted-foreground">{product.overview}</p>
                                </div>
                                {product.applications && product.applications.length > 0 && (
                                    <div>
                                        <h3 className="font-semibold text-foreground text-lg">Ideal Applications</h3>
                                        <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground">
                                            {product.applications.map((app) => (
                                                <li key={app} className="flex items-center gap-2 text-sm"><CheckCircle className="h-4 w-4 text-primary" /> {app}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                             <div className="mt-6 flex flex-col gap-2 pt-4 border-t">
                                <div className="flex gap-2">
                                    {product.datasheetUrl && (
                                        <Button asChild className="w-full" variant="outline">
                                            <a href={product.datasheetUrl} download>
                                            <Download className="mr-2 h-4 w-4" />
                                            Datasheet
                                            </a>
                                        </Button>
                                    )}
                                    {product.model3dUrl && (
                                        <Button asChild className="w-full" variant="outline">
                                            <a href={product.model3dUrl} target="_blank" rel="noopener noreferrer">
                                                <Box className="mr-2 h-4 w-4" />
                                                View 3D Model
                                            </a>
                                        </Button>
                                    )}
                                </div>
                                <Button asChild className="w-full">
                                    <Link href="/contact">Request a Quote</Link>
                                </Button>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
                <ScrollReveal className="mt-16" delay={300}>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold font-headline text-center mb-8">Technical Specifications</h2>
                        <Card>
                             <Table>
                                <TableBody>
                                    {Object.entries(product.specifications).map(
                                    ([key, value]) => (
                                        <TableRow key={key}>
                                        <TableCell className="font-medium">{key}</TableCell>
                                        <TableCell>{value}</TableCell>
                                        </TableRow>
                                    )
                                    )}
                                    {product.sizes && product.sizes.length > 0 && (
                                        <TableRow>
                                            <TableCell className="font-medium">Available Sizes</TableCell>
                                            <TableCell>
                                                <div className="flex flex-wrap gap-2">
                                                    {product.sizes.map((size) => (
                                                    <Badge key={size} variant="secondary">
                                                        {size}
                                                    </Badge>
                                                    ))}
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    )}
                                    {product.colors && product.colors.length > 0 && (
                                        <TableRow>
                                            <TableCell className="font-medium">Available Colors</TableCell>
                                            <TableCell>
                                                <div className="flex flex-wrap gap-2">
                                                    {product.colors.map((color) => (
                                                    <Badge key={color} variant="secondary">
                                                        {color}
                                                    </Badge>
                                                    ))}
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>
                </ScrollReveal>
            </main>
            <SiteFooter />
        </>
    );
}
