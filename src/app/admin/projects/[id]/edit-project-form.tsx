
"use client";

import { useState } from "react";
import { type Project } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Sparkles, Trash2, ImageIcon } from "lucide-react";
import { generateProjectDescription, saveProject, deleteProject } from "./actions";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

export function EditProjectForm({ project: initialProject }: { project: Project }) {
  const [project, setProject] = useState(initialProject);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const isNewProject = project.id === 'new';

  const handleInputChange = (field: keyof Omit<Project, 'id'>, value: string) => {
    setProject(prev => ({...prev, [field]: value}));
  }

  const handleGenerate = async () => {
    setIsGenerating(true);
    const result = await generateProjectDescription(project.description);
    setIsGenerating(false);

    if ("variation" in result) {
      handleInputChange('description', result.variation);
      toast({
        title: "Content Generated",
        description: "A new project description has been generated.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error,
      });
    }
  };

  const handleSaveChanges = async () => {
    setIsSaving(true);
    const { id, ...projectData } = project;
    const result = await saveProject(id, projectData);
    setIsSaving(false);

    if("success" in result) {
        toast({
            title: "Changes Saved",
            description: `Project "${project.title}" has been updated.`,
        });
        if(isNewProject) {
            router.push('/admin/projects');
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
    if(!window.confirm(`Are you sure you want to delete "${project.title}"? This cannot be undone.`)) {
        return;
    }
    setIsDeleting(true);
    const result = await deleteProject(project.id);
    setIsDeleting(false);

    if ("success" in result) {
        toast({
            title: "Project Deleted",
            description: `Project "${project.title}" has been deleted.`,
        });
        router.push('/admin/projects');
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
            <CardTitle>{isNewProject ? 'Create Project' : 'Project Details'}</CardTitle>
            <CardDescription>{isNewProject ? 'Add a new project to your case studies.' : 'Edit the title, description, and other details of the project.'}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Project Title</Label>
              <Input id="title" value={project.title} onChange={(e) => handleInputChange('title', e.target.value)} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="description">Description</Label>
                <Button variant="ghost" size="sm" onClick={handleGenerate} disabled={isGenerating}>
                  {isGenerating ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Sparkles className="mr-2 h-4 w-4 text-amber-500" />
                  )}
                  Generate with AI
                </Button>
              </div>
              <Textarea id="description" value={project.description} onChange={(e) => handleInputChange('description', e.target.value)} rows={6} />
            </div>
             <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Client Type</Label>
                <Input value={project.clientType} onChange={(e) => handleInputChange('clientType', e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Location</Label>
                <Input value={project.location} onChange={(e) => handleInputChange('location', e.target.value)} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Project Images</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Before Image URL</Label>
               <Input value={project.beforeImageUrl} onChange={(e) => handleInputChange('beforeImageUrl', e.target.value)} className="mt-2" />
              <div className="relative aspect-video w-full mt-2">
                <Image src={project.beforeImageUrl || "https://picsum.photos/seed/placeholder/600/400"} alt="Before" data-ai-hint={project.beforeImageHint} fill className="object-cover rounded-md" />
                <Badge variant="destructive" className="absolute top-2 left-2">Before</Badge>
              </div>
            </div>
            <div>
              <Label>After Image URL</Label>
              <Input value={project.afterImageUrl} onChange={(e) => handleInputChange('afterImageUrl', e.target.value)} className="mt-2" />
              <div className="relative aspect-video w-full mt-2">
                <Image src={project.afterImageUrl || "https://picsum.photos/seed/placeholder/600/400"} alt="After" data-ai-hint={project.afterImageHint} fill className="object-cover rounded-md" />
                <Badge variant="default" className="bg-green-600 absolute top-2 left-2">After</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="flex flex-col gap-2">
            <Button onClick={handleSaveChanges} size="lg" disabled={isSaving || isGenerating}>
                {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                {isNewProject ? 'Create Project' : 'Save Changes'}
            </Button>
             {!isNewProject && (
                <Button variant="destructive" onClick={handleDelete} disabled={isDeleting}>
                    {isDeleting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Trash2 />}
                    Delete Project
                </Button>
            )}
        </div>
      </div>
    </div>
  );
}
