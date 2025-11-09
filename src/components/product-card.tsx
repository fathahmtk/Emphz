
'use client';

import Image from 'next/image';
import { type Product } from '@/lib/types';
import { GlassCard } from './glass-card';
import { CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Eye } from 'lucide-react';
import { useState } from 'react';
import { ProductQuickView } from './product-quick-view';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  return (
    <>
      <GlassCard className="flex h-full flex-col">
        <CardHeader className="p-0">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={product.imageUrl}
              alt={product.name}
              data-ai-hint={product.imageHint}
              fill
              className="rounded-t-lg object-cover"
            />
          </div>
        </CardHeader>
        <CardContent className="flex flex-grow flex-col p-6">
          <CardTitle className="mb-2 text-xl font-headline">
            {product.name}
          </CardTitle>
          <p className="flex-grow text-sm text-muted-foreground">
            {product.description}
          </p>
          <div className="mt-4 flex gap-2">
            <Button
              variant="secondary"
              className="w-full"
              onClick={() => setIsQuickViewOpen(true)}
            >
              <Eye className="mr-2 h-4 w-4" />
              Quick View
            </Button>
          </div>
        </CardContent>
      </GlassCard>
      <ProductQuickView
        product={product}
        isOpen={isQuickViewOpen}
        onOpenChange={setIsQuickViewOpen}
      />
    </>
  );
}
