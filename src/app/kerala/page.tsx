
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function KeralaPage() {
    return (
        <>
            <SiteHeader />
            <main className="container py-12 md:py-20">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">GRP Cabin Supplier in Kerala</h1>
                        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
                           Fast supply and installation of high-quality GRP enclosures, toilet cabins, kiosks, and resort villas across Kerala.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Add sections for: Kerala office presence, Fast supply & installation, Panchayat + tourism + EPC use cases, Kerala climate performance, Photo gallery */}

                <ScrollReveal delay={400} className="mt-16 text-center">
                    <h2 className="text-2xl font-bold font-headline">Ready to start your project in Kerala?</h2>
                    <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
                        Our local team is ready to provide a quote and a site visit.
                    </p>
                    <Button asChild size="lg" className="mt-6 group">
                        <Link href="/contact">
                            Contact our Kerala Office
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </ScrollReveal>
            </main>
            <SiteFooter />
        </>
    );
}
