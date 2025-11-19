
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CheckCircle } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const keyBenefits = [
    "Non-corrosive & weatherproof",
    "IP-rated & tamper-resistant",
    "Non-conductive — ideal for electrical environments",
    "Customizable: size, thickness, cutouts, fittings",
    "Lightweight & installation-friendly",
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
    "Solar power projects",
    "Industrial automation",
    "Telecom nodes",
    "Facility electrical rooms",
];

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
            <main className="container py-12 md:py-20">
                <div className="mt-12 grid gap-12 md:grid-cols-2">
                    <ScrollReveal delay={200}>
                        <h2 className="text-2xl font-bold font-headline">Key Benefits</h2>
                        <ul className="mt-4 space-y-3 text-muted-foreground">
                            {keyBenefits.map(feature => (
                                <li key={feature} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /> {feature}</li>
                            ))}
                        </ul>
                    </ScrollReveal>
                    <ScrollReveal delay={300}>
                        <h2 className="text-2xl font-bold font-headline">Applications</h2>
                         <ul className="mt-4 space-y-3 text-muted-foreground">
                            {applications.map(app => (
                                <li key={app} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /> {app}</li>
                            ))}
                        </ul>
                    </ScrollReveal>
                </div>
                 <div className="mt-12">
                    <ScrollReveal delay={400}>
                        <h2 className="text-2xl font-bold font-headline">Variants</h2>
                         <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                            {variants.map(app => (
                                <li key={app} className="flex items-center gap-3 p-4 bg-card rounded-lg border"><CheckCircle className="h-5 w-5 text-primary" /> {app}</li>
                            ))}
                        </ul>
                    </ScrollReveal>
                </div>
            </main>
            <SiteFooter />
        </>
    );
}
