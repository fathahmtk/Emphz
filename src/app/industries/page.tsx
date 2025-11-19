
'use client';
import { useMemo } from 'react';
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FolderOpen } from "lucide-react";
import { useCollection, useFirestore } from '@/firebase';
import type { Industry } from '@/lib/types';
import { collection, orderBy, query } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';

function IndustrySkeleton() {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-3">
                    <Skeleton className="h-6 w-6 rounded-full" />
                    <Skeleton className="h-6 w-40" />
                </div>
            </CardHeader>
            <CardContent>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4 mt-2" />
            </CardContent>
        </Card>
    );
}


export default function IndustriesPage() {
    const firestore = useFirestore();

    const industriesQuery = useMemo(() => {
        if (!firestore) return null;
        return query(collection(firestore, 'industries'), orderBy('name'));
    }, [firestore]);

    const { data: industries, isLoading } = useCollection<Industry>(industriesQuery);

    return (
        <>
            <SiteHeader />
            <main className="container py-12 md:py-20">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Industries We Serve</h1>
                        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
                           From tourism to critical infrastructure, our GRP solutions are engineered to meet the specific demands of diverse sectors.
                        </p>
                    </div>
                </ScrollReveal>

                {isLoading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Array.from({length: 6}).map((_, i) => <IndustrySkeleton key={i} />)}
                    </div>
                )}

                {!isLoading && industries && industries.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((industry, index) => (
                             <ScrollReveal key={industry.id} delay={index * 100}>
                                <Card className="h-full">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-3 font-headline text-xl">
                                            <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                                            {industry.name}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{industry.description}</p>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                )}
                 {!isLoading && industries?.length === 0 && (
                    <div className="text-center py-16 border-2 border-dashed rounded-lg">
                        <FolderOpen className="mx-auto h-12 w-12 text-muted-foreground" />
                        <h3 className="mt-4 text-lg font-semibold">No Industries to Display</h3>
                        <p className="mt-2 text-sm text-muted-foreground">Industries we serve will be listed here once they are added.</p>
                    </div>
                )}
            </main>
            <SiteFooter />
        </>
    );
}
