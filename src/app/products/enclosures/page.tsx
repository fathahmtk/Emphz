
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const keyFeatures = [
    "IP65 / IP66 protection",
    "Electrically non-conductive",
    "UV and corrosion resistant",
    "Lightweight, high-strength composite",
    "Customizable vents, locks, and mounting options",
];

const applications = [
    "LV/HV distribution points",
    "Control panels",
    "Metering systems",
    "Outdoor switchgear protection",
];

export default function EnclosuresPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'gallery-product-1');

    return (
        <>
            <SiteHeader />
             {heroImage && <PageHero 
                title="GRP/FRP Electrical Enclosures"
                description="High-durability GRP enclosures engineered for electrical distribution, control systems, and field installations. Designed to replace metal boxes where rust, conductivity, and environmental exposure create risk."
                imageUrl={heroImage.imageUrl}
                imageHint={heroImage.imageHint}
             />}
            <main className="container py-12 md:py-20">
                {!heroImage && (
                    <ScrollReveal>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">GRP/FRP Electrical Enclosures</h1>
                        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                            High-durability GRP enclosures engineered for electrical distribution, control systems, and field installations. Designed to replace metal boxes where rust, conductivity, and environmental exposure create risk.
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
                            <a href="/downloads/EMPHZ-Datasheet-GRP-Enclosures.pdf" download>Datasheet</a>
                        </Button>
                        <Button variant="outline" asChild>
                             <a href="/downloads/EMPHZ-CAD-Drawings.zip" download>CAD Drawings (DWG)</a>
                        </Button>
                        <Button variant="outline" asChild>
                            <a href="/downloads/EMPHZ-Installation-Guide.pdf" download>Installation Guide</a>
                        </Button>
                    </div>
                </ScrollReveal>
            </main>
            <SiteFooter />
        </>
    );
}
