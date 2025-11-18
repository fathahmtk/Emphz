
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ImageGallery } from "@/components/image-gallery";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Separator } from "@/components/ui/separator";

const productImages = PlaceHolderImages.filter(img => 
    img.id.startsWith('gallery-product') || 
    img.id.startsWith('gallery-kiosk') ||
    img.id.startsWith('gallery-roofing') ||
    img.id.startsWith('gallery-fire-safety') ||
    img.id.startsWith('gallery-instrumentation') ||
    img.id.startsWith('gallery-battery-enclosure')
);
const factoryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-factory'));
const projectImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-project'));
const eventImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-event'));
const teamImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-team'));


export default function GalleryPage() {
    return (
        <>
            <SiteHeader />
            <main className="container py-12 md:py-20">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Photo Gallery</h1>
                        <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            A curated visual archive showcasing EMPHZ’s products, manufacturing capabilities, site installations, and project deployments for validation, marketing, and procurement reference.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="space-y-16">
                     <ScrollReveal delay={200}>
                        <h2 className="text-3xl font-bold font-headline mb-6">Product Gallery</h2>
                        <ImageGallery images={productImages} />
                    </ScrollReveal>

                    <Separator />

                    <ScrollReveal delay={300}>
                        <h2 className="text-3xl font-bold font-headline mb-6">Factory & Manufacturing</h2>
                        <ImageGallery images={factoryImages} />
                    </ScrollReveal>
                    
                    <Separator />

                    <ScrollReveal delay={400}>
                        <h2 className="text-3xl font-bold font-headline mb-6">Projects & Field Installations</h2>
                        <ImageGallery images={projectImages} />
                    </ScrollReveal>

                    <Separator />

                    <ScrollReveal delay={500}>
                        <h2 className="text-3xl font-bold font-headline mb-6">Events & Exhibitions</h2>
                        <ImageGallery images={eventImages} />
                    </ScrollReveal>

                     <Separator />

                    <ScrollReveal delay={600}>
                        <h2 className="text-3xl font-bold font-headline mb-6">Team & Operations</h2>
                        <ImageGallery images={teamImages} />
                    </ScrollReveal>
                </div>
            </main>
            <SiteFooter />
        </>
    );
}
