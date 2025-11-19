
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MysorePage() {
    return (
        <>
            <SiteHeader />
            <main className="container py-12 md:py-20">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">GRP Manufacturer in Mysore</h1>
                        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
                           High-capability GRP manufacturing facility in Mysore, supplying South India with premium enclosures, cabins, and kiosks.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Add sections for: Factory capability, Manufacturing process, product lines, supply chain */}

                <ScrollReveal delay={400} className="mt-16 text-center">
                    <h2 className="text-2xl font-bold font-headline">Discuss Your Manufacturing Needs</h2>
                    <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
                        Learn more about our production capabilities and how we can support your project.
                    </p>
                    <Button asChild size="lg" className="mt-6 group">
                        <Link href="/contact">
                            Request a Factory Tour or Spec Pack
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </ScrollReveal>
            </main>
            <SiteFooter />
        </>
    );
}
