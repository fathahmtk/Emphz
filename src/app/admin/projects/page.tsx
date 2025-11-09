
'use client';

import Link from 'next/link';
import {
  collection,
  deleteDoc,
  doc,
  orderBy,
  query,
} from 'firebase/firestore';
import { useAuth, useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { type Project } from '@/lib/types';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { MoreHorizontal, PlusCircle } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminProjectsPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const firestore = useFirestore();
  const { toast } = useToast();

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/admin/login');
    }
  }, [user, authLoading, router]);

  const projectsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'projects'), orderBy('title'));
  }, [firestore]);
  const { data: projects, isLoading: projectsLoading } = useCollection<Project>(projectsQuery);

  const loading = authLoading || projectsLoading;

  const handleDelete = async (projectId: string, projectTitle: string) => {
    if (!firestore || !user) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Authentication error. Please try again.',
      });
      return;
    }
    if (!window.confirm(`Are you sure you want to delete "${projectTitle}"?`)) {
      return;
    }
    try {
      await deleteDoc(doc(firestore, 'projects', projectId));
      toast({
        title: 'Project Deleted',
        description: `"${projectTitle}" has been successfully deleted.`,
      });
    } catch (error) {
      console.error('Error deleting project: ', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to delete project. Please try again.',
      });
    }
  };

  return (
    <div className="p-4 md:p-8">
      <Card>
        <CardHeader className='flex flex-row items-center justify-between'>
          <div>
            <CardTitle>Projects</CardTitle>
            <CardDescription>Manage your project case studies.</CardDescription>
          </div>
          <Button asChild>
            <Link href="/admin/projects/new">
                <PlusCircle className="mr-2 h-4 w-4"/>
                Add Project
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Client Type</TableHead>
                <TableHead className="hidden md:table-cell">Location</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading && (
                <TableRow>
                  <TableCell colSpan={4} className="text-center">
                    Loading projects...
                  </TableCell>
                </TableRow>
              )}
              {projects?.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium">{project.title}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{project.clientType}</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {project.location}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem asChild>
                          <Link href={`/admin/projects/${project.id}`}>
                            Edit
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            handleDelete(project.id, project.title)
                          }
                          className="text-destructive"
                        >
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
