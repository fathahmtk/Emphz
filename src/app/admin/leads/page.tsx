
'use client';

import { collection, orderBy, query } from 'firebase/firestore';
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
import { formatDistanceToNow } from 'date-fns';
import { cn } from '@/lib/utils';
import { useAuth, useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { type Lead } from '@/lib/types';
import { Timestamp } from 'firebase/firestore';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const priorityColors = {
  high: 'bg-red-500 text-white hover:bg-red-500',
  medium: 'bg-amber-500 text-white hover:bg-amber-500',
  low: 'bg-blue-500 text-white hover:bg-blue-500',
};

export default function AdminLeadsPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const firestore = useFirestore();
  const leadsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'leads'), orderBy('submittedAt', 'desc'));
  }, [firestore]);
  const { data: leads, isLoading: leadsLoading } = useCollection<Lead>(leadsQuery);

  const loading = authLoading || leadsLoading;
  
  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/admin/login');
    }
  }, [user, authLoading, router]);

  const formatSubmissionTime = (timestamp: Timestamp | Date) => {
    if (timestamp instanceof Timestamp) {
      return formatDistanceToNow(timestamp.toDate(), { addSuffix: true });
    }
    // Fallback for Date object, though Firestore will give Timestamp
    return formatDistanceToNow(timestamp, { addSuffix: true });
  };

  return (
    <div className="p-4 md:p-8">
      <Card>
        <CardHeader>
          <CardTitle>Leads</CardTitle>
          <CardDescription>
            Categorized inquiries from the contact form.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contact</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead className="hidden md:table-cell">Submitted</TableHead>
                <TableHead>Inquiry</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center">
                    Loading leads...
                  </TableCell>
                </TableRow>
              )}
              {leads?.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell>
                    <div className="font-medium">{lead.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {lead.email}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{lead.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={cn(priorityColors[lead.priority ?? 'low'])}
                    >
                      {lead.priority}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {formatSubmissionTime(lead.submittedAt)}
                  </TableCell>
                  <TableCell className="max-w-sm truncate">
                    {lead.inquiry}
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
