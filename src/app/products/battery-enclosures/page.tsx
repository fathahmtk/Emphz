
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const keyFeatures = [
    "Ventilation & thermal management",
    "Acid-resistant GRP",
    "Fire-retardant internal finishing",
    "Cable routing/ducting options",
];

const applications = [
    "Solar battery banks",
    "Telecom towers",
    "UPS housing",
    "Industrial backup systems",
];

export default function BatteryEnclosuresPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'gallery-battery-enclosure');

    return (
        <>
            <SiteHeader />
             {heroImage && <PageHero 
                title="Battery Enclosures"
                description="GRP battery containers engineered for solar energy systems, telecom backup batteries, and industrial UPS units."
                imageUrl={heroImage.imageUrl}
                imageHint={heroImage.imageHint}
             />}
            <main className="container py-12 md:py-20">
                {!heroImage && (
                    <ScrollReveal>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Battery Enclosures</h1>
                        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                            GRP battery containers engineered for solar energy systems, telecom backup batteries, and industrial UPS units.
                        </p>
                    </ScrollReveal>
                )}


                <div className="mt-12 grid gap-12 md:grid-cols-2">
                    <ScrollReveal delay={200}>
                        <h2 className="text-2xl font-bold font-headline">Key Features</h2>
                        <ul className="mt-4 space-y-3 text-muted-foreground">
                            {keyFeatures.map(feature => (
                                <li key={feature} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-foreground/60" /> {feature}</li>
                            ))}
                        </ul>
                    </ScrollReveal>

                    <ScrollReveal delay={300}>
                        <h2 className="text-2xl font-bold font-headline">Applications</h2>
                         <ul className="mt-4 space-y-3 text-muted-foreground">
                            {applications.map(app => (
                                <li key={app} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-foreground/60" /> {app}</li>
                            ))}
                        </ul>
                    </ScrollReveal>
                </div>
                 <ScrollReveal delay={400} className="mt-12">
                    <h2 className="text-2xl font-bold font-headline">Downloads</h2>
                    <div className="mt-4 flex flex-wrap gap-4">
                        <Button variant="outline" asChild>
                            <a href="/downloads/EMPHZ-Datasheet-Battery-Enclosures.pdf" download>Datasheet</a>
                        </Button>
                    </div>
                </ScrollReveal>
            </main>
            <SiteFooter />
        </>
    );
}
