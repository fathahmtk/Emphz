
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ImageGallery } from "@/components/image-gallery";

export default function GalleryPage() {
    const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-') || p.id.startsWith('case-study-'));

    return (
        <>
            <SiteHeader />
            <main className="container py-12 md:py-20">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Project & Product Gallery</h1>
                        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
                           Explore our gallery to see EMPHZ products in action, from our manufacturing facility to real-world project sites.
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
