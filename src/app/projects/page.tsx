
'use client';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useCollection, useFirestore } from '@/firebase';
import type { ProjectCaseStudy } from '@/lib/types';
import { collection, orderBy, query } from 'firebase/firestore';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Users, MapPin } from 'lucide-react';
import { useMemo } from 'react';

function CaseStudyCard({ project }: { project: ProjectCaseStudy }) {
    return (
        <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
                <div className="relative aspect-video">
                    <Image src={project.beforeImageUrl} alt={`Before image for ${project.title}`} fill className="object-cover" />
                     <Badge className="absolute top-2 left-2" variant="destructive">Before</Badge>
                </div>
                <div className="relative aspect-video">
                    <Image src={project.afterImageUrl} alt={`After image for ${project.title}`} fill className="object-cover" />
                    <Badge className="absolute top-2 left-2" variant="default">After</Badge>
                </div>
            </div>
            <CardHeader>
                <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{project.details}</CardDescription>
                <Separator className="my-4" />
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{project.clientType}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                         <span>{project.location}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}


export default function ProjectsPage() {
  const firestore = useFirestore();

  const projectsQuery = useMemo(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'project_case_studies'), orderBy('title'));
  }, [firestore]);

  const { data: projects } = useCollection<ProjectCaseStudy>(projectsQuery);

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="container px-4 py-12 md:px-6 md:py-20">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
                Project Case Studies
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-lg">
                See how EMPHZ's GRP solutions solve real-world challenges in durability, safety, and operational efficiency across various industries. Our case studies highlight the tangible benefits of replacing traditional materials with advanced composite systems.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto max-w-5xl space-y-12">
            {projects?.map((project, i) => (
                <ScrollReveal key={project.id} delay={i * 200}>
                    <CaseStudyCard project={project} />
                </ScrollReveal>
            ))}
          </div>

        </div>
      </main>
      <SiteFooter />
    </>
  );
}
