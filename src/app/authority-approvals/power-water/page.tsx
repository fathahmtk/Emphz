import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function PowerWaterPage() {
    return (
        <>
            <SiteHeader />
            <main className="container max-w-5xl py-12">
                <h1 className="text-4xl font-bold font-headline">Power & Water Approvals</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Approvals from power and water authorities.
                </p>
            </main>
            <SiteFooter />
        </>
    );
}
