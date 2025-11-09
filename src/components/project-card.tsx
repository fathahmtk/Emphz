import Image from "next/image";
import { type Project } from "@/lib/types";
import { GlassCard } from "./glass-card";
import { CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <GlassCard>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="relative aspect-video">
            <Image
              src={project.beforeImageUrl}
              alt={`Before: ${project.title}`}
              data-ai-hint={project.beforeImageHint}
              fill
              className="object-cover rounded-md"
            />
            <Badge variant="destructive" className="absolute top-2 left-2">Before</Badge>
          </div>
          <div className="relative aspect-video">
            <Image
              src={project.afterImageUrl}
              alt={`After: ${project.title}`}
              data-ai-hint={project.afterImageHint}
              fill
              className="object-cover rounded-md"
            />
            <Badge variant="default" className="absolute top-2 left-2 bg-green-600">After</Badge>
          </div>
        </div>
        <div className="mt-4">
          <CardTitle className="text-xl font-headline mt-4">{project.title}</CardTitle>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
            <Badge variant="secondary">{project.clientType}</Badge>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{project.location}</span>
            </div>
          </div>
          <CardDescription className="mt-3">{project.description}</CardDescription>
        </div>
      </CardContent>
    </GlassCard>
  );
}
