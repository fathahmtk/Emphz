
'use client';
import { useMemo } from 'react';
import Image from 'next/image';
import { collection, orderBy, query } from 'firebase/firestore';

import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { ScrollReveal } from '@/components/scroll-reveal';
import { useCollection, useFirestore } from '@/firebase';
import type { ProjectCaseStudy } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { FolderOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function ProjectSkeleton() {
    return (
        <Card className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <Skeleton className="h-64 w-full" />
                <Skeleton className="h-64 w-full" />
            </div>
            <CardHeader>
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-1/2 mt-2" />
            </CardHeader>
            <CardContent>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full mt-2" />
                <Skeleton className="h-4 w-5/6 mt-2" />
            </CardContent>
        </Card>
    )
}


export default function ProjectsPage() {
    const firestore = useFirestore();

    const projectsQuery = useMemo(() => {
        if (!firestore) return null;
        return query(collection(firestore, 'project_case_studies'), orderBy('title'));
    }, [firestore]);

    const { data: projects, isLoading } = useCollection<ProjectCaseStudy>(projectsQuery);

    return (
        <>
            <SiteHeader />
            <main className="container py-12 md:py-20">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Case Studies</h1>
                        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
                           Real-world examples of how EMPHZ solutions deliver durability, performance, and value.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="space-y-12">
                    {isLoading && Array.from({length: 2}).map((_,i) => <ProjectSkeleton key={i} />)}

                    {!isLoading && projects && projects.length > 0 && projects.map((project, index) => (
                        <ScrollReveal key={project.id} delay={index * 150}>
                            <Card className="overflow-hidden">
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                     <div className="relative min-h-[300px]">
                                        <Image
                                            src={project.beforeImageUrl}
                                            alt={`Before image for ${project.title}`}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className="absolute bottom-2 left-2 bg-destructive/80 text-destructive-foreground px-3 py-1 rounded-md text-sm font-semibold">BEFORE</div>
                                    </div>
                                     <div className="relative min-h-[300px]">
                                        <Image
                                            src={project.afterImageUrl}
                                            alt={`After image for ${project.title}`}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                         <div className="absolute bottom-2 left-2 bg-primary/80 text-primary-foreground px-3 py-1 rounded-md text-sm font-semibold">AFTER</div>
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                                    <CardDescription>{project.clientType} | {project.location}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{project.details}</p>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    ))}

                    {!isLoading && projects?.length === 0 && (
                        <div className="text-center py-16 border-2 border-dashed rounded-lg">
                            <FolderOpen className="mx-auto h-12 w-12 text-muted-foreground" />
                            <h3 className="mt-4 text-lg font-semibold">No Case Studies Yet</h3>
                            <p className="mt-2 text-sm text-muted-foreground">Our project case studies will be showcased here as they are published.</p>
                             <Button asChild variant="link" className="mt-4">
                                <Link href="/contact">Inquire About Our Projects</Link>
                            </Button>
                        </div>
                    )}
                </div>

            </main>
            <SiteFooter />
        </>
    );
}
