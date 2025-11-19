
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const recommendedProducts = [
    "GRP Fire & Safety Cabinets",
    "GRP Instrumentation Enclosures",
    "Corrosion-Resistant Custom Enclosures",
    "GRP Operator Kiosks",
];

const whyEmphz = [
    "Chemical and hydrocarbon resistant",
    "Non-corrosive and non-conductive",
    "Fire-rated GRP formulations available",
    "Proven reliability in industrial plants",
];

export default function OilGasPage() {
    return (
        <>
            <SiteHeader />
            <main className="container py-12 md:py-20">
                <ScrollReveal>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Oil & Gas</h1>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                       Oil & gas facilities demand materials that withstand corrosive chemicals, hydrocarbons, salt-laden air, and fire exposure. High-risk environments require certified, durable protective systems.
                    </p>
                </ScrollReveal>

                <div className="mt-12 grid gap-12 md:grid-cols-2">
                    <ScrollReveal delay={200}>
                        <h2 className="text-2xl font-bold font-headline">Industry Challenges</h2>
                        <ul className="mt-4 space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2"><XCircle className="h-5 w-5 mt-1 shrink-0 text-destructive/80" /> <span>Extreme corrosion in offshore and onshore plants</span></li>
                            <li className="flex items-start gap-2"><XCircle className="h-5 w-5 mt-1 shrink-0 text-destructive/80" /> <span>High fire and chemical exposure</span></li>
                            <li className="flex items-start gap-2"><XCircle className="h-5 w-5 mt-1 shrink-0 text-destructive/80" /> <span>Hazardous-area compliance</span></li>
                            <li className="flex items-start gap-2"><XCircle className="h-5 w-5 mt-1 shrink-0 text-destructive/80" /> <span>Harsh weather and mechanical impacts</span></li>
                        </ul>
                    </ScrollReveal>

                    <ScrollReveal delay={300}>
                        <h2 className="text-2xl font-bold font-headline">EMPHZ Solutions</h2>
                        <p className="mt-4 text-muted-foreground">
                            EMPHZ develops GRP enclosures and cabinets designed for instrumentation, fire & safety systems, valve controls, and monitoring stations within oil & gas fields. Our products maintain performance in harsh, explosive, and highly corrosive zones.
                        </p>
                    </ScrollReveal>
                </div>

                <ScrollReveal delay={400} className="mt-12">
                    <h2 className="text-2xl font-bold font-headline text-center">Recommended Products & Key Advantages</h2>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold">Recommended Products</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-muted-foreground">
                                    {recommendedProducts.map(product => (
                                        <li key={product} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /> {product}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                        <Card>
                             <CardHeader>
                                <CardTitle className="text-xl font-semibold">Why EMPHZ</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-muted-foreground">
                                    {whyEmphz.map(point => (
                                        <li key={point} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /> {point}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </ScrollReveal>

            </main>
            <SiteFooter />
        </>
    );
}
