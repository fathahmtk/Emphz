
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
import { type TechnicalDownload } from '@/lib/types';
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
import { Button } from '@/components/ui/button';
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

export default function AdminDownloadsPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const firestore = useFirestore();
  const { toast } = useToast();

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/admin/login');
    }
  }, [user, authLoading, router]);

  const downloadsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'technical_downloads'), orderBy('title'));
  }, [firestore]);
  const { data: downloads, isLoading: downloadsLoading } = useCollection<TechnicalDownload>(downloadsQuery);

  const loading = authLoading || downloadsLoading;

  const handleDelete = async (downloadId: string, downloadTitle: string) => {
    if (!firestore || !user) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Authentication error. Please try again.',
      });
      return;
    }
    if (!window.confirm(`Are you sure you want to delete "${downloadTitle}"?`)) {
      return;
    }
    try {
      await deleteDoc(doc(firestore, 'technical_downloads', downloadId));
      toast({
        title: 'Download Deleted',
        description: `"${downloadTitle}" has been successfully deleted.`,
      });
    } catch (error) {
      console.error('Error deleting download: ', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to delete download. Please try again.',
      });
    }
  };

  return (
    <div className="p-4 md:p-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Technical Downloads</CardTitle>
            <CardDescription>
              Manage your technical documents and brochures.
            </CardDescription>
          </div>
          <Button asChild>
            <Link href="/admin/downloads/new">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Download
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead className="hidden md:table-cell">Description</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading && (
                <TableRow>
                  <TableCell colSpan={3} className="text-center">
                    Loading downloads...
                  </TableCell>
                </TableRow>
              )}
              {downloads?.map((download) => (
                <TableRow key={download.id}>
                  <TableCell className="font-medium">{download.title}</TableCell>
                  <TableCell className="hidden max-w-sm truncate md:table-cell">
                    {download.description}
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
                          <Link href={`/admin/downloads/${download.id}`}>
                            Edit
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDelete(download.id, download.title)}
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
