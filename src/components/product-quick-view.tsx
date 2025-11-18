
'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { type Product } from '@/lib/types';
import Image from 'next/image';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { Download, Box } from 'lucide-react';
import { Table, TableBody, TableCell, TableRow } from './ui/table';

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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <Carousel className="w-full">
              <CarouselContent>
                {product.imageUrls.map((url, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-square relative">
                      <Image
                        src={url}
                        alt={`${product.name} image ${index + 1}`}
                        fill
                        className="rounded-md object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
          <div className="flex flex-col">
            <DialogHeader>
              <Badge variant="outline" className="w-fit">
                {product.category}
              </Badge>
              <DialogTitle className="mt-2 font-headline text-3xl font-bold">
                {product.name}
              </DialogTitle>
            </DialogHeader>

            <div className="mt-4 flex-grow space-y-6 overflow-y-auto pr-2">
              <div>
                <h3 className="font-semibold text-foreground">Overview</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {product.overview}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground">
                  Specifications
                </h3>
                <Table className="mt-2">
                  <TableBody>
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <TableRow key={key}>
                          <TableCell className="font-medium">{key}</TableCell>
                          <TableCell>{value}</TableCell>
                        </TableRow>
                      )
                    )}
                  </TableBody>
                </Table>
              </div>

              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <h3 className="font-semibold text-foreground">Sizes</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <Badge key={size} variant="secondary">
                        {size}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {product.colors && product.colors.length > 0 && (
                 <div>
                  <h3 className="font-semibold text-foreground">Colors</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <Badge key={color} variant="secondary">
                        {color}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 flex flex-col gap-2 pt-4 border-t">
                 <div className="flex gap-2">
                    <Button asChild className="w-full" variant="outline">
                        <a href={product.datasheetUrl || '#'} download>
                        <Download className="mr-2 h-4 w-4" />
                        Datasheet
                        </a>
                    </Button>
                    {product.model3dUrl && (
                        <Button asChild className="w-full" variant="outline">
                            <a href={product.model3dUrl} target="_blank" rel="noopener noreferrer">
                                <Box className="mr-2 h-4 w-4" />
                                View 3D Model
                            </a>
                        </Button>
                    )}
                 </div>
                 <Button asChild className="w-full bg-accent hover:bg-accent/90">
                    <Link href="/contact">Request a Quote</Link>
                </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
