
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Globe } from "lucide-react";

const primaryMarkets = [
    "UAE & GCC",
    "Middle East & North Africa",
    "South Asia",
    "Africa (select markets)",
];

const marketDrivers = [
    "Grid modernization",
    "Renewable energy growth",
    "Urbanization & smart cities",
    "Industrial digitization",
    "Harsh-climate infrastructure needs",
]

export default function MarketsPage() {
    return (
        <>
            <SiteHeader />
            <main className="container max-w-5xl py-12 md:py-20">
                <ScrollReveal>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Our Markets</h1>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        EMPHZ focuses on geographies where corrosion, heat, and infrastructure growth demand high-performance materials.
                    </p>
                </ScrollReveal>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <ScrollReveal delay={200}>
                        <h2 className="text-3xl font-bold font-headline flex items-center gap-3"><Globe className="h-8 w-8 text-accent" /> Primary Markets</h2>
                        <div className="mt-6 flex flex-wrap gap-3">
                            {primaryMarkets.map((market) => (
                                <Badge key={market} variant="secondary" className="text-lg py-2 px-4">{market}</Badge>
                            ))}
                        </div>
                    </ScrollReveal>
                     <ScrollReveal delay={300}>
                        <h2 className="text-3xl font-bold font-headline">Market Drivers</h2>
                        <ul className="mt-4 space-y-3">
                            {marketDrivers.map(driver => (
                                <li key={driver} className="flex items-center gap-3 text-lg"><CheckCircle className="h-5 w-5 text-accent shrink-0" /> <span className="text-muted-foreground">{driver}</span></li>
                            ))}
                        </ul>
                    </ScrollReveal>
                </div>
            </main>
            <SiteFooter />
        </>
    );
}
