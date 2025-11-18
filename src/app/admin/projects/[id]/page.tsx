
'use client';

import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { doc } from 'firebase/firestore';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { EditProjectForm } from './edit-project-form';
import { useDoc, useFirestore, useMemoFirebase } from '@/firebase';
import { type Project } from '@/lib/types';
import { useAuth } from '@/firebase/auth/use-user';

export default function AdminEditProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const firestore = useFirestore();

  const isNewProject = params.id === 'new';

  const projectRef = useMemoFirebase(() => {
    if (authLoading || isNewProject) return null;
    return firestore ? doc(firestore, 'projects', params.id) : null
  }, [firestore, params.id, authLoading, isNewProject]);

  const { data: project, loading: projectLoading } = useDoc<Project>(projectRef);
  
  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/admin/login');
    }
  }, [user, authLoading, router]);

  const loading = authLoading || (!isNewProject && projectLoading);
  
  if (loading) {
    return (
      <div className="p-4 md:p-8">
        <p>Loading project...</p>
      </div>
    );
  }

  if (!isNewProject && !project) {
    notFound();
  }
  
  const projectData: Project = isNewProject ? {
    id: 'new',
    title: 'New Project',
    description: '',
    clientType: '',
    location: '',
    beforeImageUrl: '',
    beforeImageHint: '',
    afterImageUrl: '',
    afterImageHint: '',
  } : project!;

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
          {projectData.title}
        </h1>
      </div>
      <EditProjectForm project={projectData} />
    </div>
  );
}
