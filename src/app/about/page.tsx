
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function AboutPage() {
    return (
        <>
            <SiteHeader />
            <main className="container max-w-4xl py-12 md:py-20">
                <ScrollReveal>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">About Us</h1>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                    <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                        EMPHZ is a next-generation GRP/FRP engineering manufacturer dedicated to delivering mission-critical infrastructure solutions for utilities, industry, and smart-city development. Our operations are anchored in material science, precision tooling, and a rigorous compliance culture that meets the expectations of government authorities and global EPC contractors.
                    </p>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        We engineer high-performance GRP enclosures, kiosks, modular units, and custom industrial systems designed to operate in harsh environments where reliability is non-negotiable. Our production ecosystem integrates automated moulding, advanced composite processing, and a disciplined quality framework aligned to ISO and international standards.
                    </p>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        Anchored in the UAE and serving global markets, EMPHZ is committed to enabling safer, more resilient, and future-proof infrastructure.
                    </p>
                </ScrollReveal>
            </main>
            <SiteFooter />
        </>
    );
}
