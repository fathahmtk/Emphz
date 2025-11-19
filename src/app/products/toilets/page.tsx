
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CheckCircle } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ImageGallery } from "@/components/image-gallery";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GRP Portable Toilets Kerala | Durable Toilet Cabins – EMPHZ',
  description: 'Hygienic, durable GRP toilet cabins built for Kerala’s humidity and heavy usage. Available in Western, Indian, and custom models.',
};

const benefits = [
    "Leak-proof one-piece construction prevents water damage",
    "UV and moisture resistant for long-term outdoor use",
    "Smooth gelcoat surfaces are easy to clean and maintain hygiene",
    "Decades-long lifecycle, outlasting PVC or low-grade fiber",
    "Structurally robust to withstand heavy public use"
];

const models = [
    "Standard Single Toilet Cabin",
    "Indian/Western Combo Unit",
    "Luxury Portable Toilet with Sink",
    "Multi-Unit Housing & Sanitation Blocks",
    "Custom configurations available"
];

const useCases = [
    "Public events and exhibitions",
    "Construction and infrastructure sites",
    "Tourism spots and pilgrimage centers",
    "Highway rest areas and petrol pumps",
    "Public sanitation projects (Panchayat/Municipal)",
];

const galleryImages = PlaceHolderImages.filter(p => ['gallery-project-2', 'toilet-1', 'toilet-2'].includes(p.id));

export default function ToiletsPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'gallery-project-2');

    return (
        <>
            <SiteHeader />
             {heroImage && <PageHero 
                title="GRP Portable Toilets"
                description="Monsoon-proof, hygienic, high-strength GRP toilet cabins engineered for continuous public usage."
                imageUrl={heroImage.imageUrl}
                imageHint={heroImage.imageHint}
             />}
            <main className="container py-12 md:py-20 space-y-16">
                <div className="grid gap-12 md:grid-cols-2">
                    <ScrollReveal>
                        <h2 className="text-2xl font-bold font-headline">Benefits</h2>
                        <ul className="mt-4 space-y-3 text-muted-foreground">
                            {benefits.map(item => (
                                <li key={item} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /> {item}</li>
                            ))}
                        </ul>
                    </ScrollReveal>
                    <ScrollReveal delay={100}>
                        <h2 className="text-2xl font-bold font-headline">Use Cases</h2>
                         <ul className="mt-4 space-y-3 text-muted-foreground">
                            {useCases.map(item => (
                                <li key={item} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /> {item}</li>
                            ))}
                        </ul>
                    </ScrollReveal>
                </div>
                 <ScrollReveal delay={200}>
                    <h2 className="text-3xl font-bold font-headline text-center">Models</h2>
                     <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-muted-foreground">
                        {models.map(item => (
                            <li key={item} className="flex items-center gap-3 p-4 bg-card rounded-lg border"><CheckCircle className="h-5 w-5 text-primary" /> {item}</li>
                        ))}
                    </ul>
                </ScrollReveal>
                <ScrollReveal delay={300}>
                    <h2 className="text-3xl font-bold font-headline text-center">Gallery</h2>
                    <div className="mt-6">
                        <ImageGallery images={galleryImages} />
                    </div>
                </ScrollReveal>
            </main>
            <SiteFooter />
        </>
    );
}
