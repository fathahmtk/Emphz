
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CheckCircle } from "lucide-react";

export default function MissionPage() {
    return (
        <>
            <SiteHeader />
            <main className="container py-12 md:py-20">
                <ScrollReveal>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Mission, Vision & Values</h1>
                </ScrollReveal>

                <ScrollReveal delay={200} className="mt-12">
                    <h2 className="text-3xl font-bold font-headline">Mission</h2>
                    <p className="mt-2 text-lg text-muted-foreground">Engineer world-class GRP solutions that enable resilient, safe, and efficient infrastructure for industries and communities.</p>
                </ScrollReveal>

                <ScrollReveal delay={300} className="mt-10">
                    <h2 className="text-3xl font-bold font-headline">Vision</h2>
                    <p className="mt-2 text-lg text-muted-foreground">To be the region’s leading GRP/FRP manufacturing authority — delivering innovative, certified, and globally benchmarked composite solutions.</p>
                </ScrollReveal>

                <ScrollReveal delay={400} className="mt-10">
                    <h2 className="text-3xl font-bold font-headline">Values</h2>
                    <ul className="mt-4 space-y-4 text-lg">
                        <li className="flex items-start gap-4">
                            <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-accent" />
                            <span className="text-muted-foreground"><strong className="font-semibold text-foreground">Integrity:</strong> Zero-compromise approach to quality, compliance, and customer commitments.</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-accent" />
                            <span className="text-muted-foreground"><strong className="font-semibold text-foreground">Innovation:</strong> Advancing GRP engineering through R&D, material upgrades, and modern production methods.</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-accent" />
                            <span className="text-muted-foreground"><strong className="font-semibold text-foreground">Reliability:</strong> Delivering products that perform consistently across extreme environmental conditions.</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-accent" />
                            <span className="text-muted-foreground"><strong className="font-semibold text-foreground">Customer Focus:</strong> Providing technical clarity, responsive support, and project-specific customization.</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-accent" />
                            <span className="text-muted-foreground"><strong className="font-semibold text-foreground">Sustainability:</strong> Designing composite solutions that reduce corrosion, maintenance, and environmental impact.</span>
                        </li>
                    </ul>
                </ScrollReveal>
            </main>
            <SiteFooter />
        </>
    );
}
