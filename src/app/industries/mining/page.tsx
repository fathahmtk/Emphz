
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CheckCircle } from "lucide-react";

const recommendedProducts = [
    "GRP Heavy-Duty Enclosures",
    "Instrumentation Cabinets",
    "Fire & Safety Cabinets",
    "Custom Mining-Specific GRP Solutions",
];

const whyEmphz = [
    "Long-term reliability in extreme conditions",
    "Resilient under vibration and impact",
    "Minimal maintenance and rapid installation",
];

export default function MiningPage() {
    return (
        <>
            <SiteHeader />
            <main className="container max-w-5xl py-12 md:py-20">
                <ScrollReveal>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Mining</h1>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        Mining environments impose the harshest conditions — dust, vibration, corrosion, and extreme weather. Reliability is critical for safety and continuous operations.
                    </p>
                </ScrollReveal>

                <div className="mt-12 grid gap-12 md:grid-cols-2">
                    <ScrollReveal delay={200}>
                        <h2 className="text-2xl font-bold font-headline">Industry Challenges</h2>
                        <ul className="mt-4 space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 mt-1 shrink-0 text-destructive" /> <span>Abrasive dust and particulate exposure</span></li>
                            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 mt-1 shrink-0 text-destructive" /> <span>Corrosion from chemicals and groundwater minerals</span></li>
                            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 mt-1 shrink-0 text-destructive" /> <span>Heavy vibrations and mechanical shocks</span></li>
                            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 mt-1 shrink-0 text-destructive" /> <span>Remote-site maintenance constraints</span></li>
                        </ul>
                    </ScrollReveal>

                    <ScrollReveal delay={300}>
                        <h2 className="text-2xl font-bold font-headline">EMPHZ Solutions</h2>
                        <p className="mt-4 text-muted-foreground">
                            EMPHZ manufactures GRP enclosures engineered for high-impact, high-corrosion mining environments, supporting control systems, electrical distribution, sensors, and monitoring equipment.
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
