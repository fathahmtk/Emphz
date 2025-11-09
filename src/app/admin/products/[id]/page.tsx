
'use client';
import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EditProductForm } from './edit-product-form';
import { doc } from 'firebase/firestore';
import { useDoc, useFirestore, useMemoFirebase } from '@/firebase';
import { type Product } from '@/lib/types';
import { useAuth } from '@/firebase/auth/use-user';
import { useEffect } from 'react';

export default function AdminEditProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const firestore = useFirestore();

  const isNewProduct = params.id === 'new';

  const productRef = useMemoFirebase(() => {
    if (authLoading || isNewProduct) return null;
    return firestore ? doc(firestore, 'products', params.id) : null
  }, [firestore, params.id, authLoading, isNewProduct]);
  
  const { data: product, loading: productLoading } = useDoc<Product>(productRef);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/admin/login');
    }
  }, [user, authLoading, router]);

  const loading = authLoading || (!isNewProduct && productLoading);

  if (loading) {
    return (
      <div className="p-4 md:p-8">
        <p>Loading...</p>
      </div>
    );
  }

  if (!isNewProduct && !product) {
    notFound();
  }

  const productData = isNewProduct ? {
    id: 'new',
    name: 'New Product',
    description: '',
    specifications: {},
    imageUrl: '',
    imageHint: '',
    category: '',
  } : product!;


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
          {productData.name}
        </h1>
      </div>
      <EditProductForm product={productData} />
    </div>
  );
}
