
'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { doc } from 'firebase/firestore';

import { Button } from '@/components/ui/button';
import { EditProjectForm } from './edit-project-form';
import { useDoc, useFirestore } from '@/firebase';
import { type Project } from '@/lib/types';

export default function AdminEditProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const firestore = useFirestore();
  const projectRef = firestore ? doc(firestore, 'projects', params.id) : null;
  const { data: project, loading } = useDoc<Project>(projectRef);

  if (loading) {
    return (
      <div className="p-4 md:p-8">
        <p>Loading project...</p>
      </div>
    );
  }

  if (!project) {
    notFound();
  }

  return (
    <div className="p-4 md:p-8">
      <div className="mb-8 flex items-center gap-4">
        <Button variant="outline" size="icon" className="h-7 w-7" asChild>
          <Link href="/admin/projects">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
          {project.title}
        </h1>
      </div>
      <EditProjectForm project={project} />
    </div>
  );
}
