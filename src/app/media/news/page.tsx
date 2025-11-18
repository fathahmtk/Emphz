
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const contentTypes = [
    "New product releases",
    "Factory expansions",
    "Certifications achieved",
    "Authority approvals",
    "Major project awards",
    "Innovation and R&D highlights",
];

export default function NewsPage() {
    return (
        <>
            <SiteHeader />
            <main className="container max-w-5xl py-12 md:py-20">
                <ScrollReveal>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">News & Announcements</h1>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        Formal, compliance-oriented, and industry-specific updates covering corporate achievements, new approvals, partnerships, and manufacturing advancements.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={200} className="mt-12">
                     <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">Content Types</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {contentTypes.map(type => (
                                    <li key={type} className="flex items-center gap-3 text-muted-foreground">
                                        <CheckCircle className="h-5 w-5 text-accent" />
                                        <span>{type}</span>
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
