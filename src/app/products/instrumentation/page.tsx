
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const keyFeatures = [
    "Thermal stability for precision instruments",
    "Chemical and moisture resistant GRP",
    "Gasket-sealed doors for IP65/IP66 rating",
    "Multiple door, lock, and window options",
    "Internal mounting plates and DIN rails",
];

const applications = [
    "Analyzers and sensors",
    "Flow meters and transmitters",
    "Control systems and SCADA units",
    "Sampling systems in industrial plants",
];

export default function InstrumentationPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'gallery-instrumentation');

    return (
        <>
            <SiteHeader />
             {heroImage && <PageHero 
                title="Instrumentation Enclosures"
                description="Precision-built GRP boxes for sensitive instruments that require stable, insulated, and corrosion-proof housings."
                imageUrl={heroImage.imageUrl}
                imageHint={heroImage.imageHint}
             />}
            <main className="container py-12 md:py-20">
                {!heroImage && (
                    <ScrollReveal>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Instrumentation Enclosures</h1>
                        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                           Precision-built GRP boxes for sensitive instruments that require stable, insulated, and corrosion-proof housings.
                        </p>
                    </ScrollReveal>
                )}


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

                 <ScrollReveal delay={400} className="mt-12">
                    <h2 className="text-2xl font-bold font-headline">Downloads</h2>
                    <div className="mt-4 flex flex-wrap gap-4">
                        <Button variant="outline" asChild>
                            <a href="/downloads/EMPHZ-Datasheet-Instrumentation-Enclosures.pdf" download>Datasheet</a>
                        </Button>
                        <Button variant="outline" asChild>
                             <a href="/downloads/EMPHZ-CAD-Drawings.zip" download>CAD Drawings (DWG)</a>
                        </Button>
                    </div>
                </ScrollReveal>
            </main>
            <SiteFooter />
        </>
    );
}
