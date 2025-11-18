import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function TeamPage() {
    return (
        <>
            <SiteHeader />
            <main className="container max-w-4xl py-12">
                <h1 className="text-4xl font-bold font-headline">Our Team</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Meet the people behind our success.
                </p>
            </main>
            <SiteFooter />
        </>
    );
}
