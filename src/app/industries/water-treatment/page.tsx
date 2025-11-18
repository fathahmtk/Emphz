
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CheckCircle } from "lucide-react";

const recommendedProducts = [
    "GRP Instrumentation Enclosures",
    "Chemical-Resistant Enclosures",
    "Utility-Approved Cabinets",
    "GRP Control Kiosks",
];

const whyEmphz = [
    "Corrosion-proof performance in aggressive chemical zones",
    "UV-stable and moisture-resistant construction",
    "Low maintenance, long service lifecycle",
];

export default function WaterTreatmentPage() {
    return (
        <>
            <SiteHeader />
            <main className="container py-12 md:py-20">
                <ScrollReveal>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Water Treatment</h1>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        Water treatment plants operate in highly corrosive, chemically aggressive environments. Traditional metal cabinets degrade quickly, causing system failures and persistent maintenance issues.
                    </p>
                </ScrollReveal>

                <div className="mt-12 grid gap-12 md:grid-cols-2">
                    <ScrollReveal delay={200}>
                        <h2 className="text-2xl font-bold font-headline">Industry Challenges</h2>
                        <ul className="mt-4 space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 mt-1 shrink-0 text-destructive" /> <span>Chemical fumes and chlorine-based corrosion</span></li>
                            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 mt-1 shrink-0 text-destructive" /> <span>Constant moisture and humidity exposure</span></li>
                            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 mt-1 shrink-0 text-destructive" /> <span>Long-distance plant distribution networks</span></li>
                            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 mt-1 shrink-0 text-destructive" /> <span>Safety compliance for electrical and instrumentation systems</span></li>
                        </ul>
                    </ScrollReveal>

                    <ScrollReveal delay={300}>
                        <h2 className="text-2xl font-bold font-headline">EMPHZ Solutions</h2>
                        <p className="mt-4 text-muted-foreground">
                            EMPHZ’s GRP enclosures and kiosks are engineered to resist chemical penetration, moisture, and biological wear. Our systems safeguard pumps, sensors, analyzers, and monitoring instruments in demanding water and wastewater environments.
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
