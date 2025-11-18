import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function WaterTreatmentPage() {
    return (
        <>
            <SiteHeader />
            <main className="container max-w-4xl py-12">
                <h1 className="text-4xl font-bold font-headline">Water Treatment</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Durable products for water management.
                </p>
            </main>
            <SiteFooter />
        </>
    );
}
