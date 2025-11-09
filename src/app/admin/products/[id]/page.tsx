
'use client';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EditProductForm } from './edit-product-form';
import { doc } from 'firebase/firestore';
import { useDoc, useFirestore } from '@/firebase';
import { type Product } from '@/lib/types';

export default function AdminEditProductPage({
  params,
}: {
  params: { id: string };
}) {
  const firestore = useFirestore();
  const productRef = firestore ? doc(firestore, 'products', params.id) : null;
  const { data: product, loading } = useDoc<Product>(productRef);

  if (loading) {
    return (
      <div className="p-4 md:p-8">
        <p>Loading product...</p>
      </div>
    );
  }

  if (!product) {
    notFound();
  }

  return (
    <div className="p-4 md:p-8">
      <div className="mb-8 flex items-center gap-4">
        <Button variant="outline" size="icon" className="h-7 w-7" asChild>
          <Link href="/admin/products">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
          {product.name}
        </h1>
      </div>
      <EditProductForm product={product} />
    </div>
  );
}
