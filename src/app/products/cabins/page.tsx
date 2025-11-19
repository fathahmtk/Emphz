
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CheckCircle } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const features = [
    "Reinforced walls",
    "Clear vision windows",
    "Ventilation",
    "Optional AC cut-outs",
    "Durable structural base",
];

export default function SecurityCabinsPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'gallery-kiosk'); // Re-using kiosk image

    return (
        <>
            <SiteHeader />
             {heroImage && <PageHero 
                title="GRP Security Cabins"
                description="Secure, durable, thermally insulated GRP security cabins designed for malls, companies, commercial buildings, and residential communities."
                imageUrl={heroImage.imageUrl}
                imageHint={heroImage.imageHint}
             />}
            <main className="container py-12 md:py-20">
                <ScrollReveal delay={200}>
                    <h2 className="text-2xl font-bold font-headline">Features</h2>
                    <ul className="mt-4 space-y-3 text-muted-foreground">
                        {features.map(feature => (
                            <li key={feature} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /> {feature}</li>
                        ))}
                    </ul>
                </ScrollReveal>
            </main>
            <SiteFooter />
        </>
    );
}
