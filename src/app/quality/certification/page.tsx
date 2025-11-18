import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function CertificationPage() {
    return (
        <>
            <SiteHeader />
            <main className="container max-w-4xl py-12">
                <h1 className="text-4xl font-bold font-headline">Product Certification</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Our certified quality standards.
                </p>
            </main>
            <SiteFooter />
        </>
    );
}
