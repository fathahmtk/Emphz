
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CheckCircle } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ImageGallery } from "@/components/image-gallery";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GRP Electrical Enclosures | Weatherproof GRP Cabinets – EMPHZ South India',
  description: 'High-strength GRP enclosures for industrial, solar, and electrical applications. Single, double, and multi-door cabinets. IP-rated and corrosion-proof.',
};


const keyBenefits = [
    "Non-corrosive & weatherproof for outdoor longevity",
    "IP-rated & tamper-resistant for security",
    "Non-conductive — ideal for electrical environments",
    "Customizable: size, thickness, cutouts, fittings",
    "Lightweight & installation-friendly",
    "High thermal insulation properties"
];

const variants = [
    "Single-Door GRP Enclosures",
    "Double-Door GRP Cabinets",
    "Multi-Door / MCC GRP Cabinets",
    "GRP Battery Cabinets",
    "GRP Solar Inverter Enclosures",
    "Telecom/IoT GRP Cabinets",
];

const applications = [
    "KSEB / EB installations",
    "Solar power projects (inverter & battery housing)",
    "Industrial automation and control panels",
    "Telecom nodes and signal repeaters",
    "Facility electrical rooms and switchgear protection",
];

const galleryImages = PlaceHolderImages.filter(p => ['gallery-product-1', 'enclosure-1', 'enclosure-2', 'gallery-project-1'].includes(p.id));

export default function EnclosuresPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'gallery-product-1');

    return (
        <>
            <SiteHeader />
             {heroImage && <PageHero 
                title="GRP Electrical Enclosures"
                description="Our GRP electrical enclosures are designed for outdoor and industrial applications where corrosion, heat, and moisture destroy traditional metal cabinets. These enclosures deliver uncompromised safety and longevity."
                imageUrl={heroImage.imageUrl}
                imageHint={heroImage.imageHint}
             />}
            <main className="container py-12 md:py-20 space-y-16">
                <div className="grid gap-12 md:grid-cols-2">
                    <ScrollReveal>
                        <h2 className="text-2xl font-bold font-headline">Key Benefits</h2>
                        <ul className="mt-4 space-y-3 text-muted-foreground">
                            {keyBenefits.map(feature => (
                                <li key={feature} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /> {feature}</li>
                            ))}
                        </ul>
                    </ScrollReveal>
                    <ScrollReveal delay={100}>
                        <h2 className="text-2xl font-bold font-headline">Applications</h2>
                         <ul className="mt-4 space-y-3 text-muted-foreground">
                            {applications.map(app => (
                                <li key={app} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /> {app}</li>
                            ))}
                        </ul>
                    </ScrollReveal>
                </div>
                 <ScrollReveal delay={200}>
                    <h2 className="text-3xl font-bold font-headline text-center">Variants</h2>
                     <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-muted-foreground">
                        {variants.map(app => (
                            <li key={app} className="flex items-center gap-3 p-4 bg-card rounded-lg border"><CheckCircle className="h-5 w-5 text-primary" /> {app}</li>
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
