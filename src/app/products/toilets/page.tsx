
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CheckCircle } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const benefits = [
    "Leak-proof one-piece construction",
    "UV and moisture resistant",
    "Easy to clean",
    "Long lifecycle",
    "Better alternative to PVC or low-grade fiber",
];

const models = [
    "Standard Toilet Cabin",
    "Indian/Western Combo",
    "Luxury Portable Toilet",
    "Multi-Unit Housing Block",
];

const useCases = [
    "Events",
    "Construction sites",
    "Tourism spots",
    "Highway rest areas",
    "Public sanitation projects",
];

export default function ToiletsPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'gallery-project-2'); // Re-using image

    return (
        <>
            <SiteHeader />
             {heroImage && <PageHero 
                title="GRP Portable Toilets"
                description="Monsoon-proof, hygienic, high-strength GRP toilet cabins engineered for continuous public usage."
                imageUrl={heroImage.imageUrl}
                imageHint={heroImage.imageHint}
             />}
            <main className="container py-12 md:py-20">
                <div className="mt-12 grid gap-12 md:grid-cols-2">
                    <ScrollReveal delay={200}>
                        <h2 className="text-2xl font-bold font-headline">Benefits</h2>
                        <ul className="mt-4 space-y-3 text-muted-foreground">
                            {benefits.map(item => (
                                <li key={item} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /> {item}</li>
                            ))}
                        </ul>
                    </ScrollReveal>
                    <ScrollReveal delay={300}>
                        <h2 className="text-2xl font-bold font-headline">Use Cases</h2>
                         <ul className="mt-4 space-y-3 text-muted-foreground">
                            {useCases.map(item => (
                                <li key={item} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /> {item}</li>
                            ))}
                        </ul>
                    </ScrollReveal>
                </div>
                 <div className="mt-12">
                    <ScrollReveal delay={400}>
                        <h2 className="text-2xl font-bold font-headline">Models</h2>
                         <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                            {models.map(item => (
                                <li key={item} className="flex items-center gap-3 p-4 bg-card rounded-lg border"><CheckCircle className="h-5 w-5 text-primary" /> {item}</li>
                            ))}
                        </ul>
                    </ScrollReveal>
                </div>
            </main>
            <SiteFooter />
        </>
    );
}
