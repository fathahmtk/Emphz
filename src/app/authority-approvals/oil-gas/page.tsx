import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function OilGasPage() {
    return (
        <>
            <SiteHeader />
            <main className="container max-w-5xl py-12">
                <h1 className="text-4xl font-bold font-headline">Oil & Gas Approvals</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Certified for the oil and gas industry.
                </p>
            </main>
            <SiteFooter />
        </>
    );
}
