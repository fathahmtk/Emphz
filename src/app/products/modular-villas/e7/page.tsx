
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { productsSeed } from "@/lib/products-data";

export default function E7VillaPage() {
    const product = productsSeed.find(p => p.name === "E7 Modular Villa");
    const heroImage = PlaceHolderImages.find(p => p.id === 'villa-e7');

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <SiteHeader />
             {heroImage && <PageHero 
                title={product.name}
                description={product.overview}
                imageUrl={heroImage.imageUrl}
                imageHint={heroImage.imageHint}
             />}
            <main className="container py-12 md:py-20">
                {!heroImage && (
                    <ScrollReveal>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">{product.name}</h1>
                        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                            {product.overview}
                        </p>
                    </ScrollReveal>
                )}


                <div className="mt-12 grid gap-12 md:grid-cols-2">
                    <ScrollReveal delay={200}>
                        <h2 className="text-2xl font-bold font-headline">Key Features</h2>
                        <ul className="mt-4 space-y-3 text-muted-foreground">
                            {Object.entries(product.specifications).map(([key, value]) => (
                                <li key={key} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-foreground/60" /> <strong>{key}:</strong> {value}</li>
                            ))}
                        </ul>
                    </ScrollReveal>

                    <ScrollReveal delay={300}>
                        <h2 className="text-2xl font-bold font-headline">Ideal Applications</h2>
                         <ul className="mt-4 space-y-3 text-muted-foreground">
                            {product.applications.map(app => (
                                <li key={app} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-foreground/60" /> {app}</li>
                            ))}
                        </ul>
                    </ScrollReveal>
                </div>
                 <ScrollReveal delay={400} className="mt-12">
                    <h2 className="text-2xl font-bold font-headline">Downloads</h2>
                    <div className="mt-4 flex flex-wrap gap-4">
                        <Button variant="outline" asChild>
                            <a href={product.datasheetUrl} download>Datasheet</a>
                        </Button>
                    </div>
                </ScrollReveal>
            </main>
            <SiteFooter />
        </>
    );
}
