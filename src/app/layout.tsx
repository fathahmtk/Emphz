
import type { ReactNode } from 'react';
import { Urbanist, Playfair_Display } from 'next/font/google';

import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster";
import { FirebaseClientProvider } from '@/firebase';
import { ClientOnly } from '@/components/client-only';
import { BackToTopButton } from '@/components/ui/back-to-top-button';

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-body',
});

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-headline',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn('min-h-screen font-body antialiased', urbanist.variable, playfairDisplay.variable)}>
        <FirebaseClientProvider>
          <ClientOnly>
            <div className="relative flex min-h-dvh flex-col bg-background">
                {children}
            </div>
          </ClientOnly>
        </FirebaseClientProvider>
        <Toaster />
        <BackToTopButton />
      </body>
    </html>
  );
}
