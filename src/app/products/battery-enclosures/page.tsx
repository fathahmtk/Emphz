import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function BatteryEnclosuresPage() {
    return (
        <>
            <SiteHeader />
            <main className="container max-w-4xl py-12">
                <h1 className="text-4xl font-bold font-headline">Battery Enclosures</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Secure enclosures for energy storage.
                </p>
            </main>
            <SiteFooter />
        </>
    );
}
