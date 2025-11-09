"use client";

import { useState } from "react";
import { type Project } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Sparkles } from "lucide-react";
import { generateProjectDescription } from "./actions";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function EditProjectForm({ project }: { project: Project }) {
  const [description, setDescription] = useState(project.description);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setIsGenerating(true);
    const result = await generateProjectDescription(description);
    setIsGenerating(false);

    if ("variation" in result) {
      setDescription(result.variation);
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

  const handleSaveChanges = () => {
    toast({
        title: "Changes Saved",
        description: `Project "${project.title}" has been updated. (Demo)`,
    })
  }

  return (
    <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
      <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
            <CardDescription>Edit the title, description, and other details of the project.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Project Title</Label>
              <Input id="title" defaultValue={project.title} />
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
              <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows={6} />
            </div>
             <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Client Type</Label>
                <Input defaultValue={project.clientType} />
              </div>
              <div className="space-y-2">
                <Label>Location</Label>
                <Input defaultValue={project.location} />
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
              <Label>Before Image</Label>
              <div className="relative aspect-video w-full mt-2">
                <Image src={project.beforeImageUrl} alt="Before" data-ai-hint={project.beforeImageHint} fill className="object-cover rounded-md" />
                <Badge variant="destructive" className="absolute top-2 left-2">Before</Badge>
              </div>
            </div>
            <div>
              <Label>After Image</Label>
              <div className="relative aspect-video w-full mt-2">
                <Image src={project.afterImageUrl} alt="After" data-ai-hint={project.afterImageHint} fill className="object-cover rounded-md" />
                <Badge variant="default" className="bg-green-600 absolute top-2 left-2">After</Badge>
              </div>
            </div>
            <Button variant="outline" className="w-full">Change Images</Button>
          </CardContent>
        </Card>
        <Button onClick={handleSaveChanges} size="lg">Save Changes</Button>
      </div>
    </div>
  );
}
