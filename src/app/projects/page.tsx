import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Discover our portfolio of successful GRP solution implementations across various industries. See our expertise in action with detailed case studies.",
};

export default function ProjectsPage() {
  return (
    <div className="container max-w-7xl px-4 md:px-6 py-12 md:py-20">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Project Case Studies</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            From municipal upgrades to complex industrial plants, our GRP solutions deliver tangible results.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-12">
        {projects.map((project, i) => (
          <ScrollReveal key={project.id} delay={i * 200}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
