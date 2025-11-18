
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
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import Link from 'next/link';

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
      <DialogContent className="sm:max-w-4xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="rounded-md object-cover"
            />
          </div>
          <div className='flex flex-col'>
            <DialogHeader>
              <Badge variant="outline" className='w-fit'>{product.category}</Badge>
              <DialogTitle className="text-2xl font-bold font-headline mt-2">
                {product.name}
              </DialogTitle>
              <DialogDescription className="pt-2 text-base">
                {product.overview}
              </DialogDescription>
            </DialogHeader>
            
            <div className="mt-4">
              <h3 className="font-semibold text-foreground">Key Applications</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {product.applications.map((app) => (
                    <Badge key={app} variant="secondary">{app}</Badge>
                ))}
              </div>
            </div>

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
            <div className='flex-grow' />
            <div className="mt-6 flex gap-2">
                <Button asChild className="w-full bg-accent hover:bg-accent/90">
                    <Link href="/contact">Request a Quote</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                    <a href={product.datasheetUrl || '#'} download>Download Datasheet</a>
                </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
