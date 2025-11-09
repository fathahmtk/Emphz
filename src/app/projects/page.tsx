
'use client';
import { useMemo } from 'react';
import { collection, orderBy, query } from 'firebase/firestore';

import { ProjectCard } from '@/components/project-card';
import { ScrollReveal } from '@/components/scroll-reveal';
import { useCollection, useFirestore } from '@/firebase';
import { type Project } from '@/lib/types';

import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Discover our portfolio of successful GRP solution implementations across various industries. See our expertise in action with detailed case studies.',
};

export default function ProjectsPage() {
  const firestore = useFirestore();
  const projectsQuery = useMemo(() => {
    if (!firestore) return;
    return query(collection(firestore, 'projects'), orderBy('title'));
  }, [firestore]);

  const { data: projects } = useCollection<Project>(projectsQuery);

  return (
    <div className="container max-w-7xl px-4 py-12 md:px-6 md:py-20">
      <ScrollReveal>
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
            Project Case Studies
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            From municipal upgrades to complex industrial plants, our GRP
            solutions deliver tangible results.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-12">
        {projects?.map((project, i) => (
          <ScrollReveal key={project.id} delay={i * 200}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
