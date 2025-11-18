import Image from "next/image";
import { type Project } from "@/lib/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-video">
           <Image
              src={project.imageUrl}
              alt={project.title}
              data-ai-hint={project.imageHint}
              fill
              className="object-cover"
            />
        </div>
        <div className="p-6 flex flex-col">
            <Badge variant="outline" className="w-fit mb-2">{project.industry}</Badge>
            <CardTitle className="text-xl font-headline">{project.title}</CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{project.location}</span>
                </div>
            </div>
            <CardDescription className="mt-3 flex-grow">{project.description}</CardDescription>
        </div>
      </div>
    </Card>
  );
}
