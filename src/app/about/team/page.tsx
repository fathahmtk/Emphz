
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CheckCircle } from "lucide-react";

export default function TeamPage() {
    return (
        <>
            <SiteHeader />
            <main className="container py-12 md:py-20">
                <ScrollReveal>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Our Team</h1>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                    <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                        EMPHZ is powered by a multidisciplinary workforce that brings deep experience across composites engineering, industrial design, utilities compliance, and quality management. Our structure blends technical leadership with operational discipline to ensure every product meets industry-critical benchmarks.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={300} className="mt-10">
                    <h2 className="text-2xl font-bold font-headline">Key competencies inside EMPHZ include:</h2>
                    <ul className="mt-4 space-y-3 text-lg text-muted-foreground">
                        <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-foreground/60" />Composite technology specialists</li>
                        <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-foreground/60" />Mechanical and electrical design engineers</li>
                        <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-foreground/60" />Moulding and production technicians</li>
                        <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-foreground/60" />Quality assurance & testing teams</li>
                        <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-foreground/60" />Project and tender support engineers</li>
                        <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-foreground/60" />Customer operations & after-sales support</li>
                    </ul>
                </ScrollReveal>

                 <ScrollReveal delay={400}>
                    <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                        Our people are aligned around precision, responsiveness, and a shared mandate to deliver dependable solutions at scale.
                    </p>
                </ScrollReveal>
            </main>
            <SiteFooter />
        </>
    );
}
