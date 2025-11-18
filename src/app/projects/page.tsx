
'use client';
import Image from 'next/image';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';
import { collection, orderBy, query } from 'firebase/firestore';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { type Project } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';


function ProjectSkeleton() {
    return (
        <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-6 md:p-8 flex flex-col justify-center">
                    <Skeleton className="h-6 w-1/4 mb-2" />
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-5 w-1/2 mt-2" />
                    <Skeleton className="h-4 w-full mt-4" />
                    <Skeleton className="h-4 w-full mt-2" />
                    <Skeleton className="h-4 w-5/6 mt-2" />
                </div>
                <div className="grid grid-cols-2 gap-2 p-4">
                    <Skeleton className="h-full min-h-[250px] rounded-md" />
                    <Skeleton className="h-full min-h-[250px] rounded-md" />
                </div>
            </div>
        </Card>
    );
}


export default function ProjectsPage() {
  const firestore = useFirestore();

  const projectsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'project_case_studies'), orderBy('title'));
  }, [firestore]);
  const { data: projects, isLoading } = useCollection<Project>(projectsQuery);

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="container px-4 py-12 md:px-6 md:py-20">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
                Project Portfolio
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-lg">
                Showcasing our capabilities in government projects, utility installations, smart city deployments, and custom corporate builds.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-16">
            {isLoading && (
                 <>
                    <ProjectSkeleton />
                    <ProjectSkeleton />
                    <ProjectSkeleton />
                </>
            )}
            {projects?.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 150}>
                <Card className="overflow-hidden">
                   <div className="grid grid-cols-1 lg:grid-cols-2">
                     <div className="p-6 md:p-8 flex flex-col justify-center">
                       <Badge variant="secondary" className="mb-2 w-fit">{project.clientType}</Badge>
                       <h2 className="text-2xl font-bold font-headline">{project.title}</h2>
                       <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                          <MapPin className="h-4 w-4" />
                          <span>{project.location}</span>
                       </div>
                       <p className="text-muted-foreground mt-4">{project.details}</p>
                     </div>
                      <div className="grid grid-cols-2 gap-2 p-4">
                         <div className="relative min-h-[250px] lg:min-h-0">
                           <Image
                            src={project.beforeImageUrl}
                            alt={`Before image for ${project.title}`}
                            data-ai-hint="old infrastructure"
                            fill
                            className="object-cover rounded-md"
                            sizes="(max-width: 1024px) 50vw, 25vw"
                            />
                            <Badge variant="destructive" className="absolute top-2 left-2">Before</Badge>
                        </div>
                         <div className="relative min-h-[250px] lg:min-h-0">
                           <Image
                            src={project.afterImageUrl}
                            alt={`After image for ${project.title}`}
                            data-ai-hint="new infrastructure"
                            fill
                            className="object-cover rounded-md"
                            sizes="(max-width: 1024px) 50vw, 25vw"
                            />
                            <Badge className="absolute top-2 left-2 bg-green-600 hover:bg-green-700">After</Badge>
                        </div>
                      </div>
                   </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
