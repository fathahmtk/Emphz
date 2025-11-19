
import { ContactForm } from "@/components/contact-form";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MessageSquare, MapPin } from "lucide-react";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Connect with EMPHZ for technical support, product inquiries, and project collaboration. Upload drawings, specifications, or tender documents directly.",
};

export default function ContactPage() {
    const bgImage = PlaceHolderImages.find(p => p.id === 'office-location');

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="relative isolate min-h-screen">
            {bgImage && (
                <div className="absolute inset-0 -z-10 h-full w-full">
                    <Image
                        src={bgImage.imageUrl}
                        alt={bgImage.description}
                        data-ai-hint={bgImage.imageHint}
                        quality={100}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-background/80" />
                </div>
            )}
          <div className="container px-4 md:px-6 py-24 md:py-32">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline text-foreground">Request Quotation or Schedule Site Visit</h1>
                <p className="mt-4 max-w-3xl mx-auto text-foreground/80 md:text-lg">
                  Our teams in Mysore and Kerala are ready to assist with your project requirements.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              <ScrollReveal delay={200} className="lg:col-span-3">
                <ContactForm />
              </ScrollReveal>
              <ScrollReveal delay={400} className="lg:col-span-2 space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-muted-foreground">
                    <a href="tel:+91XXXXXXXX" className="flex items-center gap-4 hover:text-accent-foreground transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                      <span>+91 XXXXXXXX</span>
                    </a>
                    <a href="mailto:info@emphz.com" className="flex items-center gap-4 hover:text-accent-foreground transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                      <span>info@emphz.com</span>
                    </a>
                    <a href="https://wa.me/91XXXXXXXX" className="flex items-center gap-4 hover:text-accent-foreground transition-colors">
                      <MessageSquare className="w-5 h-5 text-primary" />
                      <span>WhatsApp: +91 XXXXXXXX</span>
                    </a>
                  </CardContent>
                </Card>
                 <Card>
                  <CardHeader>
                    <CardTitle>Locations</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                     <div className="flex items-start gap-4">
                        <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold text-foreground">Factory (Manufacturing Unit)</h4>
                            <p className="text-muted-foreground">Mysore, Karnataka</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold text-foreground">Kerala Operations Office</h4>
                            <p className="text-muted-foreground">[Add Kerala office location]</p>
                        </div>
                     </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
