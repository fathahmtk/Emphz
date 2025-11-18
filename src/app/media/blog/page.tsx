
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const blogThemes = [
    "GRP technology and material science",
    "Comparative engineering insights (GRP vs Metal)",
    "Best practices for utility infrastructure",
    "Fire & safety compliance",
    "Smart-city modular solutions",
    "Maintenance and installation guides",
];

export default function BlogPage() {
    return (
        <>
            <SiteHeader />
            <main className="container max-w-4xl py-12 md:py-20">
                <ScrollReveal>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Blog & Insights</h1>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        Industry-focused content designed for SEO, thought leadership, and customer education, targeted at engineers, procurement specialists, and EPC teams.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={200} className="mt-12">
                     <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">Blog Themes</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {blogThemes.map(theme => (
                                    <li key={theme} className="flex items-center gap-3 text-muted-foreground">
                                        <CheckCircle className="h-5 w-5 text-accent" />
                                        <span>{theme}</span>
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
