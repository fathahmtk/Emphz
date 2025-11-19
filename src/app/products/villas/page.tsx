
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CheckCircle } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ImageGallery } from "@/components/image-gallery";

const features = [
    "Premium interior finishes (wood, stone, etc.)",
    "Superior sound & heat insulation for comfort",
    "Long lifecycle with minimal maintenance",
    "Customizable sizes & layouts to fit your vision",
    "Modern architectural designs with large glazings",
    "Rapid installation compared to traditional construction"
];

const idealLocations = [
    "Wayanad (Resorts, Private Estates)",
    "Munnar (Tea Plantation Bungalows)",
    "Mysore / Coorg (Coffee Estate Villas)",
    "Coastal Karnataka / Kerala (Beachfront Properties)",
    "Ooty / Kodaikanal (Hill Station Retreats)",
    "Private farm/villa plots",
];

const galleryImages = PlaceHolderImages.filter(p => ['villa-e7', 'villa-1', 'villa-2', 'villa-e6'].includes(p.id));

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
            <main className="container py-12 md:py-20 space-y-16">
                 <div className="grid gap-12 md:grid-cols-2">
                    <ScrollReveal>
                        <h2 className="text-2xl font-bold font-headline">Features</h2>
                        <ul className="mt-4 space-y-3 text-muted-foreground">
                            {features.map(item => (
                                <li key={item} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /> {item}</li>
                            ))}
                        </ul>
                    </ScrollReveal>

                    <ScrollReveal delay={100}>
                        <h2 className="text-2xl font-bold font-headline">Ideal Locations</h2>
                         <ul className="mt-4 space-y-3 text-muted-foreground">
                            {idealLocations.map(item => (
                                <li key={item} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /> {item}</li>
                            ))}
                        </ul>
                    </ScrollReveal>
                </div>
                 <ScrollReveal delay={200}>
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
