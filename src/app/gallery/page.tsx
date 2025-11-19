
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ImageGallery } from "@/components/image-gallery";

export default function GalleryPage() {
    // Curate a specific set of images for the main gallery
    const galleryImages = PlaceHolderImages.filter(p => [
        'hero-new-4',
        'gallery-project-1',
        'gallery-kiosk',
        'villa-e7',
        'gallery-factory-3',
        'gallery-project-2',
        'enclosure-2',
        'toilet-1',
        'security-cabin-1',
        'hero-industrial-plant',
        'hero-new-2',
        'case-study-after-2'
    ].includes(p.id));

    return (
        <>
            <SiteHeader />
            <main className="container py-12 md:py-20">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Gallery</h1>
                        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
                           A collection of our projects and products, showcasing the quality and versatility of our GRP solutions.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                    <ImageGallery images={galleryImages} />
                </ScrollReveal>
            </main>
            <SiteFooter />
        </>
    );
}
