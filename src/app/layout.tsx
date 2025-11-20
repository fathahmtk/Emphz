
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster";
import { FirebaseClientProvider } from '@/firebase';
import { BackToTopButton } from '@/components/ui/back-to-top-button';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const inter_headline = Inter({
    subsets: ['latin'],
    weight: ['700'],
    variable: '--font-headline',
});

export const metadata: Metadata = {
  title: 'EMPHZ – GRP Enclosures, Portable Toilets & Modular Kiosks | Mysore Factory, Kerala Operations',
  description: 'Premium GRP electrical enclosures, portable toilet cabins, kiosks, security cabins, and resort villas. Manufactured in Mysore with full operations across Kerala. Weatherproof, corrosion-resistant GRP solutions.',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn('min-h-screen font-body antialiased', inter.variable, inter_headline.variable)}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <FirebaseClientProvider>
                <div className="relative flex min-h-dvh flex-col bg-background">
                    {children}
                </div>
            </FirebaseClientProvider>
            <Toaster />
            <BackToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
