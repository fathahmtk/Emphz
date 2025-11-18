
import { ContactForm } from "@/components/contact-form";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MessageSquare } from "lucide-react";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Connect with EMPHZ for technical support, product inquiries, and project collaboration. Upload drawings, specifications, or tender documents directly.",
};

const contactChannels = [
    { icon: Phone, text: "Sales: +971 4 123 4567", href: "tel:+97141234567" },
    { icon: Phone, text: "Support: +971 4 765 4321", href: "tel:+97147654321" },
    { icon: Mail, text: "Sales: sales@emphz.com", href: "mailto:sales@emphz.com" },
    { icon: Mail, text: "Support: support@emphz.com", href: "mailto:support@emphz.com" },
    { icon: MessageSquare, text: "WhatsApp / Instant Chat", href: "#" },
];


export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="bg-primary/5">
          <div className="container px-4 md:px-6 py-12 md:py-20">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Connect with EMPHZ</h1>
                <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-lg">
                  Technical Support, Product Inquiries & Project Collaboration. EMPHZ teams respond quickly to technical requests, project requirements, and product inquiries. Upload drawings, specifications, or tender documents directly via the form.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <ScrollReveal delay={200} className="lg:col-span-3">
                <ContactForm />
              </ScrollReveal>
              <ScrollReveal delay={400} className="lg:col-span-2 space-y-8">
                <Card className="bg-card/80">
                  <CardHeader>
                    <CardTitle>Contact Channels</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-muted-foreground">
                    {contactChannels.map(channel => (
                         <a key={channel.text} href={channel.href} className="flex items-center gap-4 hover:text-accent transition-colors">
                          <channel.icon className="w-5 h-5 text-accent" />
                          <span>{channel.text}</span>
                        </a>
                    ))}
                    <p className="text-sm pt-2">Operating Hours: Sun-Thu, 8:00 AM - 6:00 PM (GMT+4)</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/80">
                  <CardHeader>
                    <CardTitle>Looking for documentation?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">Access datasheets, CAD files, and compliance documents instantly.</p>
                    <Button asChild className="w-full">
                        <Link href="/downloads">Request Specifications Pack</Link>
                    </Button>
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
