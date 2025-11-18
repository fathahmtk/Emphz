
'use client'

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Playfair_Display, Manrope } from 'next/font/google';

import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster";
import { FirebaseClientProvider } from '@/firebase';
import { ClientOnly } from '@/components/client-only';
import { BackToTopButton } from '@/components/ui/back-to-top-button';
import { HeroCarousel } from '@/components/hero-carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';


const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-headline',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
})

// This component uses client-side hooks, so it must be a client component.
function RootBody({
  children,
}: {
  children: ReactNode,
}) {
    const pathname = usePathname();
    const heroImages = PlaceHolderImages.filter(p => [
      'hero-main',
      'gallery-factory-3',
      'gallery-project-1',
      'gallery-instrumentation',
      'gallery-project-4',
      'hero-industrial-plant',
      'hero-extra-1',
      'hero-extra-2',
      'hero-extra-3',
      'hero-extra-4',
      'hero-extra-5',
      'hero-extra-6',
      'hero-extra-7',
      'hero-extra-8'
    ].includes(p.id));


    return (
        <body className={cn('min-h-screen font-body antialiased', playfair.variable, manrope.variable)}>
            <FirebaseClientProvider>
                <ClientOnly>
                    <div className="relative flex min-h-dvh flex-col bg-background">
                        <HeroCarousel images={heroImages} />
                        <div className="absolute inset-0 bg-black/50 z-0" />
                        <div className="z-10 flex flex-col flex-1">
                          {children}
                        </div>
                    </div>
                </ClientOnly>
            </FirebaseClientProvider>
            <Toaster />
            <BackToTopButton />
        </body>
    )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <RootBody>{children}</RootBody>
    </html>
  );
}
