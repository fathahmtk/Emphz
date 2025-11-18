
'use client';

import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { doc } from 'firebase/firestore';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { EditDownloadForm } from './edit-download-form';
import { useDoc, useFirestore, useMemoFirebase } from '@/firebase';
import { type TechnicalDownload } from '@/lib/types';
import { useAuth } from '@/firebase/auth/use-user';

export default function AdminEditDownloadPage({
  params,
}: {
  params: { id: string };
}) {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const firestore = useFirestore();

  const isNew = params.id === 'new';

  const downloadRef = useMemoFirebase(() => {
    if (authLoading || isNew) return null;
    return firestore ? doc(firestore, 'technical_downloads', params.id) : null
  }, [firestore, params.id, authLoading, isNew]);

  const { data: download, loading: downloadLoading } = useDoc<TechnicalDownload>(downloadRef);
  
  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/admin/login');
    }
  }, [user, authLoading, router]);

  const loading = authLoading || (!isNew && downloadLoading);
  
  if (loading) {
    return (
      <div className="p-4 md:p-8">
        <p>Loading document...</p>
      </div>
    );
  }

  if (!isNew && !download) {
    notFound();
  }
  
  const downloadData: TechnicalDownload = isNew ? {
    id: 'new',
    title: 'New Document',
    description: '',
    fileUrl: '',
  } : download!;

  return (
    <div className="p-4 md:p-8">
      <div className="mb-8 flex items-center gap-4">
        <Button variant="outline" size="icon" className="h-7 w-7" asChild>
          <Link href="/admin/downloads">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
          {downloadData.title}
        </h1>
      </div>
      <EditDownloadForm download={downloadData} />
    </div>
  );
}
