
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CheckCircle } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const features = [
    "Premium interior finishes",
    "Sound & heat insulation",
    "Long lifecycle",
    "Custom size & layout",
    "Modern architectural design",
];

const idealLocations = [
    "Wayanad",
    "Munnar",
    "Mysore / Coorg",
    "Coastal Karnataka",
    "Ooty",
    "Private farm/villa plots",
];

export default function VillasPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'villa-e7');

    return (
        <>
            <SiteHeader />
             {heroImage && <PageHero 
                title="GRP Resort Villas & Pods"
                description="Luxury, climate-resistant GRP cabins for tourism and resort developers. Designed to deliver high aesthetics with rapid installation and long-term rental ROI."
                imageUrl={heroImage.imageUrl}
                imageHint={heroImage.imageHint}
             />}
            <main className="container py-12 md:py-20">
                 <div className="mt-12 grid gap-12 md:grid-cols-2">
                    <ScrollReveal delay={200}>
                        <h2 className="text-2xl font-bold font-headline">Features</h2>
                        <ul className="mt-4 space-y-3 text-muted-foreground">
                            {features.map(item => (
                                <li key={item} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /> {item}</li>
                            ))}
                        </ul>
                    </ScrollReveal>

                    <ScrollReveal delay={300}>
                        <h2 className="text-2xl font-bold font-headline">Ideal Locations</h2>
                         <ul className="mt-4 space-y-3 text-muted-foreground">
                            {idealLocations.map(item => (
                                <li key={item} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /> {item}</li>
                            ))}
                        </ul>
                    </ScrollReveal>
                </div>
            </main>
            <SiteFooter />
        </>
    );
}

