
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ImageGallery } from "@/components/image-gallery";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GRP Modular Kiosks & Security Cabins | EMPHZ Kerala',
  description: 'GRP kiosks designed for food stalls, ticket counters, and security cabins. Strong, weatherproof, long-lasting structures.',
};

const keyFeatures = [
    "Rigid, monolithic GRP construction",
    "Premium exterior finish with custom branding options",
    "Insulated walls and roof for thermal comfort",
    "Electrical-ready interior with provisions for lighting and power",
    "Weatherproof and secure locking systems"
];

const applications = [
    "Food & Beverage Kiosks",
    "Retail & Merchandising Pods",
    "Ticketing & Information Counters",
    "Guard Booths & Security Checkpoints",
    "Micro Control Rooms & Operator Cabins",
];

const galleryImages = PlaceHolderImages.filter(p => ['gallery-kiosk', 'kiosk-1', 'kiosk-2', 'gallery-kiosk-2'].includes(p.id));

export default function KiosksPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'gallery-kiosk');

    return (
        <>
            <SiteHeader />
             {heroImage && <PageHero 
                title="GRP Modular Kiosks"
                description="Turnkey GRP kiosks for food retail, ticketing, micro-shops, tourism counters, and commercial setups."
                imageUrl={heroImage.imageUrl}
                imageHint={heroImage.imageHint}
             />}
            <main className="container py-12 md:py-20 space-y-16">
                <div className="grid gap-12 md:grid-cols-2">
                    <ScrollReveal>
                        <h2 className="text-2xl font-bold">Key Features</h2>
                        <ul className="mt-4 space-y-3 text-muted-foreground">
                            {keyFeatures.map(feature => (
                                <li key={feature} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /> {feature}</li>
                            ))}
                        </ul>
                    </ScrollReveal>

                    <ScrollReveal delay={100}>
                        <h2 className="text-2xl font-bold">Applications</h2>
                         <ul className="mt-4 space-y-3 text-muted-foreground">
                            {applications.map(app => (
                                <li key={app} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /> {app}</li>
                            ))}
                        </ul>
                    </ScrollReveal>
                </div>

                <ScrollReveal delay={200}>
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
