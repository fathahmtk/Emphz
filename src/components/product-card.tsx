
'use client';

import Image from 'next/image';
import { type Product } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Eye } from 'lucide-react';
import { useState } from 'react';
import { ProductQuickView } from './product-quick-view';
import { Badge } from './ui/badge';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  return (
    <>
      <Card className="flex h-full flex-col group overflow-hidden">
        <CardHeader className="p-0">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={product.imageUrl}
              alt={product.name}
              data-ai-hint={product.imageHint}
              fill
              className="rounded-t-lg object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </CardHeader>
        <CardContent className="flex flex-grow flex-col p-6">
          <Badge variant="secondary" className='w-fit mb-2'>{product.category}</Badge>
          <CardTitle className="mb-2 text-xl font-headline">
            {product.name}
          </CardTitle>
          <p className="flex-grow text-sm text-muted-foreground line-clamp-3">
            {product.overview}
          </p>
          <div className="mt-4 flex gap-2">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setIsQuickViewOpen(true)}
            >
              <Eye className="mr-2 h-4 w-4" />
              Quick View
            </Button>
          </div>
        </CardContent>
      </Card>
      <ProductQuickView
        product={product}
        isOpen={isQuickViewOpen}
        onOpenChange={setIsQuickViewOpen}
      />
    </>
  );
}
