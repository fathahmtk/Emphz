
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const keyFeatures = [
    "Fire-retardant options",
    "UV-resistant surface",
    "Lightweight for fast installation",
    "Custom colors and profile shapes",
];

const applications = [
    "Warehouses",
    "Utility buildings",
    "Chemical plants",
    "Coastal structures",
];

export default function RoofingPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'gallery-roofing');

    return (
        <>
            <SiteHeader />
             {heroImage && <PageHero 
                title="GRP Roofing Systems"
                description="Durable, corrosion-proof roofing solutions for industrial, utility, and coastal structures. Designed for long-lifecycle performance with zero rust and minimal maintenance."
                imageUrl={heroImage.imageUrl}
                imageHint={heroImage.imageHint}
             />}
            <main className="container py-12 md:py-20">
                 {!heroImage && (
                    <ScrollReveal>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">GRP Roofing Systems</h1>
                        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                            Durable, corrosion-proof roofing solutions for industrial, utility, and coastal structures. Designed for long-lifecycle performance with zero rust and minimal maintenance.
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
            </main>
            <SiteFooter />
        </>
    );
}

    