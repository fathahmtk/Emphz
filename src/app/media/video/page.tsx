
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const videoCategories = [
    "Product Explainers",
    "Factory Process Videos",
    "Case Study Highlights",
    "Corporate Introductions",
    "Exhibition Footage",
];

export default function VideoPage() {
    return (
        <>
            <SiteHeader />
            <main className="container py-12 md:py-20">
                <ScrollReveal>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Video Library</h1>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        Technical demonstrations, factory tours, installation walkthroughs, and promotional content demonstrating EMPHZ’s engineering depth, capability, and execution scale.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={200} className="mt-12">
                     <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">Video Categories</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {videoCategories.map(category => (
                                    <li key={category} className="flex items-center gap-3 text-muted-foreground">
                                        <CheckCircle className="h-5 w-5 text-accent" />
                                        <span>{category}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </ScrollReveal>
            </main>
            <SiteFooter />
        </>
    );
}
