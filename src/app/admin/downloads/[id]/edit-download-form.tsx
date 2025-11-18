
"use client";

import { useState } from "react";
import { type TechnicalDownload } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Trash2 } from "lucide-react";
import { saveDownload, deleteDownload } from "./actions";
import { useRouter } from "next/navigation";

export function EditDownloadForm({ download: initialDownload }: { download: TechnicalDownload }) {
  const [download, setDownload] = useState(initialDownload);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const isNew = download.id === 'new';

  const handleInputChange = (field: keyof Omit<TechnicalDownload, 'id'>, value: string) => {
    setDownload(prev => ({...prev, [field]: value}));
  }

  const handleSaveChanges = async () => {
    setIsSaving(true);
    const { id, ...downloadData } = download;
    const result = await saveDownload(id, downloadData);
    setIsSaving(false);

    if("success" in result) {
        toast({
            title: "Changes Saved",
            description: `Document "${download.title}" has been updated.`,
        });
        if(isNew && result.id) {
            router.push(`/admin/downloads/${result.id}`);
        } else {
            router.push('/admin/downloads');
        }
    } else {
         toast({
            variant: "destructive",
            title: "Error",
            description: result.error,
        });
    }
  }

  const handleDelete = async () => {
    if(!window.confirm(`Are you sure you want to delete "${download.title}"? This cannot be undone.`)) {
        return;
    }
    setIsDeleting(true);
    const result = await deleteDownload(download.id);
    setIsDeleting(false);

    if ("success" in result) {
        toast({
            title: "Download Deleted",
            description: `Document "${download.title}" has been deleted.`,
        });
        router.push('/admin/downloads');
    } else {
        toast({
            variant: "destructive",
            title: "Error",
            description: result.error,
        })
    }
  }

  return (
    <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
      <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
        <Card>
          <CardHeader>
            <CardTitle>{isNew ? 'Create Download' : 'Download Details'}</CardTitle>
            <CardDescription>{isNew ? 'Add a new document to your technical library.' : 'Edit the details of the document.'}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" value={download.title} onChange={(e) => handleInputChange('title', e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" value={download.description} onChange={(e) => handleInputChange('description', e.target.value)} rows={4} />
            </div>
             <div className="space-y-2">
              <Label htmlFor="fileUrl">File URL</Label>
              <Input id="fileUrl" value={download.fileUrl} onChange={(e) => handleInputChange('fileUrl', e.target.value)} placeholder="e.g., /docs/my-datasheet.pdf"/>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
        <div className="flex flex-col gap-2">
            <Button onClick={handleSaveChanges} size="lg" disabled={isSaving}>
                {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                {isNew ? 'Create Document' : 'Save Changes'}
            </Button>
             {!isNew && (
                <Button variant="destructive" onClick={handleDelete} disabled={isDeleting}>
                    {isDeleting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Trash2 />}
                    Delete Document
                </Button>
            )}
        </div>
      </div>
    </div>
  );
}
