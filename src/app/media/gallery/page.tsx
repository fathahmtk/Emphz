
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Factory, Construction, Users, Presentation, Package } from "lucide-react";

const gallerySections = [
    {
        title: "Product Gallery",
        icon: Package
    },
    {
        title: "Factory & Manufacturing",
        icon: Factory
    },
    {
        title: "Projects & Field Installations",
        icon: Construction
    },
    {
        title: "Events & Exhibitions",
        icon: Presentation
    },
    {
        title: "Team & Operations",
        icon: Users
    }
];

export default function GalleryPage() {
    return (
        <>
            <SiteHeader />
            <main className="container max-w-4xl py-12 md:py-20">
                <ScrollReveal>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Photo Gallery</h1>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        A curated visual archive showcasing EMPHZ’s products, manufacturing capabilities, site installations, and project deployments for validation, marketing, and procurement reference.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={200} className="mt-12">
                    <h2 className="text-3xl font-bold font-headline mb-6">Gallery Sections</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {gallerySections.map(section => (
                            <Card key={section.title} className="text-center">
                                <CardHeader>
                                    <div className="flex justify-center mb-4">
                                        <section.icon className="h-10 w-10 text-accent" />
                                    </div>
                                    <CardTitle className="font-headline text-xl">{section.title}</CardTitle>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </ScrollReveal>
            </main>
            <SiteFooter />
        </>
    );
}
