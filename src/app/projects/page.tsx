
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


export default function ProjectsPage() {
  const firestore = useFirestore();

  const projectsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'projects'), orderBy('title'));
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
            {isLoading && <p className="text-center">Loading projects...</p>}
            {projects?.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 150}>
                <Card className="overflow-hidden">
                   <div className="grid grid-cols-1 lg:grid-cols-2">
                     <div className="relative min-h-[300px] lg:min-h-0">
                       <Image
                        src={project.imageUrl}
                        alt={project.title}
                        data-ai-hint={project.imageHint}
                        fill
                        className="object-cover"
                        />
                    </div>
                     <div className="p-6 md:p-8">
                       <Badge variant="secondary" className="mb-2">{project.clientType}</Badge>
                       <h2 className="text-2xl font-bold font-headline">{project.title}</h2>
                       <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                          <MapPin className="h-4 w-4" />
                          <span>{project.location}</span>
                       </div>
                       <div className="mt-6">
                         <p className="text-muted-foreground mt-1">{project.description}</p>
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
