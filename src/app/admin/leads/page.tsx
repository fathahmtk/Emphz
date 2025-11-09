import { leads } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from 'date-fns';
import { cn } from "@/lib/utils";

const priorityColors = {
    high: "bg-red-500 hover:bg-red-500 text-white",
    medium: "bg-amber-500 hover:bg-amber-500 text-white",
    low: "bg-blue-500 hover:bg-blue-500 text-white",
}

export default function AdminLeadsPage() {
  return (
    <div className="p-4 md:p-8">
      <Card>
        <CardHeader>
          <CardTitle>Leads</CardTitle>
          <CardDescription>Categorized inquiries from the contact form.</CardDescription>
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
              {leads.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell>
                    <div className="font-medium">{lead.name}</div>
                    <div className="text-sm text-muted-foreground">{lead.email}</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{lead.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={cn(priorityColors[lead.priority ?? 'low'])}>{lead.priority}</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {formatDistanceToNow(lead.submittedAt, { addSuffix: true })}
                  </TableCell>
                   <TableCell className="max-w-sm truncate">{lead.inquiry}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
