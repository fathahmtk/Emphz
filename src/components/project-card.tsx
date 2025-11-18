
import Image from "next/image";
import { type Project } from "@/lib/types";
import { Card, CardDescription, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg h-full flex flex-col group">
       <Link href={`/projects`}>
        <div className="relative aspect-video">
           <Image
              src={project.afterImageUrl}
              alt={project.title}
              data-ai-hint="new infrastructure"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <Badge variant="outline" className="w-fit mb-2">{project.clientType}</Badge>
            <CardTitle className="text-xl font-headline group-hover:text-primary transition-colors">{project.title}</CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{project.location}</span>
                </div>
            </div>
            <CardDescription className="mt-3 flex-grow line-clamp-3">{project.details}</CardDescription>
        </div>
      </Link>
    </Card>
  );
}
