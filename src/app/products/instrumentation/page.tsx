
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const keyFeatures = [
    "Thermal stability",
    "Chemical resistance",
    "Gasket-sealed doors",
    "Multiple door/lock options",
];

const applications = [
    "Analyzers",
    "Flow meters",
    "Control sensors",
    "SCADA systems",
];

export default function InstrumentationPage() {
    return (
        <>
            <SiteHeader />
            <main className="container max-w-4xl py-12 md:py-20">
                <ScrollReveal>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Instrumentation Enclosures</h1>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        Precision-built GRP boxes for sensitive instruments that require stable, insulated, and corrosion-proof housings.
                    </p>
                </ScrollReveal>

                <div className="mt-12 grid gap-12 md:grid-cols-2">
                    <ScrollReveal delay={200}>
                        <h2 className="text-2xl font-bold font-headline">Key Features</h2>
                        <ul className="mt-4 space-y-3 text-muted-foreground">
                            {keyFeatures.map(feature => (
                                <li key={feature} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-accent" /> {feature}</li>
                            ))}
                        </ul>
                    </ScrollReveal>

                    <ScrollReveal delay={300}>
                        <h2 className="text-2xl font-bold font-headline">Applications</h2>
                         <ul className="mt-4 space-y-3 text-muted-foreground">
                            {applications.map(app => (
                                <li key={app} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-accent" /> {app}</li>
                            ))}
                        </ul>
                    </ScrollReveal>
                </div>
            </main>
            <SiteFooter />
        </>
    );
}
