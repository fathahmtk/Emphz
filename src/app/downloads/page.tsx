
'use client';
import { useMemo } from 'react';
import Link from 'next/link';
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useCollection, useFirestore } from '@/firebase';
import type { TechnicalDownload } from '@/lib/types';
import { collection, orderBy, query } from 'firebase/firestore';
import { Download, FileText, FolderOpen, BookOpen } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Skeleton } from '@/components/ui/skeleton';

function DownloadSkeleton() {
    return (
        <Card>
            <div className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                    <Skeleton className="w-8 h-8"/>
                    <div>
                        <Skeleton className="h-6 w-48 mb-2" />
                        <Skeleton className="h-4 w-64" />
                    </div>
                </div>
                <Skeleton className="h-10 w-28" />
            </div>
        </Card>
    );
}


export default function DownloadsPage() {
    const firestore = useFirestore();

    const downloadsQuery = useMemo(() => {
        if (!firestore) return null;
        return query(collection(firestore, 'technical_downloads'), orderBy('name'));
    }, [firestore]);

    const { data: downloads, isLoading } = useCollection<TechnicalDownload>(downloadsQuery);

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-12 md:py-20">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Technical Downloads</h1>
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
                Access our library of technical resources, datasheets, and our complete product catalog.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
             <Card className="mb-8 border-primary/50 bg-primary/5">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-primary"/>
                        Master Product Catalog
                    </CardTitle>
                    <CardDescription>
                        View our complete, up-to-date product catalog in a single, print-friendly page.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button asChild>
                        <Link href="/catalog">View Master Catalog</Link>
                    </Button>
                </CardContent>
             </Card>


            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-headline mt-12">Individual Documents</h2>
              {isLoading && Array.from({length: 4}).map((_, i) => <DownloadSkeleton key={i} />)}
              
              {!isLoading && downloads && downloads.length > 0 && downloads.map((item) => (
                <Card key={item.id}>
                  <div className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-4">
                      <FileText className="w-8 h-8 text-primary"/>
                      <div>
                        <CardTitle>{item.name}</CardTitle>
                        <CardDescription className="mt-1">{item.description}</CardDescription>
                      </div>
                    </div>
                    <Button asChild variant="outline">
                      <a href={item.fileUrl} download target="_blank">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}

              {!isLoading && downloads?.length === 0 && (
                <div className="text-center py-16 border-2 border-dashed rounded-lg">
                    <FolderOpen className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-semibold">No Documents Available</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Technical documents and datasheets will appear here when they are added.</p>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
