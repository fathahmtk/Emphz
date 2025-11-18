
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CheckCircle } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const keyFeatures = [
    "Fire-retardant composite",
    "High visibility color options",
    "Impact and weather resistance",
    "Optional transparent windows",
];

const applications = [
    "Fire extinguisher cabinets",
    "SCBA storage",
    "Hose reel protections",
    "Emergency response systems",
];

export default function FireSafetyEnclosuresPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'gallery-fire-safety');

    return (
        <>
            <SiteHeader />
             {heroImage && <PageHero 
                title="Fire & Safety Enclosures"
                description="Fire-rated GRP enclosures designed for housing safety and emergency equipment, engineered to remain operational in high-temperature and corrosive environments."
                imageUrl={heroImage.imageUrl}
                imageHint={heroImage.imageHint}
             />}
            <main className="container py-12 md:py-20">
                {!heroImage && (
                    <ScrollReveal>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Fire & Safety Enclosures</h1>
                        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                            Fire-rated GRP enclosures designed for housing safety and emergency equipment, engineered to remain operational in high-temperature and corrosive environments.
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
