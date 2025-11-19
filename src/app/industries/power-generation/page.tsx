
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const recommendedProducts = [
    "GRP Electrical Enclosures",
    "Utility-Approved Enclosures",
    "Fire & Safety Enclosures",
    "Instrumentation Enclosures",
    "Custom Distribution Kiosks",
];

const whyEmphz = [
    "Zero-corrosion lifecycle",
    "High dielectric strength",
    "Authority-approved specifications",
    "Proven installations across regional utilities",
];

export default function PowerGenerationPage() {
    return (
        <>
            <SiteHeader />
            <main className="container py-12 md:py-20">
                <ScrollReveal>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Power Generation</h1>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        Power networks operate in high-risk, high-exposure environments where equipment integrity and field reliability drive operational uptime. Corrosion, heat, UV exposure, and electrical hazards create constant failure points for conventional enclosure materials.
                    </p>
                </ScrollReveal>

                <div className="mt-12 grid gap-12 md:grid-cols-2">
                    <ScrollReveal delay={200}>
                        <h2 className="text-2xl font-bold font-headline">Industry Challenges</h2>
                        <ul className="mt-4 space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2"><XCircle className="h-5 w-5 mt-1 shrink-0 text-destructive/80" /> <span>Exposure to heat, humidity, UV, corrosive gases</span></li>
                            <li className="flex items-start gap-2"><XCircle className="h-5 w-5 mt-1 shrink-0 text-destructive/80" /> <span>Electrical safety and insulation requirements</span></li>
                            <li className="flex items-start gap-2"><XCircle className="h-5 w-5 mt-1 shrink-0 text-destructive/80" /> <span>Field failures due to corroded metal housings</span></li>
                            <li className="flex items-start gap-2"><XCircle className="h-5 w-5 mt-1 shrink-0 text-destructive/80" /> <span>Demanding compliance standards from utilities</span></li>
                            <li className="flex items-start gap-2"><XCircle className="h-5 w-5 mt-1 shrink-0 text-destructive/80" /> <span>High penalties for downtime or equipment malfunction</span></li>
                        </ul>
                    </ScrollReveal>

                    <ScrollReveal delay={300}>
                        <h2 className="text-2xl font-bold font-headline">EMPHZ Solutions</h2>
                        <p className="mt-4 text-muted-foreground">
                            EMPHZ manufactures GRP enclosures engineered specifically for power-generation infrastructure — delivering superior insulation, non-conductivity, and corrosion immunity. Our products are deployed across substations, control points, distribution nodes, and service corridors.
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
