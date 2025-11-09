
'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { type Product } from '@/lib/types';
import Image from 'next/image';

interface ProductQuickViewProps {
  product: Product;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function ProductQuickView({
  product,
  isOpen,
  onOpenChange,
}: ProductQuickViewProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="rounded-md object-cover"
            />
          </div>
          <div>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold font-headline">
                {product.name}
              </DialogTitle>
              <DialogDescription className="pt-2">
                {product.description}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <h3 className="font-semibold text-foreground">Specifications</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <li key={key}>
                    <span className="font-medium text-foreground/80">
                      {key}:
                    </span>{' '}
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
