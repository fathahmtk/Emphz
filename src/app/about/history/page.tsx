
import dynamic from "next/dynamic";
import { ScrollReveal } from "@/components/scroll-reveal";

const SiteHeader = dynamic(
  () => import("@/components/layout/site-header").then(m => m.SiteHeader),
  { ssr: false }
);

const SiteFooter = dynamic(
  () => import("@/components/layout/site-footer").then(m => m.SiteFooter),
  { ssr: false }
);

export default function HistoryPage() {
    return (
        <>
            <SiteHeader />
            <main className="container py-12 md:py-20">
                <ScrollReveal>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Our History</h1>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                    <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                        EMPHZ was established with a clear mandate: engineer composite solutions that outperform traditional materials across durability, lifecycle cost, and safety. What began as a focused GRP fabrication unit has evolved into a fully-integrated manufacturing platform delivering high-grade enclosures, kiosks, and industrial composite systems.
                    </p>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        Through strategic investments in tooling, R&D, and quality systems, EMPHZ rapidly strengthened its footprint across power distribution, water treatment, telecom, oil & gas, and construction ecosystems. Today, the brand is recognized for its discipline, engineering depth, and authority-approved products deployed across high-value government and private-sector infrastructure projects.
                    </p>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        Our trajectory continues to move toward innovation, scale, and global relevance.
                    </p>
                </ScrollReveal>
            </main>
            <SiteFooter />
        </>
    );
}
