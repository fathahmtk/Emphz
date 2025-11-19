
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CheckCircle } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ImageGallery } from "@/components/image-gallery";

const features = [
    "Reinforced walls for impact resistance",
    "Clear vision windows for 360° visibility",
    "Integrated ventilation systems",
    "Optional AC cut-outs and electrical wiring",
    "Durable structural base for stability",
    "Ergonomic interior layouts"
];

const applications = [
    "Residential apartment complexes",
    "Commercial buildings and office parks",
    "Industrial facilities and factories",
    "Event venues and public spaces",
    "Infrastructure project sites"
];

const galleryImages = PlaceHolderImages.filter(p => ['security-cabin-1', 'security-cabin-2', 'gallery-kiosk'].includes(p.id));

export default function SecurityCabinsPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'gallery-kiosk');

    return (
        <>
            <SiteHeader />
             {heroImage && <PageHero 
                title="GRP Security Cabins"
                description="Secure, durable, thermally insulated GRP security cabins designed for malls, companies, commercial buildings, and residential communities."
                imageUrl={heroImage.imageUrl}
                imageHint={heroImage.imageHint}
             />}
            <main className="container py-12 md:py-20 space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <ScrollReveal delay={200}>
                        <h2 className="text-2xl font-bold">Features</h2>
                        <ul className="mt-4 space-y-3 text-muted-foreground">
                            {features.map(feature => (
                                <li key={feature} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /> {feature}</li>
                            ))}
                        </ul>
                    </ScrollReveal>
                    <ScrollReveal delay={300}>
                        <h2 className="text-2xl font-bold">Ideal For</h2>
                        <ul className="mt-4 space-y-3 text-muted-foreground">
                            {applications.map(feature => (
                                <li key={feature} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /> {feature}</li>
                            ))}
                        </ul>
                    </ScrollReveal>
                </div>
                <ScrollReveal delay={400}>
                    <h2 className="text-3xl font-bold text-center">Gallery</h2>
                    <div className="mt-6">
                        <ImageGallery images={galleryImages} />
                    </div>
                </ScrollReveal>
            </main>
            <SiteFooter />
        </>
    );
}
