
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CheckCircle } from "lucide-react";

const recommendedProducts = [
    "GRP Portable Kiosks",
    "Battery Enclosures",
    "Safety Cabinets",
    "Custom GRP Storage Units",
];

const whyEmphz = [
    "Durable and impact-resistant",
    "Easy to relocate or re-install",
    "Long-term economical lifecycle",
];

export default function ConstructionPage() {
    return (
        <>
            <SiteHeader />
            <main className="container max-w-4xl py-12 md:py-20">
                <ScrollReveal>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Construction</h1>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        Construction sites require rugged protective systems for electrical, safety, and operational equipment. Metal housings often fail due to impacts, rust, and rough handling.
                    </p>
                </ScrollReveal>

                <div className="mt-12 grid gap-12 md:grid-cols-2">
                    <ScrollReveal delay={200}>
                        <h2 className="text-2xl font-bold font-headline">Industry Challenges</h2>
                        <ul className="mt-4 space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 mt-1 shrink-0 text-destructive" /> <span>Mechanical impact damage</span></li>
                            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 mt-1 shrink-0 text-destructive" /> <span>Weather exposure during long project cycles</span></li>
                            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 mt-1 shrink-0 text-destructive" /> <span>Theft, tampering, and accessibility issues</span></li>
                            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 mt-1 shrink-0 text-destructive" /> <span>Temporary-to-permanent usage requirements</span></li>
                        </ul>
                    </ScrollReveal>

                    <ScrollReveal delay={300}>
                        <h2 className="text-2xl font-bold font-headline">EMPHZ Solutions</h2>
                        <p className="mt-4 text-muted-foreground">
                            EMPHZ delivers lightweight, impact-resistant GRP housings and kiosks that support project utilities, temporary infrastructure, safety gear, and operational equipment.
                        </p>
                    </ScrollReveal>
                </div>

                <ScrollReveal delay={400} className="mt-12">
                    <h2 className="text-2xl font-bold font-headline text-center">Recommended Products & Key Advantages</h2>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="rounded-lg bg-card/50 p-6">
                            <h3 className="text-xl font-semibold">Recommended Products</h3>
                            <ul className="mt-4 space-y-2 text-muted-foreground">
                                {recommendedProducts.map(product => (
                                    <li key={product} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-accent" /> {product}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-lg bg-card/50 p-6">
                             <h3 className="text-xl font-semibold">Why EMPHZ</h3>
                            <ul className="mt-4 space-y-2 text-muted-foreground">
                                {whyEmphz.map(point => (
                                    <li key={point} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-accent" /> {point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </ScrollReveal>

            </main>
            <SiteFooter />
        </>
    );
}
