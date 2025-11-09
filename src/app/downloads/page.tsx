
import { downloads } from "@/lib/data";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";
import { type Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Access technical datasheets, brochures, and guides for Emphz's GRP products. Download the resources you need for your project planning.",
};

export default function DownloadsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="container max-w-4xl px-4 md:px-6 py-12 md:py-20">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Technical Downloads</h1>
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
                Access our library of technical resources to get detailed information about our products.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="space-y-4">
              {downloads.map((item) => (
                <Card key={item.id} className="bg-card/80">
                  <div className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-4">
                      <FileText className="w-8 h-8 text-accent"/>
                      <div>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription className="mt-1">{item.description}</CardDescription>
                      </div>
                    </div>
                    <Button asChild variant="outline">
                      <a href={item.fileUrl} download>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
