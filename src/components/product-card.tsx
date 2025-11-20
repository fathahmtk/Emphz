
'use client';

import Image from 'next/image';
import { type Product } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className="h-full block">
      <Card className="flex h-full flex-col group overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:border-primary/30 bg-card">
        <CardHeader className="p-0">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={product.imageUrls[0]}
              alt={product.name}
              data-ai-hint={product.imageHint}
              fill
              className="rounded-t-lg object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </CardHeader>
        <CardContent className="flex flex-grow flex-col p-6">
          <Badge variant="secondary" className='w-fit mb-2'>{product.category}</Badge>
          <CardTitle className="mb-2 text-xl font-headline group-hover:text-primary transition-colors">
            {product.name}
          </CardTitle>
          <p className="flex-grow text-sm text-muted-foreground line-clamp-3">
            {product.overview}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

    